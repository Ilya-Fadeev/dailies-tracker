import React from 'react';
import Card from '../Card/Card';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import './cardlist.css';

const CardList = (props) => {

    if (!props.posts.length) {
        return ( <div>Посты не найдены!</div> ) ;
    }
    return (
        <div style={{width: 100 + '%'}}>
           <h3 style={{textAlign: 'center'}}>{props.title}/({props.posts.length})</h3>

           <TransitionGroup>
                {props.posts.map((post, index) => 
                
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                        >
                        <Card remove={props.remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup> 
        </div>
    );
};

export default CardList;