import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/core/styles";
import "./JoinParty.css";
import JoinAs from "../JoinAs/JoinAs";
import { Redirect } from "react-router-dom";

const JoinPageInput = styled(TextField)({
    margin: "0.5rem 0",
});

const MyButton = styled(Button)({
    marginBottom: "2px",
    width: "120px",
});

const JoinParty = (props) => {
    const [PartyCode, setPartyCode] = useState("");

    useEffect(() => {
        console.log(props);
    }, []);

    const JoinPartyButtonPressed = () => {
        setPartyCode("");
        props.history.push("/room");
        // return <Redirect to={`/room`} />;
    };

    return (
        <div className="JoinPageContainer">
            <Typography variant="h5">Enter Party Code</Typography>
            <JoinPageInput variant="outlined" value={PartyCode} onChange={(e) => setPartyCode(e.target.value)} />
            <MyButton variant="contained" color="primary" onClick={JoinPartyButtonPressed}>
                Join Party
            </MyButton>
            <MyButton variant="contained" color="secondary">
                Go Back
            </MyButton>
        </div>
    );
};

export default JoinParty;
