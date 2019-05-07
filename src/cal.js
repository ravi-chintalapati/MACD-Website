import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import May from './May 2019.jpg';
import May2 from './May 20192.jpg';
import June from './June 2019.jpg';
import June2 from './June 20192.jpg';
import July from './July 2019.jpg';
import Aug from './August 2019.jpg';
import Sep from './Sept 2019.jpg';
import Oct from './Oct 2019.jpg';
import Nov from './Nov 2019.jpg';
import Nov2 from './Nov 20192.jpg';
import Dec from './Dec 2019.jpg';
import Dec2 from './Dec 20192.jpg';
import Log from './Log.jpg';
import {Card, CardContent } from '@material-ui/core';

export class cal extends React.Component {
    render(){

    return (
      <div>
      <div style={{alignContent: "center"}}> 
      <Grid container spacing={35}>
      <Grid item xs={3}>
                    </Grid>
            <Grid item xs={6} color="2962ff">
        <Typography  variant="h8" align="center" color="#0000FF">
              {/* <b>Custom Majors Monthly Calendar for Patches & Releases</b> */}
             <b> CUSTOM MAJORS MONTHLY CALENDAR FOR PATCHES & RELEASES</b>
            </Typography>
            
            </Grid>
            <Grid item xs={3}>
                   </Grid>
   </Grid>
   
   <Grid container spacing={24} style={{marginTop: 15}}>
                         
            <Grid item xs={8}>
            <Card>
     <CardContent>
        <Typography  variant="h8" align="center" height={'75px'} width={'370px'}>
              All Patches sent on Monday, Tuesday will reflect in Regions on Wednesday All Patches Sent on Wednesday, Thursday, Friday will reflect in Regions on following Monday
            
            </Typography>
            
            </CardContent>
            </Card> 
            
            </Grid>
          
            <Grid item xs={4}>
          <img src={Log} height={'90px'} width={'370px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />   
         </Grid>
   </Grid>
   <br/>
   <Card style={{alignContent: "center"}} >
     <CardContent>
     <Grid container spacing={24}>
        <Grid item xs={4}>
        <img src={May} height={'300px'} width={'350px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /> 
  </Grid>
  
        <Grid item xs={4}>
        <img src={June} height={'300px'} width={'350px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /> 
  </Grid>
  <Grid item xs={4}>
        <img src={July} height={'300px'} width={'350px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /> 
  </Grid>
  </Grid> 
  <Grid container spacing={24}>
        <Grid item xs={4}>
        <img src={May2} height={'55px'} width={'350px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /> 
  </Grid>
  
        <Grid item xs={4}>
        <img src={June2} height={'55px'} width={'350px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /> 
  </Grid>
  <Grid item xs={4}>
        
  </Grid>
  </Grid>
   <Grid container spacing={24}>
        <Grid item xs={4}>
        <img src={Aug} height={'298px'} width={'350px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /> 
  </Grid>
  
        <Grid item xs={4}>
        <img src={Sep} height={'340px'} width={'350px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /> 
  </Grid>
  <Grid item xs={4}>
        <img src={Oct} height={'337px'} width={'350px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /> 
  </Grid>
  </Grid> 
   <Grid container spacing={24}>
        <Grid item xs={4}>
        <img src={Nov} height={'300px'} width={'350px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /> 
  </Grid>
  
        <Grid item xs={4}>
        <img src={Dec} height={'300px'} width={'350px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /> 
  </Grid>
  <Grid item xs={4}>
  {/* <img src={""} height={'400px'} width={'370px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />  */}
  </Grid>
  </Grid> 
  <Grid container spacing={24}>
        <Grid item xs={4}>
        <img src={Nov2} height={'95px'} width={'350px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /> 
  </Grid>
  
        <Grid item xs={4}>
        <img src={Dec2} height={'95px'} width={'350px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />  
  </Grid>
  <Grid item xs={4}>
  {/* <img src={""} height={'400px'} width={'370px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />  */}
  </Grid>
  </Grid>
  </CardContent>
   </Card>

   
    </div>
    
    </div>
);
}
}
    
cal.propTypes = {
  classes: PropTypes.object.isRequired,
};
