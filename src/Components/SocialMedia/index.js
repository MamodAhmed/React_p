import React from 'react';
import {SocialMediaSection, Social, Icon, Paragraph, SpanInfo1, SpanInfo2} from './style.js';
import axios from 'axios';

class SocialMedia extends React.Component {
    state = {
        social: []
    }

    componentDidMount = () => {
      axios.get('js/data.json')
      .then( res => { this.setState({ social: res.data.social }) })
    };
    

    render() {
        const {social} = this.state;
        const socialList = social.map( (socialItem) => {
            return (
                <Social item={socialItem.id} key={socialItem.id}>
                    <Icon className={socialItem.icon}></Icon>
                    <Paragraph>
                        <SpanInfo1>{socialItem.title}</SpanInfo1>
                        <SpanInfo2>{socialItem.body}</SpanInfo2>
                    </Paragraph>
                </Social>
            )
        })

        return ( 
            <SocialMediaSection>
                {socialList}
            </SocialMediaSection>
         );
    }
}
 
export default SocialMedia;