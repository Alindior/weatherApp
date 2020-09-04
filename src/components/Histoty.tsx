import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: 450,
            position: "absolute",
            top: 70,
            right: 10
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
    }),
);

interface HistoryProps {
    history: any,
    onDeleteHistory: Function,
    onSelectCity: Function
}

export const History = ({ history, onSelectCity, onDeleteHistory }: HistoryProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.demo}>
                <List>
                    {history.map((item: any, index: any) => (
                        (
                            <ListItem className="history__item" key={item.list[0].dt}>
                                <ListItemText onClick={() => onSelectCity(item)}
                                    primary={item.city.name}
                                />
                                <ListItemSecondaryAction onClick={() => onDeleteHistory(index)}>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    ))}
                </List>
            </div>
        </div>
    );
}