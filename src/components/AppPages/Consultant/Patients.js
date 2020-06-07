import React, {useEffect, useState} from 'react';
import Profile from './Profile';
import Chat from './Chat';
import PropTypes from 'prop-types';
import Contact from './Contact'

const Patients = ({consultantId, pDatas}) => {
  const [openChatField, setOpenChatField] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [otherUserId, setOtherUserId] = useState('');
  const [otherUserName, setOtherUserName] = useState('');

  useEffect(() => {
    setProfileData(pDatas[0]);
    setOtherUserId(pDatas[0].id);
    setOtherUserName(pDatas[0].name);
  }, [consultantId]);

  const individual = (patientInfo) => {
    setProfileData(patientInfo);
    setOtherUserId(patientInfo.id);
    setOtherUserName(patientInfo.name);
  };

  const openChat = () => {
    setOpenChatField(!openChatField);
  };
  return (
    <>
      <Contact pDatas={pDatas} otherUserId={otherUserId} individual={individual} />

      <Profile
        profileData={profileData}
        openChat={openChat}
      />

      {consultantId && otherUserId &&
        <Chat
            userId={consultantId}
            otherUserId={otherUserId}
            otherUserName={otherUserName}
            openChatField={openChatField}
        />
      }
    </>
  );
};

Patients.propTypes = {
  consultantId: PropTypes.string.isRequired,
};

export default Patients;
