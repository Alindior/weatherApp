import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from "./StylesForHeader";

interface HeaderProps {
    onSearch: Function
}

export const Header = ({ onSearch }: HeaderProps) => {
    const classes = useStyles();
    const [inputValue, setInputValue] = React.useState("");
    const onChangeInput = (e: any) => setInputValue(e.target.value);
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Weather Application
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            onChange={onChangeInput}
                            value={inputValue}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    onSearch(inputValue);
                                    setInputValue("");
                                }
                            }}
                            placeholder="City..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

