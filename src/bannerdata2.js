import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import wedo from './wedo.png';
import talent from './talent.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export class bannerdata2 extends React.Component {
    render(){

    return (
      <div style={{textAlign: 'center'}}>
      <div> 
      <Grid container spacing={24}>
      <Grid item xs={4}>
                    </Grid>
            <Grid item xs={4}>
        <Typography  variant="h5" align="center">
             
            </Typography>
            </Grid>
            <Grid item xs={4}>
                   </Grid>
   </Grid>
   <br/>
      <Card style={{ padding: 10, margin: "auto", maxWidth: 1500 }}>
        <CardContent>
      <Grid container spacing={24} height={'300px'}>
        <Grid item xs={3}>
       <img src={talent} height={'300px'} width={'320px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
  </Grid>
  <Grid item xs={1}>
  </Grid>
  <Grid item xs={8} width={'100px'}>
  <Typography  variant="h8" align="left">
  <br/>
<br/>
<br/>     
  We Wear Many Hats, We perform Many Roles A Business Analyst, A Developer, A Quality Analyst, A Scrum Master, A Product Owner and many more.
We all do everything. This has been possible with the Onboarding Plan and Immense Knowledge Repository we have created over a period of years. We believe Knowledge and Talent is what makes our Team what we are today.

<br/>
<br/>
<br/>

            </Typography>
            <br/>
           
        
  </Grid>
  </Grid>
  
    </CardContent>
    </Card>
    </div>
    
    </div>
 );
}
}
    
bannerdata2.propTypes = {
  classes: PropTypes.object.isRequired,
};
