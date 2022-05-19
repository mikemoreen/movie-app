import React from "react";

const defaultImg = "https://www.shareicon.net/download/2015/08/15/85434_guest_512x512.png"

function Comment({comment}) {
    const [name, com] = comment.split(":")
    return (
        <div className="card mb-4">
                            <div className="card-body">
                                <p>{com}</p>

                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <img src={defaultImg} alt="avatar" width="25" height="25" />
                                        <p className="small mb-0 ms-2">{name}</p>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <p className="small text-muted mb-0">Upvote?</p>
                                        <p className="small text-muted mb-0"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
    )

}

export default Comment;