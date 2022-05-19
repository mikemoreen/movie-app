import React, {Component, useEffect, useState} from "react";

import { useParams} from "react-router-dom";

import { useSelector } from 'react-redux';

import "./CommentsPage.css";

import CardInfo from "../../Components/CardInfo/CardInfo";
import Comments from "../../Components/Comments/Comments";


function CommentsPage() {
    const user = JSON.parse(localStorage.getItem('profile'));

    const {cardId} = useParams();

    const cards = useSelector((state)=>state.cards)
    if(!cards){
        return (
             <div className="not-auth">
               <h1>You are not logged in</h1>
             </div>
           )
     }
    const card = cards.find((card)=>card._id === cardId)


    console.log(card)
    if(!user){
       return (
            <div className="not-auth">
              <h1>You are not logged in</h1>
            </div>
          )
    }
  return (
      <>
        {!card ? null :
        <main className="comm container">
            <CardInfo card={card}/>
            <Comments comments={card.comments} id={card._id}></Comments>
        </main>
        }
        </>
   
   )

  }


export default CommentsPage;