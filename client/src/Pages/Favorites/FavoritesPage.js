import React, {Component} from "react";

import { useSelector } from 'react-redux';

import Board from "../../Components/Board/Board";

function FavoritesPage() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const cards = useSelector((state)=>state.cards)
  const favorites = cards.filter(({favorites})=>favorites.includes(user?.result?._id))
  
    return (
      <>
      <Board cards={favorites}></Board>
     </>
    );
  }
export default FavoritesPage;