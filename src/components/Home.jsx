import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { schedule } from '../constants/schedule'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom'


class Home extends Component {

	constructor(props) {
		super(props);
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}

	render(){
		return (
			<div>
				<Grid container justify="space-evenly" spacing={40}>
					<Grid item xs={12} lg={9} md={9} sm={12}>
						<Paper style={{padding: "2em"}}>
							<Typography variant="headline">
								Georgia Institute of Technology Mastering Android Development
							</Typography>
							<br/>
							<Typography variant="subheading">
								GITMAD is a College of Computing organization that strives to teach and encourage the development of Android applications.
								Enabling members to either work in a group to develop their own application or learning where to start in Android development.
							</Typography>
							<br/>
							<Typography variant="subheading">
								This year, we're going to be starting up a Beginner session running alongside of Advanced sessions.
								The Beginner session is good for those who are starting to learn how to write Android apps and also those who want more practice in it.
								In Advanced sessions, we dive into app programming immediately, so those who have previous Android experience are welcome to join this instead.
							</Typography>
							<br/>
							<Typography variant="headline">
								Schedule
							</Typography>
							<br/>
							<Typography variant="subheading">
								Meetings are held on Mondays in Klaus 1447 from 6:30pm-8pm.
							</Typography>
							<br/>


							<Table>
								<TableHead>
									<TableRow>
										<TableCell>Date</TableCell>									
										<TableCell>Topic</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{schedule.map(meeting => (
										<TableRow >
											<TableCell style={{fontSize: 16}}>{meeting.day}</TableCell>
											<TableCell style={{fontSize: 16}}>
												{
													meeting.link && meeting.link.length ? (<Link to={meeting.link} style={{textDecoration: "none"}}>{meeting.topic}</Link>) : (<div>{meeting.topic}</div>)
												}
											</TableCell>
										</TableRow>
										))}
								</TableBody>
							</Table>



						</Paper>
					</Grid>

					<Grid item xs={12} md={3} lg={3}>
						<Paper style={{margin:"auto", padding: 10}}>
						<div class="fb-page" data-href="https://www.facebook.com/gitmad" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/gitmad" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/gitmad">GIT MAD: Georgia Institute of Technology Mastering Android Development</a></blockquote></div>
						</Paper>
					</Grid>


				</Grid>

			</div>
		);
	}
}

export default Home;