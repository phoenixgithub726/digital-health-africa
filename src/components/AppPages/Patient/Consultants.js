import React, { useEffect, useState } from 'react';
import Profile from './Profile'
import Chat from './Chat'
import Contact from './Contact'

const Consultants = ({ patientId, cDatas }) => {
    const [openChatField, setOpenChatField] = useState(false)
    const [profile_data, setProfileData] = useState({})
    const [otherUserId, setOtherUserId] = useState('')
    const [otherUserName, setOtherUserName] = useState('')

    useEffect(() => {
        setProfileData(cDatas[0])
        setOtherUserId(cDatas[0].id)
        setOtherUserName(cDatas[0].name)
    }, [patientId, cDatas])

    const individual = (consultantInfo) => {
        setProfileData(consultantInfo)
        setOtherUserId(consultantInfo.id)
        setOtherUserName(consultantInfo.name)
    }

    const openChat = () => {
        setOpenChatField(!openChatField)
    }

    return (
        <>
            <Contact
                cDatas={cDatas}
                otherUserId={otherUserId}
                individual={individual}
            />

            <Profile
                profile_data={profile_data}
                openChat={openChat}
            />

            <>
                {patientId && otherUserId &&
                    <Chat
                        userId={patientId}
                        otherUserId={otherUserId}
                        otherUserName={otherUserName}
                        openChatField={openChatField}
                    />
                }
            </>

        </>
    )
}


export default Consultants;