export const getWindDirection = (...args: number[]) => {
    if (args.length !== 1) {
        throw new Error("Invalid number of parametrs.");
    } else if (args[0] > 360 || args[0] < 0) {
        throw new Error("The value must be between 0 and 360 degrees.");
    }
    let windDirection = null;
    switch (true) {
        case (args[0] < 90):
            windDirection = "North-East";
            break;
        case (args[0] < 180):
            windDirection = "South-East";
            break;
        case (args[0] < 270):
            windDirection = "South-West";
            break;
        case (args[0] < 360):
            windDirection = "North-West";
    }
    return windDirection;
}