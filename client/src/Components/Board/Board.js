import React from 'react';

import './Board.css' 

import Cards from '../Cards/Cards.js';


function Board({cards}) {
 
   return (
       <div className="board-container">
                <Cards cards={cards}/>
       </div>
   )

  }
export default Board;