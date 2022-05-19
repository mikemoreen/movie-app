import React from 'react';

import { useSelector } from 'react-redux';

import Board from "../../Components/Board/Board";

import "./AllBoardsPage.css"

const AllBoardsPage  = () => {
    const cards = useSelector((state)=>state.cards)

    if(!cards){
        return (
            <div className='loading'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
        )
    }
    return (
    <Board  cards={cards}/>
    )
};

export default AllBoardsPage;