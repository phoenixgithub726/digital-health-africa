import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'
import countryList from 'react-select-country-list'
import ReCAPTCHA from "react-google-recaptcha";
import firebase from '../../../utils/firebase'


import { Card, CardBody, CardFooter } from '../../Card';
import { InputField, SelectField } from '../forms/form-controls';

import Signupstyles from './Signup.module.scss';

const PatientSignup = (props) => {

    const [user, setUser] = useState({
        firstName: '', lastName: '', email: '', emailConfirm: '',
        password: '', phone: '', country: '', state: '',
        city: '',  gender: 'Male', verified: 0
    });

    const countryoptions = countryList().getData()
        
    const db = firebase.firestore().collection('patient')

    const { firstName, lastName, email, emailConfirm, password, phone, country, state, city, gender, verified} = user;

    const onSubmit = e => {
        e.preventDefault();
        if (firstName === '' || lastName === '' || email === '' || password === '' || country === '' || gender === '' || state === '' || city === '') {
            alert('Please enter all fields', 'danger');
        } else if (email !== emailConfirm) {
            alert('Email do not match', 'danger');
        } else if (verified !== 1) {
            alert('Robot do not match', 'danger');
        } else {
            register(firstName, lastName, email, password, phone, country, state, city, gender );
        }
    };

    const register = (firstName, lastName, email, password, phone, country, state, city, gender) => {
        
        db
        .add({
            name: firstName + ' ' + lastName, email: email, password: password,
            phone: phone, country: country, sex: gender, state: state,
            city: city, timeStamp: new Date().getTime()
        })
        .then((docRef) => {
            setUser({
                firstName: '', lastName: '', email: '', emailConfirm: '',
                password: '', phone: '', country: '', state: '',
                city: '', gender: '', verified: 0
            });

            db.doc(docRef.id).update({id: docRef.id})
                .then(() => {
                    console.log('success patient register')
                })
                .catch(error => {
                    console.log(error)
                })

            firebase.firestore().collection('users').add({
                group_id: docRef.id, email: email, password: password, phone: phone, role: 'patient'
            }).then(userRef => {
                firebase.firestore().collection('users').doc(userRef.id).update({id: userRef.id})
                    .then(() => {
                        console.log('success user register')
                        props.history.push('/app/patients/' + docRef.id)
                    })
                    .catch((error) => console.log(error))
            })         
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
   

    const onChangeCountry = country => setUser({ ...user, country: country.target.value});
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
    const onChangePhone = e => {
        let val = e.target.value;
        if (!Number(val)) {
            return;
        }
        setUser({ ...user, phone: val});
    };

    var verifyCallback = function (response) {
        setUser({ ...user, verified: 1});
    };

    
    return(
        <div className={Signupstyles["container"]}>
            <Card className={Signupstyles["card"]}>
                <div className={Signupstyles["card-header"]}>
                    <span>Register with us</span>
                </div>
                <form onSubmit={(e) => onSubmit(e)}>
                    <CardBody className={Signupstyles["card-body"]}>
                        <InputField className={Signupstyles["form-input"]} onChange={onChange} type="text" name="firstName" placeholder="First Name"/>
                        <InputField className={Signupstyles["form-input"]} onChange={onChange} type="text" name="lastName" placeholder="Last Name"/>
                        <InputField className={Signupstyles["form-input"]} onChange={onChange} type="text" name="email" placeholder="Email Address"/>
                        <InputField className={Signupstyles["form-input"]} onChange={onChange} type="text" name="emailConfirm" placeholder="Confirm Email"/>
                        <InputField className={Signupstyles["form-input"]} onChange={onChange} type="password" name="password" placeholder="Password"/>
                        <InputField className={Signupstyles["form-input"]} onChange={onChangePhone} type="text" name="phone" placeholder="Phone Number"/>
                        <SelectField name="country" value={country} onChange={onChangeCountry} required 
                            options={countryoptions} name="country" className={Signupstyles["country-select"]}
                        />
                        
                        <InputField className={Signupstyles["form-input"]} onChange={onChange} type="text" name="state" placeholder="State"/>
                        <InputField className={Signupstyles["form-input"]} onChange={onChange} type="text" name="city" placeholder="City"/>
                        <SelectField className={Signupstyles["form-select"]} name="gender" 
                            options={[{value:'male', label:'Male'},{value:'female', label:'Female'}]} value='Male' onChange={onChange} />
                        <ReCAPTCHA
                            className={Signupstyles["recaptcha"]}
                            sitekey="6LeZtMYUAAAAAJs_cWmxDOmP70c16eZKB3CNfFM6"
                            onChange ={verifyCallback}
                        />
                    </CardBody>
                        
                    <CardFooter className={Signupstyles["card-footer"]}>
                        <button type="submit" className={Signupstyles['button']}>REGISTER</button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
    
}



export default PatientSignup;