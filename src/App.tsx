import React from 'react';
import "./styles/index.scss";
import { Container } from '@material-ui/core';

import { MainContainer } from "./containers/MainContainer";


export const App = () => {
    return (
        <Container className="container">
            <MainContainer />
        </Container>
    );
}

