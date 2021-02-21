import React, { useEffect } from "react";
import "./Message.css";

const Message = () => {
    useEffect(() => {
        document.title = "Vasiti | Thanks for your story";
    }, []);
    return (
        <div>
            This is message component
        </div>
    )
}

export default Message;