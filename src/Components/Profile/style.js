
/*
    ===============================
       Profile + Skills Styles
    ===============================
*/
import styled from 'styled-components';

export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`
export const ProfileSection = styled.div`
    width: 50%;
    float: left;
`
export const ProfileList = styled.ul`
    list-style: none
`
export const ProfileItem = styled.li`
    margin-bottom: 8px
`
export const Span = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`
export const SpanWeb = styled.span`
    font-weight: normal;
    color: #eb5424
`
export const SkillsSection = styled.div`
    width: 50%;
    float: left;
`
export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`
export const Box = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`
export const SpanTitle = styled.span`
    float: left;
`
export const SpanPerc = styled.span`
    float: right;
    margin-right: 100px
`
export const Parent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`
export const SpanParent = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${ props => props.item === 1 ? '100%' : ''};
    width: ${ props => props.item === 2 ? '90%'  : ''};
    width: ${ props => props.item === 3 ? '80%'  : ''};
`
export const Title = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`
export const SpanTitle2 = styled.span`
    font-weight: normal;
`


/*

@media (max-width:768px) {
    .profile_skills .profile , 
    .profile_skills .skills {
        width: 100%;
        float: none
    }
    .profile_skills .profile {
        margin-bottom: 20px
    }
}
*/