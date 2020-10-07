import React from "react";
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import './About.css'
const about = props => {
    return(
        <div className="about">
            <p>
            Providing relavant information and details about your
            company and products you deal in will help potential clients
            trust your company and reach out for the right products!
            </p>
            <p>Click on the icon below to get started!</p>
            <AddCircleOutlinedIcon style={{fontSize:"250px", color:"#cccccc"}}/>
        </div>
    )
}

export default about