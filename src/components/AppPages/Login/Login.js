import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import firebase from '../../../utils/firebase';
import { Card, CardHeader, CardBody, CardFooter } from '../../Card';
import { InputField } from '../forms/form-controls';
import loginstyles from './Login.module.scss';
import commonstyles from '../../../styles/custom.module.scss';
import { connect } from "react-redux";
import { setConsultantData } from "../../../redux/actions/ConsultantDashboardAction";
import { setPatientData } from "../../../redux/actions/PatientDashboardAction";

const Login = (props) => {
  const [user, setUser] = useState({
    personal: '', password: '',
  });

  const { personal, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    let role = '';
    let group_id = '';
    e.preventDefault();

    if (personal === '' || password === '') {
      alert('Please enter all fields');
      return;
    } else {
      firebase.firestore()
        .collection('users')
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.data().email === personal || doc.data().phone === personal) {
              group_id = doc.data().group_id;
              role = doc.data().role;
              if (role && role === 'patient') {
                let buf = [];
                let cBuf = [];
                firebase
                  .firestore()
                  .collection('patient')
                  .onSnapshot(snapshot => {
                    buf = [];
                    cBuf = [];
                    snapshot.forEach(doc => {
                      if (doc.data().id === group_id) {
                        if (doc.data().consultants) {
                          buf.push(...doc.data().consultants)
                          return false
                        }
                      }
                    })
                    buf.forEach(consultantId => {
                      firebase.firestore()
                        .collection('consultant')
                        .doc(consultantId)
                        .get()
                        .then((doc) => {
                          addFunc(doc.data(), buf.length)
                        })
                        .catch(error => {
                          console.log(error)
                        })
                    })
                    props.history.push('/app/patients/' + group_id);
                  })

                const addFunc = (data, len) => {
                  cBuf.push(data)
                  if (cBuf.length === len) {
                    props.setPatientData({ patientData: cBuf })
                  }
                }

              }
              else if (role && role === 'consultant') {
                let buf = [];
                let pBuf = [];
                firebase
                  .firestore()
                  .collection('consultant')
                  .onSnapshot((snapshot) => {
                    buf = [];
                    pBuf = [];
                    snapshot.forEach((doc) => {
                      if (doc.data().id === group_id) {
                        if (doc.data().patients) {
                          buf.push(...doc.data().patients);
                        }
                        return false;
                      }
                    });
                    buf.forEach((patientId) => {
                      firebase.firestore()
                        .collection('patient')
                        .doc(patientId)
                        .get()
                        .then((doc) => {
                          addFunc(doc.data(), buf.length);
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    })
                    props.history.push('/app/consultants/' + group_id)
                  })

                const addFunc = (data, len) => {
                  pBuf.push(data);
                  if (pBuf.length === len) {
                    //redux relation code
                    props.setConsultantData({ consultantData: pBuf })
                  }
                };
              }
              return false;
            }
          });
        });
    }
  };


  return (
    <div className={loginstyles['container']}>
      <Card className={loginstyles['card']}>
        <CardHeader className={loginstyles['card-header']}>
          <h2>Digital Health Access</h2>
          <FontAwesomeIcon
            className={loginstyles['login-icon']} icon={faUserMd}
          />
        </CardHeader>
        <form onSubmit={(e) => onSubmit(e)}>
          <CardBody className={loginstyles['card-body']}>
            <InputField
              className={commonstyles['form-input']}
              onChange={onChange} name="personal" type="text"
              placeholder="Please Insert Email Or Phone Number"
            />
            <InputField
              className={commonstyles['form-input']}
              onChange={onChange} name="password" type="password"
              placeholder="Please Insert Password"
            />
          </CardBody>
          <CardFooter className={loginstyles['card-footer']}>
            <button
              type="submit"
              className={commonstyles['button']}
            >
              SIGN IN
            </button>
          </CardFooter>
          <CardFooter className={loginstyles['card-footer']}>
            <p>-----------Sign Up-----------</p>
            <div>
              <Link to="/patient-signup" >
                <button className={commonstyles['button']}>Patient</button>
              </Link>
              <Link to="/consultant-signup">
                <button className={commonstyles['button']}>consultant</button>
              </Link>
            </div>
          </CardFooter>

        </form>
      </Card>
    </div>
  );
};

export default connect(null, { setConsultantData, setPatientData })(Login);
