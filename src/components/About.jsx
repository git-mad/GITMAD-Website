import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { officers } from '../constants/officers'

const About = (props) => {
	return (
		<div>
			<Grid container justify="space-evenly" spacing={40}>
			{officers.map((person) => (
				<Grid item xs={12} md={6} sm={6} lg={4} xl={3}>
					<Card>
						<CardMedia
						style={{height:"40vh"}}
						image={person.picture}
						title={person.name}
						/>
						<CardContent>	
							<Typography gutterBottom variant="headline">
								{person.name}
							</Typography>
							<Typography gutterBottom variant="title">
								{person.position}
							</Typography>
							<Typography gutterBottom>
								<a href={"mailto:" + person.email}>{person.email}</a>
							</Typography>
							<Typography>
								{person.bio}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				))}
			</Grid>
		</div>
	);
}

export default About;