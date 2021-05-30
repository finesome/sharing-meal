import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import "./CreateParty.css";
import { Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Button from "@material-ui/core/Button";

const PartyNameInput = styled(TextField)({
    marginTop: "1rem",
});

const MembersInput = styled(TextField)({
    width: "100%",
    gridColumn: "2/3",
});

const MyAddIcon = styled(AddIcon)({
    marginLeft: "0.5rem",
    cursor: "pointer",
    gridColumn: "3/4",
});

const MyDeleteOutlineIcon = styled(HighlightOffIcon)({
    marginLeft: "0.5rem",
    cursor: "pointer",
    gridColumn: "3/4",
});

const CreatePartyButton = styled(Button)({
    // position: 'absolute',
    // bottom: '100px',
    justifySelf: "flex-end",
    width: "10rem",
    margin: "2rem auto",
});

const CreateParty = () => {
    const [Members, setMembers] = useState([]);
    const [CurrentMember, setCurrentMember] = useState("");
    const [PartyName, setPartyName] = useState("");
    const [HostName, setHostName] = useState("");

    const addToMembers = () => {
        setMembers((prevstate) => [...prevstate, { name: CurrentMember }]);
        setCurrentMember("");
    };

    const deleteMember = (name) => {
        setMembers(Members.filter((member) => member.name !== name));
    };

    return (
        // <div className="CreatePartyWrapper">
        <div className="CreatePartyContainer">
            <PartyNameInput value={PartyName} label="Party Name" variant="outlined" onChange={(e) => setPartyName(e.target.value)} />
            <PartyNameInput
                value={HostName}
                size="small"
                label="Your Name"
                variant="outlined"
                onChange={(e) => setHostName(e.target.value)}
                style={{ marginBottom: "1rem" }}
            />
            <Typography>Enter Party Members:</Typography>
            <div className="InputMembers">
                <MembersInput size="small" variant="outlined" value={CurrentMember} onChange={(e) => setCurrentMember(e.target.value)}></MembersInput>
                <MyAddIcon onClick={addToMembers} />
            </div>
            <div className="MembersList">
                {Members.map((member, i) => (
                    <div className="MembersListElement" key={member.name}>
                        <span className="MembersListIndex">{i + 1}</span>
                        <Typography className="MembersListName">{member.name}</Typography>
                        <MyDeleteOutlineIcon onClick={() => deleteMember(member.name)} />
                    </div>
                ))}
            </div>
            <CreatePartyButton variant="contained">Create</CreatePartyButton>
        </div>
        // </div>
    );
};

export default CreateParty;
