import React from 'react';
import './card.css';
import MyBtn from '../UI/buttons/MyBtn';

const Card = (props) => {

    

    return (
        <div>
            <div className='card'>
                <div>
                    <h3>{props.post.id}. {props.post.title}</h3>
                    <p>{props.post.body}</p>
                </div>
                <div>
                    <MyBtn onClick={() => props.remove(props.post)}>delete?</MyBtn>
                </div>
                
            </div>
        </div>
    );
};

export default Card;