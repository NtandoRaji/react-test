import React, {useState} from "react";

import Button from "../../components/Button/Button";
import Popup from "../../components/Popup/Popup";

import projectLogo from "../../assets/images/logo.png";

import "./LoginPage.css";


const LoginPage = () => {
    // Variables
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [displayPopup, setDisplayPopup] = useState(true);

    // Functions & Logic
    const handleLoginButtonClick = () => {
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
                                
                            <Button text="Login"/>
                        </form>
                    </section>
                </section>
            </main>
            <Popup trigger={displayPopup}>
                <h1> User doesn't exist</h1>
                <Button onClick={handleLoginButtonClick} text="Close"/>
            </Popup>
        </>
    );
}

export default LoginPage;
