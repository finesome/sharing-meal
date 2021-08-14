import React from "react";

import {
    HomepageContainer,
    HomepageContent,
    HomepageTitle,
    HomepageButtonsWrapper,
    HomepageCreateRoomButton,
    HomepageJoinRoomButton,
} from "./HomepageElements";

const Homepage = () => {
    return (
        <>
            <HomepageContainer>
                <HomepageContent>
                    <HomepageTitle>Lol</HomepageTitle>
                    <HomepageButtonsWrapper>
                        <HomepageCreateRoomButton to="/"></HomepageCreateRoomButton>
                        <HomepageJoinRoomButton to="/"></HomepageJoinRoomButton>
                    </HomepageButtonsWrapper>
                </HomepageContent>
            </HomepageContainer>
        </>
        // <div>lol</div>
    );
};

export default Homepage;
