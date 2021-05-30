import React, { useState, useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { styled } from "@material-ui/core/styles";
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider, Typography } from "@material-ui/core/";
import MyPinCodeInput from "./MyPinCodeInput/MyPinCodeInput";

import "./JoinAsDialog.css";

const MyListItem = styled(ListItem)({
    margin: "0.2rem 0",
    cursor: "pointer",
    borderRadius: "10px",

    "&:hover": {
        background: "rgb(0, 0, 0, 0.42)",
    },
});

const MyDialog = styled(Dialog)({
    width: "300px",
    margin: "0 auto",
});

export default function FormDialog(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    const Pin1Ref = useRef(null);
    const Pin2Ref = useRef(null);
    const Pin3Ref = useRef(null);
    const Pin4Ref = useRef(null);

    const PinRefs = [Pin1Ref, Pin2Ref, Pin3Ref, Pin4Ref];

    const [pinCode, setPinCode] = useState(["", "", "", ""]);

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);

    const pinsRef = [pin1Ref, pin2Ref, pin3Ref, pin4Ref];

    const nextPin = (pinId) => {
        pinsRef[pinId + 1].current.focus();
    };

    useEffect(() => {
        console.log(pinCode);
        // console.log("rentRef.current);
    }, [pinCode]);

    // const handlePinEnter = (event) => {
    //     const form = event.target.form;
    //     const index = Array.prototype.indexOf.call(form, event.target);
    //     form.elements[index + 1].focus();
    //     event.preventDefault();
    // };

    return (
        <div>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
            <MyListItem key={props.member.id + " ListItem"} onClick={handleClickOpen}>
                {/* <SecretQuestionDialog open={open} handleClickCloseCallback={handleClickClose} /> */}
                <ListItemAvatar>
                    <Avatar alt={props.member.name} src={`/static/images/avatar/${props.member.name.split(" ").join("")}.jpg`} />
                </ListItemAvatar>
                <ListItemText key={props.member.id + "ListItemText"}>{props.member.name}</ListItemText>
            </MyListItem>

            <MyDialog open={open} fullWidth={true} onClose={handleClickClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Enter Pin Code</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>{props.secretquestion}</DialogContentText>
                    <TextField autoFocus margin="dense" id="name" label="Answer to Secret Question" type="text" fullWidth /> */}
                    <div className="PinCodeInput">
                        {pinCode.map((pin, i) => (
                            <MyPinCodeInput nextPin={nextPin} pinRef={pinsRef[i]} key={"Pin" + i} PinId={i} pinCode={pinCode} setPinCode={setPinCode} />
                        ))}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} color="primary" onClick={() => setPinCode(["", "", "", ""])}>
                        Clear
                    </Button>
                    <Button onClick={handleClickClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </MyDialog>
        </div>
    );
}
