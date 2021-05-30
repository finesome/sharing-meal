import React from "react";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./HomePage.css";

const HomePageButton = styled(Button)({
    width: "10rem",
});

const Homepage = (props) => {
    return (
        <div className="parent">
            <HomePageButton variant="contained" color="primary" onClick={() => props.history.push("/create")}>
                Create Party
            </HomePageButton>
            <HomePageButton variant="contained" color="primary" style={{ marginTop: "0.5rem" }} onClick={() => props.history.push("/join")}>
                Join Party
            </HomePageButton>
        </div>
    );
};

export default Homepage;
