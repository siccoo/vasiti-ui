import React, { useEffect } from "react";
import "./Message.css";

import Member from "../../images/member.svg";

const Message = () => {
    useEffect(() => {
        document.title = "Vasiti | Thanks for your story";
    }, []);
    return (
        <div>
            <section className="portion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="message-content">
                                <img src={Member} alt="member-img" className="member-img" />
                                <h3>Thank you for sharing your story!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button className="btn" type="submit">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Message;