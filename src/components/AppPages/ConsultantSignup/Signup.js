import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'
import countryList from 'react-select-country-list'
import ReCAPTCHA from "react-google-recaptcha";
import firebase from '../../../utils/firebase'


import { Card, CardHeader, CardBody, CardFooter } from '../../Card';
import { InputLabelField, SelectLabelField } from '../forms/form-controls';

import Signupstyles from './Signup.module.scss';

const ConsultantSignup = (props) => {

    const [user, setUser] = useState({
        name: '', userName: '', email: '', contact: '', profileImage: '', consultingCategory: '', 
        status: '', userRole: '', consultantFee: '', expiryDate: '', 
        city: '', state: '', country: '', password: '', experience: '', 
        officeAddress:'', metaTitle: '', metaDescription: '', verified: 0
    });

    const countryoptions = countryList().getData()
    const db = firebase.firestore().collection('consultant')

    const { 
        name, userName, email, contact, 
        profileImage, consultingCategory, status, 
        userRole, consultantFee, expiryDate, 
        city, state, country, 
        password, experience, 
        officeAddress, metaTitle, metaDescription} = user;


    const onSubmit = e => {
        e.preventDefault();
        if (
            name === '' || userName === '' || email === '' || contact === '' ||
            country === '' || state === '' || city === '' ||
            password === ''
            )         
            alert('Please enter all fields', 'danger');
        else {
            register(name, userName, email,  contact, country, state, city, password);
        }
    };

    const register = (name, userName, email,  contact, country, state, city, password ) => {
        
        db
        .add({
            name: name, userName: userName, email: email, contact: contact,
            password: password, country: country,
            state: state, city: city, timeStamp: new Date().getTime()
        })
        .then((docRef) => {
            db.doc(docRef.id).update({id: docRef.id})
                .then(() => {
                    console.log('success consultant register')
                })
                .catch(error => {
                    console.log(error)
                })

            firebase.firestore().collection('users').add({
                group_id: docRef.id, email: email, password: password, phone: contact, role: 'consultant'
            }).then(userRef => {
                firebase.firestore().collection('users').doc(userRef.id).update({id: userRef.id})
                    .then(() => {
                        console.log('success user register')
                        props.history.push('/app/consultants/' + docRef.id)
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
    const onChangeContact = e => {
        let val = e.target.value;
        if (!Number(val)) {
            return;
        }
        setUser({ ...user, contact: val});
    };

    var verifyCallback = function (response) {
        setUser({ ...user, verified: 1});
    };
    
    return(
        <div className={Signupstyles["container"]}>
            <Card className={Signupstyles["card"]}>
                <form onSubmit={(e) => onSubmit(e)}>
                    <CardBody className={Signupstyles["card-body"]}>
                        <InputLabelField className={Signupstyles["form-input"]} width="50%" onChange={onChange} type="text" label="Name" name="name" placeholder="Name"/>
                        <InputLabelField className={Signupstyles["form-input"]} width="50%" onChange={onChange} type="text" label="UserName" name="userName" placeholder="UserName"/>
                        <InputLabelField className={Signupstyles["form-input"]} width="50%" onChange={onChange} type="text" label="Email" name="email" placeholder="Email"/>
                        <InputLabelField className={Signupstyles["form-input"]} width="50%" onChange={onChangeContact} type="text" label="contact" name="contact" placeholder="Contact"/>   

                        <InputLabelField className={Signupstyles["form-input"]} width="33%" onChange={onChange} type="text" label="Profile Image" name="profileImage" placeholder=""/>
                        <SelectLabelField 
                            className={Signupstyles["form-select"]} width="33%" onChange={onChange} 
                            options={[{value:'male', label:'Male'},{value:'female', label:'Female'}]} 
                            label="Select Consulting Category" name="consultingCategory" value='Male' 
                        />
                        <InputLabelField className={Signupstyles["form-input"]} width="33%" onChange={onChange} type="text" label="Status" name="status" placeholder="Status"/>
                        
                        <SelectLabelField  
                            className={Signupstyles["form-select"]} width="33%" onChange={onChange} 
                            options={[{value:'male', label:'Male'},{value:'female', label:'Female'}]} 
                            label="Premium User" name="userRole" value='Male' clear="both"
                        />
                        <InputLabelField className={Signupstyles["form-input"]} width="33%" onChange={onChange} type="number" label="Consultant Fee $" name="consultantFee" placeholder="Consultant Fee"/>
                        <InputLabelField className={Signupstyles["form-input"]} width="33%" onChange={onChange} type="text" label="Chat Expiry Date" name="expiryDate" placeholder="Chat Expiry Date"/>
                                                
                        <InputLabelField className={Signupstyles["form-input"]} width="33%" onChange={onChange} type="text" label="city" name="city" placeholder="City" clear="both"/>
                        <InputLabelField className={Signupstyles["form-input"]} width="33%" onChange={onChange} type="text" label="state" name="state" placeholder="State"/>                        
                        <SelectLabelField  
                            name="country" value={country} width="33%" onChange={onChange} 
                            onChange={onChangeCountry} required options={countryoptions} 
                            name="country" className={Signupstyles["form-select"]} label="country"
                        />

                        <InputLabelField className={Signupstyles["form-input"]} width="33%" onChange={onChange} type="password" label="Password" name="password" placeholder="Password"/>
                        <InputLabelField className={Signupstyles["form-input"]} width="60%" onChange={onChange} type="text" label="Years Of Experience" name="experience" placeholder="Years Of Experience"/>
                        
                        <InputLabelField className={Signupstyles["form-input"]} width="50%" onChange={onChange} type="text" label="Office Address" name="officeAddress" placeholder=""/>
                        <InputLabelField className={Signupstyles["form-input"]} width="100%" onChange={onChange} type="text" label="Meta Title" name="metaTitle" placeholder="Meta Title"/>
                        <InputLabelField className={Signupstyles["form-input"]} width="100%" onChange={onChange} type="text" label="Meta Description" name="metaDescription" placeholder=""/>
                        
                    </CardBody>
                        
                    <CardFooter className={Signupstyles["card-footer"]}>
                        <button type="submit" className={Signupstyles['button']}>REGISTER</button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
    
}

export default ConsultantSignup;