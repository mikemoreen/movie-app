import React, {useState} from "react";

import { useDispatch } from 'react-redux';

import { createCardAction } from "../../actions/cards.js";

import './cardForm.css'

  const CardForm = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    

    const [form, setCardData] = useState({ author: '', title: '', description: '', imgUrl: '' ,submittingState: 'fillingForm'});
    const dispatch = useDispatch();
    
    const handleChangeField = ({ target }) => {
      setCardData({ ...form, [target.name]: target.value } );
    }
    
    const handleSubmitForm =  async(e) => {
      e.preventDefault();
      dispatch(createCardAction({...form, name: user?.result?.name}))
      setCardData({ submittingState: 'submitted' });
    }
    
    const handleBackToForm = () => {
      setCardData({ submittingState: 'fillingForm' });
    }

    if (!user?.result?.name) {
      return (
        <div className="not-auth-position">
          <h1>You are not logged in</h1>
        </div>
      );
    }

    const renderResult = () => {
      return (
        <div className="success-add-position">
          <h1>Movie successfully added</h1>
          <button type="button" className="btn btn-primary" onClick={handleBackToForm}>New Card</button>
        </div>
      );
    }


    const renderForm = () => {
      return (
      <div className="form_center">
        <form onSubmit={handleSubmitForm} name="myForm" >
          <div className="col-md-10 mb-4">
            <input
              type="title"
              name="title"
              onChange={handleChangeField}
              value={form.title}
              className="form-control form-control-lg"
              id="title"
              placeholder="Title"
              
            />
          </div>

          <div className="col-md-10 mb-4">
            <input type="text" name="author" value={form.author} onChange={handleChangeField} className="form-control form-control-lg" id="author" placeholder="Author" />
          </div>
          <div className="col-md-10 mb-4">
            <input type="text" name="imgUrl" value={form.imgUrl} onChange={handleChangeField} className="form-control form-control-lg" id="imgUrl" placeholder="ImgUrl" />
          </div>
          
          <div className="col-md-10 mb-4">
            <textarea
              type="description"
              onChange={handleChangeField}
              value={form.description}
              name="description"
              className="form-control form-control-lg"
              id="description"
              placeholder="Description"
            />
          </div>
          <button type="submit" className="btn btn-primary">Create Card</button>
        </form>
      </div>
      );
    }
    const render = () =>{
      switch (form.submittingState) {
        case 'fillingForm':
          return renderForm();
        case 'submitted':
          return renderResult();
        default:
          throw new Error(`'${form.submittingState}' - unknown state`);
      }
    }

    return  render()

  }
  export default CardForm