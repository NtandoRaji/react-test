import React, {useState} from "react";

import Button from "../../components/Button/Button";
import Popup from "../../components/Popup/Popup";
import { isValidPassword, isUserExists } from "../../utils/dataValidation";

import projectLogo from "../../assets/images/logo.png";

import "./LoginPage.css";


const LoginPage = () => {
    // Variables
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [displayPopup, setDisplayPopup] = useState(false);
    const [popupDisplayText, setPopupDisplayText] = useState("");

    // Functions & Logic
    const handleLoginButtonClick = (event) => {
        event.preventDefault(); // Prevent the form from submitting
        let result = isUserExists(userID);
        
        if (result["valid"]) { // User does exist.
            let passwordResult = isValidPassword(password);

            if (passwordResult["valid"]){
                setPopupDisplayText(result["message"]);
            }
            else { // Invalid password
                setPopupDisplayText(passwordResult["message"]);
            }
        }

        else { //User does not exist
            setPopupDisplayText(result["message"]);
        }

        setDisplayPopup(true);
    }

    const handleCloseButtonClick = () => {
        setDisplayPopup(false);
    }

    // HTML Code
    return (
        <>
            <main className="container">
                <section className="sub-container">
                    <img className="projectLogo" src={projectLogo} alt="" />
                    <section className="formWrapper">
                        <form action="">
                            <label data-testid="userIDLabel" className="formLabel">User ID</label>
                            <input value={userID} onChange={(event) => setUserID(event.target.value)}
                                data-testid="userIDField" className="inputBox" type="text"/>

                            <label data-testid="passwordLabel" className="formLabel">Password</label>
                            <input value={password} onChange={(event) => setPassword(event.target.value)}
                                data-testid="passwordField" className="inputBox" type="password"/>
                                
                            <Button onClick={(event) => handleLoginButtonClick(event)} text="Login"/>
                        </form>
                    </section>
                </section>
            </main>
            <Popup data-testid="loginPopup" trigger={displayPopup}>
                <h1> Popup Message </h1>
                <p> {popupDisplayText} </p>
                <Button onClick={handleCloseButtonClick} text="Close"/>
            </Popup>
        </>
    );
}

export default LoginPage;
