import React from 'react';
import "./styles/index.scss";
import {Container} from '@material-ui/core';

import {SearchAppBar} from "./components/Header";
import {Main} from "./components/Main";

interface IApp {
    title?: string,
    children?: React.ReactNode
}



function App({title}: IApp) {
    return (
        <Container className="container">
            <SearchAppBar/>
            <Main/>
        </Container>
    );
}

export default App;
