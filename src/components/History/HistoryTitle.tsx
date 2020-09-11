import React, { ReactNode } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

interface IHistoryTitle {
  title: string;
  handleClick: () => void;
  isOpen: boolean;
}

export const HistoryTitle = ({ handleClick, title, isOpen }: IHistoryTitle) => {
  return (
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={title} />
      {isOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
  );
};
