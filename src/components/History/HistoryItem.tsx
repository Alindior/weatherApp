import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

interface HistoryItemProps {
 item: any,
 classes: any,
 onSelect: Function,
 onDelete: Function,
 index: number
}

export const HistoryItem = ({ item, index, classes, onSelect, onDelete }: HistoryItemProps) => {
 return (
  <ListItem
   button className={classes.nested}
   onClick={() => {
    onSelect(item);
   }}
  >
   <ListItemIcon>
    <StarBorder />
   </ListItemIcon>
   <ListItemText primary={item.city.name} />
   <ListItemSecondaryAction
    onClick={() => {
     onDelete(index);
    }}
   >
    <IconButton edge="end" aria-label="delete">
     <DeleteIcon />
    </IconButton>
   </ListItemSecondaryAction>
  </ListItem>
 )
}