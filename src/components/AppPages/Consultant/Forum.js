import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import firebase from '../../../utils/firebase';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Content from './Content';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    'id': `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '60%',
    float: 'left',
  },
  paper: {
    padding: theme.spacing(3, 2),
    height: '100px',
    marginTop: '20px',
    boxShadow: '1px 2px 1px -1px rgba(22, 22, 22, 15), 0px 1px 1px 0px rgba(22, 22, 22, 15), 0px 1px 3px 0px rgba(22, 22, 22, 15)',
  },
  swip: {
    height: '100%'
  },
  tabPanel: {
    overflowY: 'auto',
    height: '550px'
  },
  answerPost: {
    width: '30%',
    float: 'left',
    marginLeft: '20px',
    height: '58%',
    padding: '10px',
    border: '1px solid #009da7',
    borderRadius: '4px',
    background: '#ffffff',
    border: '7px solid #aaa',
    boxShadow: '0 2px 4px rgba(22, 22, 22, 0.15)',
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
    textTransform: 'none',
  },
  comments: {
    overflowY: 'auto',
    height: '40%',
    fontSize: '14px',
    alignItems: 'center',
    justify: 'center',
  },
  yes_edit: {
    height: '30px',
    width: '80%',
    padding: '2px',
    color: 'white',
    backgroundColor: '#3d8ccb',
    textTransform: 'none',
  },
}));

const db = firebase.firestore().collection('forum_posts');
const weekDayMiliSeconds = 7 * 24 * 60 * 60 * 1000;

const Forum = ({ consultantId }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [answered, setAnswered] = useState([]);
  const [noAnswered, setNoAnswered] = useState([]);
  const [recentPost, setRecentPost] = useState([]);
  const [value, setValue] = React.useState(0);
  const [quizData, setQuizData] = useState({});
  const [show, setShow] = useState(false);
  const [answerData, setAnswerData] = useState('');
  const [showComment, setShowComment] = useState(false);
  const [commentsData, setCommentsData] = useState({});
  const [commentData, setCommentData] = useState('');

  useEffect(() => {
    getDataForRendering(consultantId);
  }, [consultantId, db]);

  useEffect(() => {
  }, [answered, noAnswered, recentPost, db]);

  const getDataForRendering = (consultantId) => {
    db
      .onSnapshot((snapshot) => {
        const answeredBuf = [];
        const noAnsweredBuf = [];
        const recenPostBuf = [];
        snapshot.forEach((doc) => {
          if (
            new Date().getTime() - doc.data().date.seconds > weekDayMiliSeconds) {
            recenPostBuf.push(doc.data());
          }
          if (doc.data().answered) {
            answeredBuf.push(doc.data());
          } else {
            noAnsweredBuf.push(doc.data());
          }
        });

        setAnswered(answeredBuf);
        setNoAnswered(noAnsweredBuf);
        setRecentPost(recenPostBuf);
      });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleOnClick = (data) => {
    if (!showComment) {
      setShow(true);
      setQuizData(data);
    } else {
      return;
    }
  };

  const handleCancel = () => {
    setShow(false);
  };

  const handleAnswer = (id) => {
    db
      .doc(id)
      .update({
        answered: true,
        answer_content: answerData,
      })
      .then((doc) => {
        console.log('success');
      })
      .catch((error) => {
        console.log(error);
      });
    setShow(false);
  };

  const handleAnswerChange = (e) => {
    setAnswerData(e.target.value);
  };

  const handleRelationComment = (comments) => {
    setShowComment(true);
    setCommentsData(comments);
  };

  const handleCommentChange = (e) => {
    setCommentData(e.target.value);
  };

  const handleComment = () => {
    db
      .doc(commentsData.id)
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion(commentData),
      })
      .then((doc) => {
        console.log('success');
      });
    setShowComment(false);
  };


  return (
    <>
      <Grid className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Recent Post" {...a11yProps(0)} />
            <Tab label="Recently Answered" {...a11yProps(1)} />
            <Tab label="No Answer" {...a11yProps(2)} />

          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          className={classes.swip}
        >
          <TabPanel
            value={value} index={0}
            dir={theme.direction}
            className={classes.tabPanel}
          >
            {recentPost.map((ele) => {
              return (
                <Content
                  key={'recentpost' + ele.id}
                  ele={ele} disabled={show}
                  // cancelComment={showComment}
                  showComment={() => handleRelationComment(ele)}
                  ableComment={false}
                />
              );
            })
            }
          </TabPanel>
          <TabPanel
            value={value} index={1}
            dir={theme.direction}
            className={classes.tabPanel}
          >
            {answered.map((ele) => {
              return (
                <Content
                  key={'recentanswered' + ele.id}
                  ele={ele} disabled={show}
                  showComment={() => handleRelationComment(ele)}
                  ableComment={true}
                />
              );
            })
            }
          </TabPanel>
          <TabPanel
            value={value} index={2}
            dir={theme.direction}
            className={classes.tabPanel}
          >
            {noAnswered.map((ele) => {
              return (
                <Paper
                  className={classes.paper}
                  key={'noAnswered' + ele.id}
                  onClick={(e) => handleOnClick(ele)}
                >
                  <Typography variant="h5" component="h3">
                    {ele.title}
                  </Typography>
                  <Typography component="p">
                    {ele.content}
                  </Typography>
                </Paper>
              );
            })
            }
          </TabPanel>
        </SwipeableViews>
      </Grid>

      <Grid
        container spacing={1} className={classes.answerPost}
        style={{
          visibility: show ? 'visible' : 'hidden',
          display: show ? 'block' : 'none'
        }}
      >
        <Grid
          item xs={12} className={classes.Quiz}
          container justify="flex-start" alignItems="center"
        >
          Subject:&nbsp;{quizData.title}
        </Grid>
        <Grid
          item xs={12} className={classes.Quiz}
          container justify="flex-start" alignItems="center"
        >
          Question:&nbsp;{quizData.content}
        </Grid>
        <Grid
          item xs={12} container
          justify="center" alignItems="center"
        >
          <TextField
            id="outlined-multiline-static" label="Answer"
            multiline rows="4" style={{ width: '100%' }}
            placeholder="Please kindly reply" variant="outlined"
            onChange={handleAnswerChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} >
            <Grid
              container item xs={6}
              justify="center" alignItems="center"
            >
              <Button
                size="small" className={classes.cancel_edit}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Grid>
            <Grid
              container item xs={6}
              justify="center" alignItems="center"
            >
              <Button
                size="small" variant="contained"
                color="default" className={classes.yes_edit}
                onClick={(e) => handleAnswer(quizData.id)}
              >
                Answer
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container spacing={1}
        className={classes.answerPost}
        style={{
          visibility: showComment ? 'visible' : 'hidden',
          display: showComment ? 'block' : 'none',
        }}
      >
        <Grid
          item xs={12} container
          justify="flex-start" alignItems="center"
          className={classes.header}
        >
          title:{commentsData.title}<br />
          question:{commentsData.content}
        </Grid>
        <Grid className={classes.comments}>
          {
            commentsData.comments ? commentsData.comments.map((ele, index) => {
              return (
                <Grid
                  container item justify='flex-start'
                  key={index} style={{ padding: '5px 10px' }}
                >
                  {index + 1}:{ele}<br />
                </Grid>
              );
            }) :
              <Grid
                container item justify='center'
                alignItems='center' style={{ color: 'red' }}
              >
                No Comment
            </Grid>
          }
        </Grid>
        <Grid
          item xs={12} container
          justify="center" alignItems="center"
        >
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
              <Button
                size="small" className={classes.cancel_edit}
                onClick={() => setShowComment(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid
              container item xs={6}
              justify="center" alignItems="center"
            >
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
};

Forum.propTypes = {
  consultantId: PropTypes.string.isRequired,
};

export default Forum;
