import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import firebase from '../../../utils/firebase';
import HealthToolField from './HealthToolField'


const HealthTool = ({ consultantId, pDatas }) => {
  const db = firebase.firestore().collection('health_tools');
  const [healthToolsId, setHealthToolsId] = useState('');
  const [otherUserInfo, setOtherUserInfo] = useState(pDatas[0]);
  const [dataLoaded, setDataLoaded] = useState(false)

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
    if (pDatas) {
      db
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.data().id && doc.data().patient_id === otherUserInfo.id) {
              setHealthToolsId(doc.data().id);
              db.doc(doc.data().id)
                .get().then((docRef) => {
                  setHealthInfo(docRef.data().health_info);
                  setDataLoaded(true);
                  return false;
                });
            }
            else {
              setHealthInfo({ ...defaultValue });
            }
          });
        });
    }
  }, [consultantId, pDatas, otherUserInfo]);

  const individual = (patientInfo) => {
    if (patientInfo === otherUserInfo) return;
    setHealthToolsId('');
    setOtherUserInfo(patientInfo);
    setDataLoaded(false);
  };


  const handleSave = (personalInfo) => {
    if (healthToolsId) {
      db.doc(healthToolsId).update({
        health_info: { ...personalInfo }
      })
        .then(() => console.log('success'))
        .catch((error) => console.log(error));
    } else {
      db.add({
        health_info: { ...personalInfo },
        patient_id: otherUserInfo.id,
        consultant_id: consultantId,
      }).then((docRef) => {
        db.doc(docRef.id).update({ id: docRef.id })
          .then(() => {
            console.log('success');
          })
          .catch((error) => {
            console.log(error);
          });
      }).catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <>
      {pDatas && otherUserInfo && <Contact pDatas={pDatas} otherUserId={otherUserInfo.id} individual={individual} />}
      <HealthToolField healthInfo={healthInfo} healthToolsId={healthToolsId} handleSave={handleSave} loaded={dataLoaded} />
    </>
  );
};

export default HealthTool;
