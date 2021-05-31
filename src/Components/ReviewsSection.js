import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Tittle';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSection() {
    return (
        <ReviewsStyled>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa ad itaque quas?'}
                    />
                    <ReviewItem 
                        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa ad itaque quas?'}
                    />
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        padding-left: 50px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width: 1200px){
            padding-left: 0px;
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSection
