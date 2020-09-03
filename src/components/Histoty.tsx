import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: 450,
            position: "absolute",
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
    history: any
}

export const History = ({history}: HistoryProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.demo}>
                <List>
                    {history.map((item:any, index:any) => (
                        (
                            <ListItem className="history__item">
                                <ListItemText  onClick={() => {
                                    console.log(item.city.name)
                                }}
                                    primary={item.city.name}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon/>
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