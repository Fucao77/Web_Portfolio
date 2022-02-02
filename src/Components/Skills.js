import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'Skills'} span={'skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5/CSS/JS'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'Vue.JS'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'React.JS'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'NEXT.JS'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'UX/UI Design'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'Node.JS'}
                            width={'70%'}
                            text={'70%'}
                        />
                         <ProgressBar 
                            title={'PHP'}
                            width={'60%'}
                            text={'60%'}
                        /> 
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
