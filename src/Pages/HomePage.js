import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
// import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Axel Zidane <span>Product Owner</span></h1>
                <p>
                    Actuellement en alternance jusqu'en aout 2022, en tant qu'UX/UI Designer et Développeur Front-End chez ASSERCAR
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/axel-zidane-5a1a3b1a1/" className="icon i-Linkedin">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/Fucao77" className="icon i-github">
                        <GithubIcon />
                    </a>
                    {/* <a href="https://codepen.io/pen/" className="icon i-youtube">
                        <YoutubeIcon />
                    </a> */}
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
