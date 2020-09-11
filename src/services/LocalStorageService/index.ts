import {IWeather} from "../../interfaces/IWeather";

const addWeather = (weather: IWeather): void => {
    const historyString: string | null = localStorage.getItem("history");
    if (historyString) {
        const history: IWeather[] = JSON.parse(historyString);
        history.push(weather);
        localStorage.setItem("history", JSON.stringify(history));
    } else {
        localStorage.setItem("history", JSON.stringify([weather]));
    }
};

const getHistory = (): IWeather[] | null => {
    const historyString: string | null = localStorage.getItem("history");
    if (historyString) {
        return JSON.parse(historyString);
    }
    return null;
};

const onRemoveHistoryStorage = (index: number): void => {
    const historyString: string | null = localStorage.getItem("history");
    if (historyString) {
        const updatedHistory = JSON.parse(historyString).filter(
            (item: IWeather, i: number) => i !== index
        );
        localStorage.setItem("history", JSON.stringify(updatedHistory));
    }
};

export {addWeather, getHistory, onRemoveHistoryStorage};
