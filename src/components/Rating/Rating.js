import React from "react";
import "./Rating.css";
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';

const Rating = props => {
    return(
        <div className="rating">
            <p>
                You have got no reviews! Message Current and Past Clients to
                provide Ratings & Reviews and enhance your profile!
            </p>
            <p>Click on the below icon to message!</p>
            <MessageOutlinedIcon style={{fontSize:"250px", color:"#cccccc"}} />
        </div>
    )
}

export default Rating