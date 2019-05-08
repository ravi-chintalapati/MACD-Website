import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import wedo from './wedo.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export class bannerdata extends React.Component {
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
       <img src={wedo} height={'300px'} width={'320px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
  </Grid>
  <Grid item xs={1}>
  </Grid>
  <Grid item xs={8} width={'100px'}>
  <Typography  variant="h8" align="left">
              
              <br/>
              Custom Majors Team work on Customization of Payrolls for Major Accounts Clients. 
We understand every business can have specific and special needs for Payroll Customization. We work with Regional Teams, Service Representations, Implementation Specialists to understand the requirements and provide Customized Payrolls. We do customization to:
<br/>
1.	Payroll Register to Sort the register by multiple levels 
<br/>
2.	Pay Statements to bring additional details on the standard Pay Check
<br/>
3.	Payroll Calculations suiting the Business Needs
<br/>
<br/>
<br/>
<Link to='sample'>
CLICK HERE FOR CUSTOMISED SAMPLES
</Link>
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
    
bannerdata.propTypes = {
  classes: PropTypes.object.isRequired,
};
