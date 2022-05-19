import React from "react";

import "./CardInfo.css"

function CardInfo({card}) {
    const {imgUrl, title, author, description, name} = card

        return (     <section className="card-info-section card-info-grid">
            
                            <div className="card-info">

                                <img src={imgUrl} className="" alt="..." ></img>
                                    <div className="card-field">
                                        <div className='item'>
                                            <p className="font">Title: </p>
                                        </div>
                                        <div className='item'>
                                            <p>{title}</p>
                                        </div>
                                    </div>

                                    <div className="card-field">
                                        <div className='item'>
                                            <p className="font">Author:</p>
                                        </div>
                                        <div className='item'>
                                            <p>{author}</p>
                                        </div>
                                    </div>
                                
                                    <div className="card-field">
                                        <div className='item'>
                                            <p className="font">Description:</p>
                                        </div>
                                        <div className='item'>
                                            <p>{description}</p>
                                        </div>
                                    </div>

                                    <div className="card-field">
                                        <div className='item'>
                                            <p className="font">Card creator:</p>
                                        </div>
                                        <div className='item'>
                                            <p>{name}</p>
                                        </div>
                                    </div>
               
                            </div>
                        </section>
                    )

}
export default CardInfo;