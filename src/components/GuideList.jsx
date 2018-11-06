import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { guides } from '../constants/guides'


const GuideList = (props) => {
	return (
		<Grid container justify="center" spacing={32} alignItems="stretch">
			{Object.keys(guides).map((key, idx) =>(
				<Grid item lg={4} xs={12} xl={3} md={4}>
					<Card>
						<CardActionArea href={"/guides/" + key}>
							<CardMedia
								style={{height: 200}}
								image={require('../images/material_backgrounds/'+ (idx % 40 + 1) +'.jpg')}
							/>
							<CardContent style={{minHeight:120}}>
								<Typography variant="headline">{guides[key].title}</Typography>
								<Typography variant="subtitle">{guides[key].subtitle}</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				))}
		</Grid>

	);
}

export default GuideList;