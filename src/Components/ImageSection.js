import React from 'react'
import styled from 'styled-components';
import resume from '../img/axel_slide.png';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>Je suis <span>Axel Zidane</span></h4>
                <p className="paragraph">
                Étudiant en 4ème année en Master Management de la Transformation Digital - Big DATA & Interlligence Artificielle. Actuellement en Alternance chez FREE ent tant que chef de projet en Pilote Outils et Process.
                Pour une durée de 2 ans (août 2024).

                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Nom Prénom</p>
                        <p>Age</p>
                        <p>Nationalité </p>
                        <p>Langue </p>
                        <p>Position</p>
                        <p>Status</p>
                    </div>
                    <div className="info">
                        <p>: Zidane Axel</p>
                        <p>: 21</p>
                        <p>: Français </p>
                        <p>: Français, Anglais, Espagnol </p>
                        <p>: La Garennes-Colombes - 92250</p>
                        <p>: Etudiant A4 Management Transformation Digital - IA </p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1iBI8xsf58TJarDcIpTFvHLYvon7eHdvj/view?usp=sharing"> <PrimaryButton title={'Voir CV'} /></a>  
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
