import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";

import { useStyles } from "./StylesForNavBar";
import { Title } from "./Title";
import { InputSearch } from "./InputSearch";
import { searchWeather } from "../../store/actions/weather";

export const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onSearch = (city: string) => {
    dispatch(searchWeather(city));
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Title text="Weather Application" classes={classes.title} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputSearch
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onSearch={onSearch}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
