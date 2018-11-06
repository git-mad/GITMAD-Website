import React, { Component } from 'react';
import { guides } from '../constants/guides'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


class GuidePage extends Component  {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth/1.5, height: window.innerHeight/1.5 });
	}
	
	render(){
		let thisGuide = guides[this.props.match.params.guide]
		return (
			<div>
				<Paper>
					<Grid container direction="column" spacing={32} justify="center" alignItems="center">
						<Grid item>
							<Typography variant="h3">{thisGuide.title}</Typography>
						</Grid>
						<Grid item xs={12}>
							<iframe title={thisGuide.title} src={thisGuide.slideURL} frameborder="0" width={this.state.width} height={this.state.height} allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
						</Grid>
						{ thisGuide.extraLinks && thisGuide.extraLinks.length ? (
							<Grid item xs={12}>
								<Typography variant="h4">Additional Links:</Typography>
								<ul>
									{thisGuide.extraLinks.map(link =>(
										<li>
											<Typography variant="h5">
												<a href={link.url} rel="noopener noreferrer" target="_blank">{link.name}</a>
											</Typography>
										</li>
										))}
								</ul>
							</Grid>
							) : null }

					</Grid>
				</Paper>
			</div>
		);
	}
}

export default GuidePage;