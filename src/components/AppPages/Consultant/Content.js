import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {Grid, Button} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MessageIcon from '@material-ui/icons/Message';
import {makeStyles} from '@material-ui/core/styles';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3, 2),
    height: '100px',
    marginTop: '20px',
    boxShadow: '1px 2px 1px -1px rgba(22, 22, 22, 15), 0px 1px 1px 0px rgba(22, 22, 22, 15), 0px 1px 3px 0px rgba(22, 22, 22, 15)',
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
    boxShadow: '0 2px 4px rgba(22, 22, 22, 0.15)',
  },
}));

const Content = ({ele, showComment, disabled, ableComment}) => {
  const classes = useStyles();
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(ele.like);
  const [follow, setFollow] = useState(false);
  const [comment, setComment] = useState(false);

  const handleLike = () => {
    if (!like) setLikeNum(likeNum + 1);
    else setLikeNum(likeNum - 1);
    setLike(!like);
  };

  const handleFollow = () => {
    setFollow(!follow);
  };

  const handleClick = () => {
    showComment();
  };

  return (
    <Paper className={classes.paper} key={'recent_quiz' + ele.id}>
      <Grid>
        {ele.title}
      </Grid>
      <Grid>
        {ele.content}
      </Grid>
      {
        ableComment &&
          <Grid
            container item xs={12}
            justify='flex-start'
            style={{padding: '6px 8px', marginTop: '20px'}}
          >
            <ThumbUpIcon
              onClick={handleLike}
              style={{color: like? 'red' : 'gray'}}
            />
            {likeNum}
            <VisibilityIcon
              style={{color: 'gray', marginLeft: '20px'}}
            />
            {ele.views}
            <Button
              style={{
                padding: '0px', marginLeft: '20px',
                color: comment? 'blue' : 'gray',
              }}
              onClick={handleClick}
              disabled={disabled}
              startIcon={<MessageIcon style={{color: comment? 'blue':'gray'}}/>}
            >
              comment
            </Button>
            <Button
              style={{
                padding: '0px', marginLeft: '20px',
                color: follow? 'blue' : 'gray',
              }}
              onClick={handleFollow}
              disabled={disabled}
              startIcon={
                follow? <CheckIcon style={{color: 'blue'}}/> : <AddBoxIcon style={{color: 'gray'}}/>
              }
            >
              {follow ? 'Following....' : 'Follow'}
            </Button>
          </Grid>
      }
    </Paper>
  );
};

export default Content;
