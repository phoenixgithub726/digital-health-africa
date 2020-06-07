import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import firebase from '../../../utils/firebase';
import HealthToolField from './HealthToolField'


const HealthTool = ({ patientId, cDatas }) => {
  const db = firebase.firestore().collection('health_tools');
  const [healthToolsId, setHealthToolsId] = useState('');
  const [otherUserInfo, setOtherUserInfo] = useState(cDatas[0]);

  const defaultValue = {
    systolic: 0, destolic: 0, pulse: 0,
    temperature: 0, respiration: 0, weight: 0,
    age: 0, height: 0,
    bmi: 0, ldl: 0, hdl: 0,
    visceralFat: 0, bloodGlucoseLevel: 0,
    target: 0,
  }

  const [healthInfo, setHealthInfo] = useState({ ...defaultValue });

  useEffect(() => {
    if (cDatas) {
      db
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.data().id && doc.data().patient_id === patientId) {
              setHealthToolsId(doc.data().id);
              db.doc(doc.data().id)
                .get().then((docRef) => {
                  setHealthInfo(docRef.data().health_info);
                });
              return false;
            }
          });
        });
    }
  }, [patientId, cDatas]);

  return (
    <>
      <HealthToolField healthInfo={healthInfo} />
    </>
  );
};

export default HealthTool;
