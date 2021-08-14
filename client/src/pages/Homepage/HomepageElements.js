import styled from "styled-components";

import { Link as LinkR } from "react-router-dom";

export const HomepageContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #654ea3; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #eaafc8, #654ea3); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #eaafc8, #654ea3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const HomepageContent = styled.div``;

export const HomepageTitle = styled.p``;

export const HomepageButtonsWrapper = styled.div``;

export const HomepageCreateRoomButton = styled(LinkR)``;

export const HomepageJoinRoomButton = styled(LinkR)``;
