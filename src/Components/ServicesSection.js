import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import slide from '../img/Slide.png';
import nova from '../img/logo_nova.png';
import staffnova from '../img/logo_nova.png';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Association'} span={'association'} />
                <div className="services">
                    <ServiceCard 
                        image={slide} 
                        title={'Membre Slide Session'} 
                        paragraph={'Slide Session est l’association de glisse des écoles du Pôle Léonard de Vinci. Les slideurs, slideuses organisent tous les ans le très attendu voyage au ski mais également des soirées (patinoires, boîtes ou nuit des assos). Slide session vous fera également profiter d’afterski dans les bars d’altitudes les plus stylés.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={nova} 
                            title={'Chargé de prod BDE NOVA'} 
                            paragraph={'Graphiste, dans le pôle communication : - Création de visuel sur Photoshop/Illustrator pour la promotions des events crée par le BDE - Partage des publications sur les réseaux Facebook/Instagram'}
                        />
                    </div>
                    <ServiceCard 
                        image={staffnova} 
                        title={'Membre Staff BDE NOVA'} 
                        paragraph={'Membre du staff lors des events comme par exemple la soirée d intégration ou j occuper le poste de Barman, également le gala ou j occuper la place de responsable des table VIP .'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
