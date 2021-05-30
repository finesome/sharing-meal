import React from "react";
import { TextField } from "@material-ui/core";

export default function MyPinCodeInput(props) {
    return (
        <TextField
            value={props.pinCode[props.PinId]}
            autoComplete="off"
            placeholder="0"
            inputRef={props.pinRef}
            autoFocus={props.PinId === 0 ? true : false}
            inputProps={{
                style: {
                    padding: 0,
                    height: 56,
                    textAlign: "center",
                    width: "1.5rem",
                    //     padding: "2px",
                    margin: "0 5px",
                    fontSize: "2rem",
                },
            }}
            variant="outlined"
            type="tel"
            onInput={(e) => {
                let tempInput = Number(e.target.value) ? Math.max(0, parseInt(e.target.value)).toString().slice(0, 1) : "";
                // e.target.value = Number(e.target.value) ? Math.max(0, parseInt(e.target.value)).toString().slice(0, 1) : "";

                if (tempInput) {
                    let temp = props.pinCode.slice();
                    temp[props.PinId] = tempInput;
                    // temp === props.pinCode ? null : props.setPinCode(temp);

                    // JSON.stringify(playersOne) == JSON.stringify(playersTwo);

                    if (JSON.stringify(temp) !== JSON.stringify(props.pinCode)) {
                        props.setPinCode(temp);
                    }

                    if (props.PinId !== 3) props.nextPin(props.PinId);
                    // props.setPinCode(temp);
                }

                // temp !== props.pinCode ? props.setPinCode(temp) : null;
            }}
            // onFocus={() => {
            //     if (props.pinCode[props.PinId] !== "") {
            //         let temp = props.pinCode;
            //         temp[props.PinId] = "";
            //         props.setPinCode(temp);
            //     }
            // }}
            onKeyDown={props.onKeyDown}
        />
    );
}
