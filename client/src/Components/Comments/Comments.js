import React, {useState} from "react";

import "./Comments.css"

import {commentCardAction} from "../../actions/cards";
import { useDispatch } from 'react-redux';
import Comment from "../Comment/Comment";

function createComment (name, comment) {
    return `${name.trim()}:${comment.trim()}`
}

function Comments({comments, id}) {

    const user = JSON.parse(localStorage.getItem('profile'));
    const [inputData, setDataInput] = useState("");
    const dispatch = useDispatch();

    const handleSubmitForm = (event) => {
    
    event.preventDefault()
    console.log(user?.result?.name)
    dispatch(commentCardAction(createComment(user?.result?.name, inputData),id))
    setDataInput("")
    }
    return (
        <aside className="card-comments">
                      <div className="form-outline mb-4">
                                <form  onSubmit={handleSubmitForm} name="commentForm" >
                                    <input type="text" id="addAComment" className="form-control" 
                                    placeholder="Type comment..."  value={inputData} onChange={(e)=>setDataInput(e.target.value)}/>
                                </form>
                                <label className="form-label" htmlFor="addAComment">+ Add a Comment</label>
                            </div>
                            {comments.map((comment,index)=> <Comment comment={comment} key={index}/>)}
          </aside>
    )
}
export default Comments;