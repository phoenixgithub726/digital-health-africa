import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import firebase from '../../../../utils/firebase'
import Button from '@material-ui/core/Button';
import Content from '../Content'
import './style.css';
// import './style.js';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Grid>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    float: 'left',
    // width:'60%',
  },
  paper: {
    padding: theme.spacing(3, 2),
    height: '100px',
    marginTop: '20px',
    boxShadow: '1px 2px 1px -1px rgba(22, 22, 22, 15), 0px 1px 1px 0px rgba(22, 22, 22, 15), 0px 1px 3px 0px rgba(22, 22, 22, 15)',
  },
  grid: {
    height: '30%'
  },
  tabHeader :{
    overflow: 'auto',
  },
  tabPanel: {
    overflowY: 'auto',
    height: '550px'
  },
  questionPost: {
    width: '30%',
    float: 'left',
    marginLeft: '20px',
    height: '58%',
    padding: '10px',
    border: '1px solid #009da7',
    borderRadius: '4px',
    background: '#ffffff',
    border: '7px solid #aaa',
    boxShadow: '0 2px 4px rgba(22, 22, 22, 0.15)'
  },
  Quiz: {
    height: '10%',
    fontSize: '17px',
    fontWeight: 'bold',
  },
  cancel_edit: {
    height: '30px',
    width: '80%',
    padding: '2px',
    textDecoration: 'underline',
    textTransform: "none"
  },
  yes_edit: {
    height: '30px',
    width: '80%',
    padding: '2px',
    color: 'white',
    backgroundColor: '#3d8ccb',
    textTransform: "none"
  },
  comments: {
    overflowY: 'auto',
    height: '40%',
    fontSize: '14px',
    alignItems: 'center',
    justify: 'center'
  },
  header: {
    height: '20%',
    textOverflow: 'ellipsis',
  }
}));

const weekDayMiliSeconds = 7 * 24 * 60 * 60 * 1000

const db = firebase.firestore().collection('forum_posts')

const Forum = ({ patientId }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [recentQuiz, setRecentQuiz] = useState([])
  const [answered, setAnswered] = useState([])
  const [no_answered, setNoAnswered] = useState([])
  const [recentPost, setRecentPost] = useState([])
  const [commentsData, setCommentsData] = useState({})
  const [value, setValue] = React.useState(0);
  const [showPost, setShowPost] = useState(false)
  const [questionData, setQuestionData] = useState('')
  const [commentData, setCommentData] = useState('')
  const [titleData, setTitleData] = useState('')
  const [showComment, setShowComment] = useState(false)

  useEffect(() => {
    getDataForRendering(patientId)
  }, [patientId])

  const getDataForRendering = (patientId) => {

    db
      .where('author_id', '==', patientId)
      .onSnapshot(snapshot => {
        let answered_buf = []
        let no_answered_buf = []
        let recentQuiz_buf = []
        snapshot.forEach(doc => {
          if (new Date().getTime() - doc.data().date.seconds > weekDayMiliSeconds)
            recentQuiz_buf.push(doc.data())
          if (doc.data().answered)
            answered_buf.push(doc.data())
          else
            no_answered_buf.push(doc.data())
        })
        setRecentQuiz(recentQuiz_buf)
        setAnswered(answered_buf)
        setNoAnswered(no_answered_buf)
      })

    db
      .where('answered', '==', true)
      .onSnapshot(snapshot => {
        let recentPost_buf = []
        snapshot.forEach(doc => {
          if (new Date().getTime() - doc.data().date.seconds > weekDayMiliSeconds)
            recentPost_buf.push(doc.data())
        })
        setRecentPost(recentPost_buf)
      })
  }

  useEffect(() => {

  }, [answered, no_answered, recentPost, recentQuiz])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const handleQuestionChange = (e) => {
    setQuestionData(e.target.value)
  }

  const handleCommentChange = (e) => {
    setCommentData(e.target.value)
  }

  const handleTitleChange = (e) => {
    setTitleData(e.target.value)
  }

  const handleQuestion = () => {
    db
      .add({
        author_id: patientId,
        title: titleData,
        content: questionData,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        answered: false
      })
      .then((docRef) => {
        db
          .doc(docRef.id)
          .update({
            id: docRef.id
          })
          .then(() => {
            console.log('success')
            // getDataForRendering(patientId)
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })
    setShowPost(false)
  }

  const handleRelationComment = (comments) => {
    setShowComment(true)
    setCommentsData(comments)
  }

  const handleComment = () => {
    db
      .doc(commentsData.id)
      .update({ comments: firebase.firestore.FieldValue.arrayUnion(commentData) })
      .then((doc) => {
        console.log('success')
      })
    setShowComment(false)

  }

  return (
    <>
      <Grid className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            // variant="fullWidth"  
            className={classes.tabHeader}
            aria-label="full width tabs example"
          >
            {/* <Tab label="Recent My Question" {...a11yProps(0)} />
            <Tab label="Answered" {...a11yProps(1)} />
            <Tab label="No Answer" {...a11yProps(2)} />
            <Tab label="Recent Post" {...a11yProps(3)} />
            <Tab label="Recent My Question" {...a11yProps(0)} />
            <Tab label="Answered" {...a11yProps(1)} />
            <Tab label="No Answer" {...a11yProps(2)} />
            <Tab label="Recent Post" {...a11yProps(3)} /> */}
            <Tab label="Appointments" {...a11yProps(0)} />
            <Tab label="Case history change to Diagnosis" {...a11yProps(1)} />
            <Tab label="Prescription history" {...a11yProps(2)} />
            <Tab label="Lab test" {...a11yProps(3)} />
            <Tab label="Documents" {...a11yProps(4)} />
            <Tab label="Timeline" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          className={classes.swip}
        >
          <TabPanel value={value} index={0} dir={theme.direction} className={classes.tabPanel} style={{ padding: '0px' }}>
            {recentQuiz.map(ele => {
              return (
                <Content
                  key={'recentquiz' + ele.id}
                  ele={ele} disabled={showPost}
                  // cancelComment={showComment}
                  showComment={() => handleRelationComment(ele)}
                  ableComment={false}
                />
              )
            })
            }
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction} className={classes.tabPanel}>
            {answered.map(ele => {
              return (
                <Content
                  key={'answered' + ele.id}
                  ele={ele} disabled={showPost}
                  // cancelComment={showComment}
                  showComment={() => handleRelationComment(ele)}
                  ableComment={true}
                />
              )
            })
            }
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction} className={classes.tabPanel}>
            {no_answered.map(ele => {
              return (
                <Content
                  key={'noanswered' + ele.id}
                  ele={ele} disabled={showPost}
                  // cancelComment={showComment}
                  showComment={() => handleRelationComment(ele)}
                  ableComment={false}
                />
              )
            })
            }
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction} className={classes.tabPanel}>
            {recentPost.map(ele => {
              return (
                <Content
                  key={'recentpost' + ele.id}
                  ele={ele} disabled={showPost}
                  // cancelComment={showComment}
                  showComment={() => handleRelationComment(ele)}
                  ableComment={true}
                />
              )
            })
            }
          </TabPanel>
        </SwipeableViews>
        <Grid container item direction='row' justify='center' alignItems='center'>
          <Button
            size="small" variant="contained" style={{ width: '40%' }}
            color="default" className={classes.yes_edit}
            onClick={() => setShowPost(true)}
            disabled={showComment}
          >
            New Post
            </Button>
        </Grid>
      </Grid>
      <Grid container spacing={1} className={classes.questionPost}
        style={{ visibility: showPost ? 'visible' : 'hidden', display: showPost ? 'block' : 'none' }}
      >
        <Grid item xs={12} container justify="center" alignItems="center">
          <TextField
            id="outlined-full-width" label="Title" style={{ width: '100%' }}
            placeholder="Please Type Title"
            fullWidth margin="normal" variant="outlined" onChange={handleTitleChange}
          />
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <TextField
            id="outlined-multiline-static" label="Question"
            multiline rows="4" style={{ width: '100%' }}
            placeholder="Please Type Question"
            variant="outlined" onChange={handleQuestionChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} >
            <Grid container item xs={6} justify="center" alignItems="center">
              <Button size="small" className={classes.cancel_edit} onClick={() => setShowPost(false)}>
                Cancel
                  </Button>
            </Grid>
            <Grid container item xs={6} justify="center" alignItems="center">
              <Button
                size="small" variant="contained"
                color="default" className={classes.yes_edit}
                onClick={e => handleQuestion()}
              >
                Question
                  </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={1} className={classes.questionPost}
        style={{ visibility: showComment ? 'visible' : 'hidden', display: showComment ? 'block' : 'none' }}
      >
        <Grid item xs={12} container justify="flex-start" alignItems="center" className={classes.header}>
          title:{commentsData.title}<br />
          question:{commentsData.content}
        </Grid>
        <Grid className={classes.comments}>
          {
            commentsData.comments ? commentsData.comments.map((ele, index) => {
              return (
                <Grid container item justify='flex-start' key={index} style={{ padding: '5px 10px' }}>
                  {index + 1}:{ele}<br />
                </Grid>
              )
            })
              :
              <Grid container item justify='center' alignItems='center' style={{ color: 'red' }}>
                No Comment
            </Grid>
          }
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <TextField
            id="outlined-multiline-static" label="Comment"
            multiline rows="2" style={{ width: '100%' }}
            placeholder="Please Type Comment"
            variant="outlined" onChange={handleCommentChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} >
            <Grid container item xs={6} justify="center" alignItems="center">
              <Button size="small" className={classes.cancel_edit} onClick={() => setShowComment(false)}>
                Cancel
                  </Button>
            </Grid>
            <Grid container item xs={6} justify="center" alignItems="center">
              <Button
                size="small" variant="contained"
                color="default" className={classes.yes_edit}
                onClick={handleComment}
              >
                Comment
                  </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Forum