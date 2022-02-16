import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSetion() {
    return (
        <ReviewsStyled>
            <Title title={'Centre d intérêt'} span={'Centre d intérêt'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        text={'Sport, Sport Extrême, Voyage, Technologie '} 
                    />
                    <ReviewItem 
                        text={'Le cinéma, le graphisme, la vidéo et la photo, Jeux Vidéo'} 
                    />
                    
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSetion;
