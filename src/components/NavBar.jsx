import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from './GitHubIcon';
import FaceBookIcon from './FaceBookIcon';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';


class NavBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			pages:[
				{
					title: 'Home',
					link: '/'
				},
				{
					title: 'About Us',
					link: '/about'
				},
				{
					title: 'Guides',
					link: '/guides'
				}
			],
			selectedPage: 0
		}
	}

	render(){

		return (
			<div>
				<AppBar color="primary" position="fixed">
					<Toolbar>
						<Grid container alignItems="center">

							<Grid item>
								<Button href="/">
									<img src={logo} alt="GITMAD Logo" style={{height:"4em"}}/>
								</Button>
							</Grid>
							{this.state.pages.map((page, idx) => (
								<Grid item>
									<Button href={page.link} color="inherit">
										{page.title}
									</Button>
								</Grid>
								))}
						</Grid>
						<Grid container justify="flex-end" alignItems="center">
							<Tooltip title="GitHub">
								<IconButton color="inherit" href="https://github.com/git-mad">
					  				<GitHubIcon/>
								</IconButton>
				  			</Tooltip>
				  			<Tooltip title="Facebook">
								<IconButton color="inherit" href="https://www.facebook.com/gitmad/">
					  				<FaceBookIcon/>
								</IconButton>
				  			</Tooltip>
				  		</Grid>
					</Toolbar>
			  </AppBar>
			</div>
		  );
		}
	}

export default NavBar;