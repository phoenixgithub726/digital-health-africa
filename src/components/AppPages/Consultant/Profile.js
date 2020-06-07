import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import consultantstyles from './Consultant.module.scss';
import PropTypes from 'prop-types';

const Profile = ({profileData, openChat}) => {
  return (
    <Grid container className={consultantstyles['profile']}>
      <Grid item container xs={4}> image </Grid>
      <Grid container item xs={8}>
        <Grid container style={{fontWeight: 'bold'}}>
                    DR.&nbsp;{profileData.name}
        </Grid>
        <Grid container>
          <b>Experience</b>:&nbsp;{profileData.experience}
        </Grid>
        <Grid container>
          <b>Country</b>:&nbsp;{profileData.country}
        </Grid>
        <Grid container>
          <b>Place Of Work</b>:&nbsp;{profileData.placeOfWork}
        </Grid>
      </Grid>
      <Grid container item>
        <Grid container item xs={6} justify='center' alignItems='center'>
          <Button variant="contained" color="secondary" onClick={openChat}>
            Consult Now
          </Button>
        </Grid>
        <Grid container item xs={6} justify='center' alignItems='center'>
          <Button variant="contained" color="primary">Book Appointment</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

Profile.propTypes={
  openChat: PropTypes.func.isRequired,
  profileData: PropTypes.shape({
    name: PropTypes.string,
    experience: PropTypes.string,
    country: PropTypes.string,
    placeOfWork: PropTypes.string,
  }),
};

export default Profile;
