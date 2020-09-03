import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import {getCelsiusTemperature} from "../utils";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 400,
            borderColor: "#abe39f",
            padding: "0 10px",
            marginTop: 2
        },
        main__weather_prediction: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }

    }),
);

interface PredictionItemProps {
    weather: any
}

export const PredictionItem = ({weather}: PredictionItemProps) => {
    const classes = useStyles();
    const {dt_txt, main: {temp}} = weather;
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <div className={classes.main__weather_prediction}>
                <div className="prediction__date">
                    <p>{dt_txt}</p>
                </div>
                <div className="prediction__icon">
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt=""/>
                </div>
                <div className="prediction__temperature">
                    {getCelsiusTemperature(temp)} С
                </div>
            </div>
        </Card>
    );
}