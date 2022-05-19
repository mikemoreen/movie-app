import React  from "react";
import Card from "../Card/Card.js";
import "./Cards.css"


function Cards({cards}) {
  
   return (
        <div className="cards-container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                { cards.map((card)=>{
                    return (
                

                    < Card key={card._id} id={card._id} title={card.title} author={card.author} 
                                          description={card.description} imgUrl={card.imgUrl}  likes={card.likes} 
                                          name={card.name} creator={card.creator} favorites={card.favorites}
                                          comments={card.comments}
                        />
                )
                })}
            </div>
        </div>
   )

  }
export default Cards
