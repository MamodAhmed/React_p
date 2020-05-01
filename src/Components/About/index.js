import React from 'react';
import {CreativeSection, CreativeInfo, InfoTitle, Span, InfoDir, InfoDesc, Anchor} from './style.js';

const About = () => {
    return ( 
         <CreativeSection>
            <div className="container">
                <CreativeInfo>
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil ?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam?
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </CreativeSection>
     );
}
 
export default About;