import React from "react";
import { Collapse, List } from "@material-ui/core";

import { useStyles } from "./StylesForHistory";
import { HistoryItem } from "./HistoryItem";
import { HistoryTitle } from "./HistoryTitle";
import { IWeather } from "../../interfaces/IWeather";

interface IHistoryProps {
  history: IWeather[] | null;
  onDelete: (index: number) => void;
  onSelect: (weather: IWeather) => void;
}

export const History = ({ history, onDelete, onSelect }: IHistoryProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  if (!history) return null;
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <HistoryTitle title="History" handleClick={handleClick} isOpen={open} />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {history.map((item: IWeather, index: number) => (
            <HistoryItem
              key={item.list[0].dt}
              item={item}
              index={index}
              onSelect={onSelect}
              onDelete={onDelete}
            />
          ))}
        </List>
      </Collapse>
    </List>
  );
};
