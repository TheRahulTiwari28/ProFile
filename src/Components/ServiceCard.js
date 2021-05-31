import React from 'react'
import styled from 'styled-components';

function ServiceCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled >
            <div className="container">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .4s ease-in-out;

    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
    }

    .container{
        padding: 18px;

        img{
            width: 100px;
            height: 100px;
        }
        h4{
            color: var(--white-color);
            font-size: 18px;
            font-weight: normal;
            padding: 16px 0;
            position: relative;

            &::after{
                content: "";
                width: 70px;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }

        p{
            padding: .8rem 0;
            font-weight: normal;
            font-size: 14px;
        }
    }
`;

export default ServiceCard;
