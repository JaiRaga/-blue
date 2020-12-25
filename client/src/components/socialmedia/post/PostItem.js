import React, { useState } from 'react';
import { Grid, makeStyles, Paper, Avatar, IconButton, Backdrop } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CommentsCount from '../comments/CommentsCount';
import img from '../../../img/raga.jpg';
import CreatePost from './CreatePost';

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
	postItems: {
		// border: "2px solid #000",
		margin: '22px 0',
	},
	children: {
		background: '#fff',
		padding: 5,
		margin: 2,
	},
	small: {
		width: theme.spacing(4),
		height: theme.spacing(4),
		paddingTop: 7,
	},
	medium: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	name: {
		paddingLeft: 5,
		paddingTop: 9,
	},
	flexContainer: {
		display: 'flex',
	},
	flexChild: {
		margin: '0 auto',
	},
}));

const PostItem = ({ post }) => {
	const classes = useStyles();
	const [editClicked, setEditClicked] = useState(false)
	// const [createPost, setCreatePost] = useState(false)
	console.log("Edit icon Clicked", editClicked, post.text)

	const handleEditPost = () => setEditClicked(prev => !prev)

	const handleEditPostClose = (close) => close ? setEditClicked(false) : null

	// const [open, setOpen] = React.useState(false);
	// const handleClose = () => {
	// 	setOpen(false);
	// };
	// const handleToggle = () => {
	// 	setOpen(!open);
	// };


	return (
		<Grid item className={classes.postItems}>
			<Backdrop className={classes.backdrop} open={editClicked}>
				{editClicked ? <CreatePost posttext={post.text.slice(0, 15)} handleEditPostClose={handleEditPostClose} /> : null}
			</Backdrop>

			<Paper elevation={9}>
				<Grid container item direction='column'>
					<Grid item className={classes.children}>
						<Grid container item className={classes.flexContainer}>
							<Avatar alt='profile-pic' src={img} className={classes.small} />
							<Grid item className={classes.name}>
								Name container
							</Grid>
							<Grid item className={classes.flexChild}>
								{/* <IconButton color='primary' onClick={() => setEditClicked(prev => !prev) && setCreatePost(prev => !prev)}> */}
								<IconButton color='primary' onClick={handleEditPost}>
									<EditIcon />
								</IconButton>
								<IconButton color='secondary'>
									<DeleteOutlineIcon />
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.children}>
						{post.text}
						{/* Post body container Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Ipsa vero maxime accusamus nostrum cum fugiat
						expedita iure tempore commodi dignissimos? Incidunt ut dolores
						perspiciatis fugit. */}
					</Grid>
					<Grid item className={classes.children}>
						Likes Views Tags container
					</Grid>
				</Grid>
			</Paper>
			<Grid item>
				<Grid container item justify='center'>
					<Grid item>
						<CommentsCount />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default PostItem;
