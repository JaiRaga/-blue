import React, { useState } from 'react'
import { Grid, makeStyles, Typography, Button } from '@material-ui/core'
import CreatePost from '../post/CreatePost'
import { Fragment } from 'react'

const useStyles = makeStyles(theme => ({
    title: {
        margin: 5
    },
    createButton: {
        margin: 5
    }
}))

const SideNav = () => {
    const classes = useStyles()
    const [createPostClicked, setCreatePostClicked] = useState(false)
    // console.log("Edit icon Clicked", editClicked, post.text)

    // controls open/close of edit component
    const handleCreatePost = () => setCreatePostClicked(prev => !prev)

    const handleCreatePostClose = (close) => close ? setCreatePostClicked(false) : null
    return (
        <Fragment>
            {createPostClicked ? <CreatePost handlePostClose={handleCreatePostClose} /> : null}
            <Grid container item direction="column">
                <Grid container item justify="center" className={classes.title}>
                    <Typography variant="h5" align="center">Navigator</Typography>
                </Grid>
                <Grid container item justify="center" className={classes.createButton}>
                    <Button color="primary">Create Post</Button>
                </Grid>
                <Grid container item justify="center" className={classes.createButton}>
                    <Button color="primary">Create Post</Button>
                </Grid>
                <Grid container item justify="center" className={classes.createButton}>
                    <Button color="primary">Create Post</Button>
                </Grid>
                <Grid container item justify="center" className={classes.createButton}>
                    <Button color="primary">Create Post</Button>
                </Grid>
                <Grid container item justify="center" className={classes.createButton} onClick={handleCreatePost}>
                    <Button color="primary">Create Post</Button>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default SideNav
