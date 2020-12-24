import React, { useEffect } from 'react';
import { Grid, makeStyles, Hidden } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';
import SideNav from '../layout/SideNav';
import Posts from '../social/Posts';
import { getAllPosts } from '../../../redux/actions/social';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		// height: "100%"
	},
	container: {
		minHeight: '95vh',
	},
	sidenav: {
		background: '#ccc',
	},
	skeleton: {
		marginTop: 10,
		// padding: '30px 0',
	},
	skeletonComment: {
		marginTop: 5,
	},
	post: {
		background: '#666',
		// minHeight: "100%"
	},
	posts: {
		background: '#985',
	},
	onlineUsers: {
		background: '#888',
	},
}));

const SocialDashboard = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.social.posts);
	const loading = useSelector((state) => state.social.loading);

	useEffect(() => {
		dispatch(getAllPosts());
	}, []);

	return (
		<div className={classes.root}>
			<Grid container className={classes.container}>
				<Hidden smDown>
					<Grid item md={3} className={classes.sidenav}>
						<SideNav />
					</Grid>
				</Hidden>
				<Grid item xs={12} md={6} className={classes.post}>
					{loading ? (
						<Grid container item justify='center' alignItems='center'>
							<Grid item xs={8} md={11}>
								<Skeleton
									animation='wave'
									variant='rect'
									height={200}
									className={classes.skeleton}
								/>
								<Grid container item justify='center'>
									<Grid item>
										<Skeleton
											variant='rect'
											width={100}
											height={30}
											className={classes.skeletonComment}
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={8} md={11}>
								<Skeleton
									animation='wave'
									variant='rect'
									height={200}
									className={classes.skeleton}
								/>
								<Grid container item justify='center'>
									<Grid item>
										<Skeleton
											variant='rect'
											width={100}
											height={30}
											className={classes.skeletonComment}
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={8} md={11}>
								<Skeleton
									animation='wave'
									variant='rect'
									height={200}
									className={classes.skeleton}
								/>
								<Grid container item justify='center'>
									<Grid item>
										<Skeleton
											variant='rect'
											width={100}
											height={30}
											className={classes.skeletonComment}
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					) : (
						<Posts posts={posts} />
					)}
				</Grid>
				<Hidden smDown>
					<Grid item md={3} className={classes.onlineUsers}>
						Live reload
					</Grid>
				</Hidden>
			</Grid>
		</div>
	);
};

export default SocialDashboard;
