import React from 'react'
import { Grid, makeStyles } from "@material-ui/core"
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));


const CreatePost = ({ posttext, handleEditPostClose }) => {
    const classes = useStyles()
    console.log(posttext)
    return (
        <Grid container item xs={10} sm={12} justify="center" alignItems="center">
            <Paper elevation={24} component="form" className={classes.root}>
                <IconButton className={classes.iconButton} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                {/*name, onChange, value required for inputbase*/}
                <InputBase
                    className={classes.input}
                    placeholder={posttext + "..."}
                    color="secondary"
                    inputProps={{ 'aria-label': 'edit post' }}
                    autoComplete
                    autoFocus
                    multiline
                />
                <IconButton color="primary" className={classes.iconButton} aria-label="submit" onClick={() => handleEditPostClose(true)}>
                    <CheckIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton color="secondary" className={classes.iconButton} aria-label="close" onClick={() => handleEditPostClose(true)}>
                    <CloseIcon />
                </IconButton>
            </Paper>
        </Grid>
    )
}

export default CreatePost
