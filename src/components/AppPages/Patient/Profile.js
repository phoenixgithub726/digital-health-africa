import React, {} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import patientstyles from './Patient.module.scss';

const Profile = ({profile_data, openChat}) => {
    
    return(
        <Grid container className={patientstyles['profile']}>
            <Grid item container xs={4}> image </Grid>
            <Grid container item xs={8}>
                <Grid container style={{fontWeight: 'bold'}}>
                    DR.&nbsp;{profile_data.name}
                </Grid> 
                <Grid container>
                    <b>Experience</b>:&nbsp;{profile_data.experience}
                    </Grid> 
                <Grid container>
                    <b>Country</b>:&nbsp;{profile_data.country}
                </Grid>  
                <Grid container>
                    <b>Place Of Work</b>:&nbsp;{profile_data.placeOfWork}
                </Grid>    
            </Grid>
            <Grid container item>
                <Grid container item xs={6} justify='center' alignItems='center'>
                    <Button variant="contained" color="secondary" onClick={openChat}>Consult Now</Button>
                </Grid>
                <Grid container item xs={6} justify='center' alignItems='center'>
                    <Button variant="contained" color="primary">Book Appointment</Button>
                </Grid>
            </Grid>                           
        </Grid>
    )
}

export default Profile