import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import StarBorder from "@material-ui/icons/StarBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import { IWeather } from "../../interfaces/IWeather";
import { useStyles } from "./StylesForHistory";

interface IHistoryItemProps {
  item: IWeather;
  onSelect: (weather: IWeather) => void;
  onDelete: (index: number) => void;
  index: number;
}

export const HistoryItem = ({
  item,
  index,
  onSelect,
  onDelete,
}: IHistoryItemProps) => {
  const classes = useStyles();
  const onRemoveItem = () => onDelete(index);
  const onSelectItem = () => onSelect(item);
  return (
    <ListItem button className={classes.nested} onClick={onSelectItem}>
      <ListItemIcon>
        <StarBorder />
      </ListItemIcon>
      <ListItemText primary={item.city.name} />
      <ListItemSecondaryAction onClick={onRemoveItem}>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
