import React from "react";
import "./JoinAs.css";
import { List, Typography } from "@material-ui/core/";

import { styled } from "@material-ui/core/styles";
import JoinAsDialog from "./JoinAsDialog";

const JoinAs = () => {
    const FakeUsers = [
        {
            id: "1",
            name: "Nurbolat Aimakov",
        },
        {
            id: "2",
            name: "Alisher Iskakov",
        },
        {
            id: "3",
            name: "Myrat Bayramov",
        },
        {
            id: "4",
            name: "Hyewon Cho",
        },
        {
            id: "5",
            name: "Zhibek Sadykova",
        },
        {
            id: "6",
            name: "Dilshod Bakhtiyorov",
        },
    ];

    // const OpenSecretQuestionDialog = () => {
    //     refs.SecretQuestionDialog.handleC
    // }

    return (
        <div className="JoinAsContainer">
            <Typography variant="h5">Sign in as:</Typography>
            <List>
                {FakeUsers.map((member) => (
                    <JoinAsDialog key={member.id} member={member} />
                ))}
            </List>
        </div>
    );
};

export default JoinAs;
