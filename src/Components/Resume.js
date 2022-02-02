import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Expérience'} span={'expérience'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Expérience Professionnelle'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'Oct 2020 - Janv 2021'} 
                        title={'Développeur Front-End'}
                        subTitle={'Bond Inbox'}
                        text={'BAP - Bourse au projet IIM , Réalisation Landing Page Bond Inbox, en collaboration avec des chefs de projets issus de différents axes: création design , Communication digitale et E-Business et enfin développement web. '} 
                    />
                    <ResumeItem 
                        year={'Fev 2021 - Mars 2021'} 
                        title={'Développeur Front-End'}
                        subTitle={'Earlystay'}
                        text={'BAP - Réalisation d un site web de A à Z, de la création de Wireframes et Maquette, au développement du site web avec les technos suivante, Next.js et React.js pour le front, accompagné de Node.Js pour la partie Back-End. Site développé en Collaboration de 3 autres étudiant de lIIM. '} 
                    />
                    <ResumeItem 
                        year={'Mai 2021 - Juil 2021'} 
                        title={'UX/UI Designer'}
                        subTitle={'Stage, La Factory - Talents'}
                        text={'Travailler sur le parcours client sur le site web et l optimiser, réaliser des tests utilisateurs. Apporter des modifications sur le site. Optimiser le référencement du site Mettre en place un plan d action pour augmenter le trafic, Création de Landing pages selon les besoins spécifiques.'} 
                    />
                    <ResumeItem 
                        year={'Mars 2021 - Nov 2021'} 
                        title={'Graphiste'}
                        subTitle={'BDE NOVA'}
                        text={'Graphiste, dans le pôle communication : Création de visuel sur Photoshop/Illustrator, pour la promotions des différents évènements (soirée d inté, Gala, Pôle à un Incroyables Talents, Nova on Air), Partage des publications sur les réseaux Facebook/Instagram  '} 
                    />
                     <ResumeItem 
                        year={'Sept 2021 - Aujourd hui'} 
                        title={'Développeur Web'}
                        subTitle={'Alternance chez ASSERCAR'}
                        text={'Collecter les besoins utilisateur ou client, rédiger l ensemble de la documentation associée au projet (Cahier des charges, Descriptions techniques et fonctionnelles, ….). Former les utilisateur au fonctionnement du site web, Coordonner les actions des prestataires intervenant sur les projets.'}
                       
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Formation'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019 - 2022'} 
                        title={'Bachelor Chef de projet digital, Développement Web'}
                        subTitle={'IIM, Institut de l Internet et du multimédia, Pôle Léonard De Vinci'}
                        text={'Experts techniques ayant des qualités d’analyse, de travail d’équipe et capables d’évoluer au rythme des technologies. Découverte des langages du développement web, Front-End, Back-End et également Mobile. Bourse au projet, Formation Softs Skills et semaines transerverses '} 
                    />

                </div>
                
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
