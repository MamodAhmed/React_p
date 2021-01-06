/*
    ===============================
            Creative Styles
    ===============================
*/
import styled from 'styled-components';

export const CreativeSection = styled.div`
    height: 500px;
    background: url('images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`
export const CreativeInfo = styled.div`
    padding-top: 100px;
    width: 50%;
    float: right;
`
export const InfoTitle = styled.h2`
    font-weight: bold;
    font-size: 50px
`
export const Span = styled.span`
    font-weight: normal
`
export const InfoDir = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px
`
export const InfoDesc = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
`
export const Anchor = styled.a`
    text-decoration: none
`


/*
@media (max-width:991px) {
    .creative {
        height: auto
    }
    .creative .creative-info {
        width: 100%;
        padding-top: 10px;
        float: none
    }
    
    .creative .creative-info .info-dir {
        font-size: 30px
    }
}
*/