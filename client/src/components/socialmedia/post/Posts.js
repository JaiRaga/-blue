import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import PostItem from './PostItem';

const useStyles = makeStyles((theme) => ({
	container: {
		// paddingLeft: 15
		// border: "2px solid #eee"
	},
}));

const Posts = ({ posts }) => {
	const classes = useStyles();

	return (
		<Grid container item justify='center'>
			<Grid
				container
				item
				xs={11}
				sm={7}
				md={11}
				direction='column'
				className={classes.container}>
				{posts.map((post) => (
					<PostItem key={post._id} post={post} />
				))}
			</Grid>
		</Grid>
	);
};

export default Posts;
