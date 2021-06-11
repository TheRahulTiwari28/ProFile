import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Tittle';
import ServiceCard from '../Components/ServiceCard';
import web from '../img/web1.svg';
import design from '../img/design.svg';
// import ui from '../img/ui.svg';


function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'Services'} />
                <div className="services">
                    <ServiceCard 
                        image={web}
                        title={'Web Developer'}
                        paragraph={''}
                    />
                    <ServiceCard 
                        image={design}
                        title={'Web Design'}
                        paragraph={''}
                    />
                    {/* <ServiceCard 
                        image={ui}
                        title={'UI/UX Design'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    /> */}
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        padding-left: 50px;
        @media screen and (max-width: 1200px){
        padding: 0px;
        }
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

export default ServicesSection
