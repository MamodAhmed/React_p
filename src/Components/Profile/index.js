import React , { useState, useEffect } from 'react';
import {ProfileSkills, ProfileSection, ProfileList, ProfileItem, Span, SpanWeb, SkillsSection, SkillsDesc,
    Box, SpanTitle, SpanPerc, Parent, SpanParent, Title, SpanTitle2} from './style.js';
import axios from 'axios';

const Profile = () => {
    const [skills, setSkills] = useState([]);
    useEffect( () => {
        axios.get('js/data.json').then( res => { setSkills(res.data.profile) })
    }, [] )
 
    const profileSkills = skills.map( (skillItem) => {
        return (
            <Box key={skillItem.id}>
                <SpanTitle>{skillItem.title}</SpanTitle>
                <SpanPerc>{skillItem.percentage}</SpanPerc>
                <Parent>
                    <SpanParent item={skillItem.id}></SpanParent>
                </Parent>
            </Box>
        )
    })

    const [info, setInfo] = useState([]);
    useEffect( () => {
        axios.get('js/data.json').then( res => { setInfo(res.data.ProfileInfo) })
    }, [] )
    
    /* my profile */
        const myProfile = info.map( (e) => {
            return (
                <ProfileItem key={e.id}>
                    <Span>{Object.keys(info[e.id - 1])[1]}:</Span>
                 {(e.id) === 6 ? <SpanWeb>{Object.values(info[e.id - 1])[1]}</SpanWeb> : Object.values(info[e.id - 1])[1] } 
                </ProfileItem> 
                
            )
     })
 

    return ( 
          <ProfileSkills>
            <div className="container">
                <ProfileSection>
                    <Title><SpanTitle2>My </SpanTitle2>Profile</Title>
                    <ProfileList>
                        {myProfile}
                    </ProfileList>
                </ProfileSection>
                
                <SkillsSection>
                    <Title>Some <SpanTitle2>skills</SpanTitle2></Title>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {profileSkills}
                </SkillsSection>
            </div>
        </ProfileSkills>
        
     );
}
 
export default Profile;