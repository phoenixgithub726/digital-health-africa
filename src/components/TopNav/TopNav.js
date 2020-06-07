import React from 'react';

import topnavstyle from './TopNav.module.scss';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import {removePersist} from "../../redux/actions/RemovePersist"; 

const TopNav = ({removePersist}) => {
    const removeStore = () => {
      removePersist()
    }
    return(
        <nav className={topnavstyle['topnav']}>
          <h1>Hospital<span>System</span></h1>
          <Link to='/' style={{textDecoration:'none'}}>
            <Button
              variant="contained"
              color="secondary"
              className='fa fa-tachometer-alt'
              endIcon={<ExitToAppIcon />}
              onClick={removeStore}
            >
              Log Out
            </Button>
          </Link>
          
        </nav>
    )
}


export default connect(null, {removePersist})(TopNav);