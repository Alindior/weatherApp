export const getWindDirection = (deg: any) => {
    let windDirection = null;
    switch (true) {
        case (deg < 90):
            console.log("hello")
            windDirection = "North-East";
            break;
        case (deg < 180) :
            windDirection = "South-East";
            break;
        case (deg < 270) :
            windDirection = "South-West";
            break;
        case (deg < 360):
            windDirection =  "North-West";
    }
    return windDirection;
}