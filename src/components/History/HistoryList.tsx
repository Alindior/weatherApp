import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { HistoryItem } from "./HistoryItem";

const useStyles = makeStyles((theme: Theme) =>
 createStyles({
  root: {
   maxWidth: 400,
   backgroundColor: theme.palette.background.paper,
   marginTop: 5,
   marginLeft: 5,
   flexGrow: 1
  },
  nested: {
   paddingLeft: theme.spacing(4),
  },
 }),
);

interface HistoryListProps {
 history: any,
 onDeleteHistory: Function,
 onSelectCity: Function
}

export const HistoryList = ({ history, onSelectCity, onDeleteHistory }: HistoryListProps) => {
 const classes = useStyles();
 const [open, setOpen] = React.useState(false);

 const handleClick = () => {
  setOpen(!open);
 };

 return (
  <List
   component="nav"
   aria-labelledby="nested-list-subheader"
   className={classes.root}
  >
   <ListItem button onClick={handleClick}>
    <ListItemIcon>
     <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="History" />
    {open ? <ExpandLess /> : <ExpandMore />}
   </ListItem>
   <Collapse in={open} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
     {history.map((item: any, index: number) => (
      <HistoryItem
       key={item.list[0].dt}
       item={item}
       index={index}
       classes={classes}
       onSelect={onSelectCity}
       onDelete={onDeleteHistory}
      />
     ))}
    </List>
   </Collapse>
  </List>
 );
}