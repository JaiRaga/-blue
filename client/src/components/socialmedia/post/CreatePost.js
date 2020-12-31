import React, { useState } from 'react'
import { Grid, makeStyles } from "@material-ui/core"
import { useDispatch } from "react-redux"
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { createPost, updatePost } from '../../../redux/actions/social';


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

// Component for Creating and Editing Post.
const CreatePost = ({ postId = null, posttext = null, handlePostClose = null }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    // console.log(posttext)

    // post text 
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = () => {
        !handlePostClose ? dispatch(updatePost(postId, text)) : dispatch(createPost(text))
        return handlePostClose(true)

    }

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
                    onChange={handleChange}
                    value={text}
                />
                <IconButton color="primary" className={classes.iconButton} aria-label="submit" onClick={() => handleSubmit()}>
                    <CheckIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton color="secondary" className={classes.iconButton} aria-label="close" onClick={() => handleSubmit()}>
                    <CloseIcon />
                </IconButton>
            </Paper>
        </Grid>
    )
}

export default CreatePost
