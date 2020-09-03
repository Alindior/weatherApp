import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {getWindDirection, getCelsiusTemperature} from "../utils";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 400,
            backgroundColor : "#abe39f"
        },
        icon : {
            width : 100,
            height : 100,
            objectFit : "cover"
        },
        weather__info : {
            height : '70px',
            display : "flex",
            flexDirection : "column",
            justifyContent : "space-between",
            fontWeight : "bold",
            fontSize : 18
        },
        weather__wind : {
            display : "flex",
            justifyContent: "space-around"
        }
    }),
);

interface CurrentWeatherProps {
    city:any,
    weather:any
}

export const CurrentWeather = ({city, weather}:CurrentWeatherProps)=> {
    const {dt_txt, main : {temp_max, temp_min}, wind : {deg, speed}} = weather;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title={city}
                subheader={dt_txt}
            />
            <CardMedia>
                <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="icon" className={classes.icon}/>
            </CardMedia>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="div">
                    <div className={classes.weather__info}>
                        <div className="weather__temperature">
                            {getCelsiusTemperature(temp_max)} - {getCelsiusTemperature(temp_min)} C
                        </div>
                        <div className={classes.weather__wind}>
                            <div className="weather__wind-direction">
                                {getWindDirection(deg)}
                            </div>
                            <div className="weather__wind-speed">
                                {Math.ceil(speed)} m/s
                            </div>
                        </div>
                    </div>
                </Typography>
            </CardContent>
        </Card>
    );
}