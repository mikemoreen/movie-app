import React, {useState} from "react";

import { Image } from "react-bootstrap";
import "./Card.css"
import cn from 'classnames'
import { FiEdit2, FiArchive, FiHeart, FiStar } from "react-icons/fi"

import { updateCardAction, deleteCardAction, likeCardAction, favourCardAction } from "../../actions/cards";
import { useDispatch } from 'react-redux';

import { useLocation, Link} from "react-router-dom";

const defaultImg = "https://www.researchgate.net/profile/Pablo-Caballero-2/publication/328101815/figure/fig3/AS:678371700772865@1538747825499/Original-image-of-Lena-200X200-pixels.ppm"

function Card({id, title, author, description, imgUrl, likes, name, creator, favorites, comments}) {
  const user = JSON.parse(localStorage.getItem('profile'));
  const {pathname} = useLocation()
  const dispatch = useDispatch();
  const initialCard = {id, title, author, description, imgUrl, creator, name, favorites}
  const [formData, setDataForm] = useState(initialCard);
  const [isEdit, setEdit] = useState(false)



  const handleSubmitForm = (e) => {
      e.preventDefault()
      dispatch(updateCardAction({...formData,likes, favorites, comments}))
      setEdit(false)
  }
  const handleChangeField = (e) => {
    setDataForm({ ...formData, [e.target.name]: e.target.value } );
  }
  const url =  imgUrl ||  defaultImg

if (isEdit) {
  return <>
  <div className="col card_size">
    <form  onSubmit={handleSubmitForm} name="editForm" className="form-container">
        
          <input className="form-control" autoFocus value={formData.imgUrl} name="imgUrl" onChange={handleChangeField}  placeholder="new Url"></input>

          <input className="form-control" value={formData.title} name="title" onChange={handleChangeField} placeholder="new Title"></input>

          <input   className="form-control" value={formData.author} name="author" onChange={handleChangeField}  placeholder="new Author"></input>
          
          <input  className="form-control" value={formData.description} name="description" onChange={handleChangeField}  placeholder="new Description"></input>

          <button  className="btn btn-primary"  type="submit">End Edit</button>

          </form>

    </div>
</>
}
else{
  return (<>
    <div className="col card_size">
    <div className="col-sm-11">
      <div className="card" >
        <div className="card-header card-header-size">
          
              <span className={
                  cn({ "changeColor-edit": true },
                      { "icon-size": true },
                      { "icon-edit-position": true},
                      { "isHidden ": pathname === "/favorites"},
                      )
                }>
                

                {user?.result?._id === creator && < FiEdit2 size="20px" onClick={()=>setEdit(true)}/>}
              </span>
              <span className={
                  cn({ "changeColor-delete": true },
                      { "icon-size": true },
                      { "icon-delete-position": true},
                      { "isHidden ": pathname === "/favorites"},
                      )
                }>

                {user?.result?._id === creator && <FiArchive size="20px" onClick={() =>dispatch(deleteCardAction(id))}/>}
              </span>

              <span className={
                  cn({ "changeColor-favor": true },
                      { "icon-size": true },
                      { "icon-favor-position": user?.result?._id === creator },
                      { "icon-favor-position-not-creator": !(user?.result?._id === creator)},
                      { "isActiveStar ": favorites.includes(user?.result?._id)},
                      )
                }>
                {user?.result?._id && <FiStar size="20px" onClick={() =>dispatch(favourCardAction(id))}
              />}
                
              </span>

          </div>
          <div className="card-body">
          <Link  key={id} to={`/card/${id}`} style={{ textDecoration: 'none' }}>
            <Image src={url} className="card-img-top card-img-size card-img-cursor" alt="..."  fluid="true" />
          </Link>
            <h5 className="card-title">{title || "not stated"}</h5>
            <h6 className="card-title">{author || "not stated"}</h6>
            <p className="card-text" name="description">{description || "not stated"}</p>
          </div>
          <div className="card-footer">
            <FiHeart size="20px" className={
                cn({ "changeColor-heart": true },
                    { "isActive": likes.length > 0 && likes.includes(user?.result?._id) }
                )
            } onClick={() =>{ 
              if(!user)return;
              dispatch(likeCardAction(id))
            }}
            />
            <span className="counter-position">{likes.length || null}</span>
            <div>Made by {name}</div>
          </div>
         </div> 
      </div>
    </div>
</>)
  }
   
  }
export default Card;

