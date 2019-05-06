import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import RAJ from './RAJ.jpg';
import john from './john.jpg';
import Lori from './Lori.jpg';
import sireesha from './sireesha.jpg';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class about extends React.Component {
    render(){

    return (
      <div style={{textAlign: 'center'}}>
      <div> 
      <Card style={{ padding: 10, margin: "auto", maxWidth: 950 }}>
        <CardContent>

      <Grid container spacing={24}>
        <Grid item xs={3}>
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    // style={{ width: '200px', height: '470px'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{backgroundColor: '#FFFFFF', width: '200px', height: '300px' }}
    >
    <img src={john} height={'175px'} width={'170px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
           <Typography  variant="h8" align="center">
              <b>John Piazza</b>
            </Typography>
            <Typography  variant="h8" align="center">
            VP-Product Development
            </Typography>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#FFFFFF',width: '200px', height: '440px',overflow: 'hidden'}}>
      <Typography  variant="h8" align="center">
              <b>John Piazza</b>
            </Typography>
            <Typography fontStyle="italic" variant="h9" align="center">
              <b>VP-Product Development</b>
            </Typography>
            <br/>
            AutoPay Development Leader leading awesome teams of very talented people both in the US and India to ensure the AutoPay system remains up-to-date, compliant, and resilient. Areas of responsibility include the Edit, Net/Calc, Statutory, PTCS, Custom Majors, EMP Utilities, and BI Teams.
    </BackSide>
  </Flippy>
  </Grid>
  <Grid item xs={3}>
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '200px', height: '470px'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{backgroundColor: '#FFFFFF', width: '200px', height: '300px' }}
    >
    <img src={Lori} height={'175px'} width={'170px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
           <Typography  variant="h8" align="center">
              <b>Lori Colelli</b>
            </Typography>
            <Typography  variant="h8" align="center">
            VP-Product Development
            </Typography>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#FFFFFF',width: '200px', height: '440px',overflow: 'hidden'}}>
      <Typography  variant="h8" align="center">
              <b>Lori Colelli</b>
            </Typography>
            <Typography fontStyle="italic" variant="h9" align="center">
              <b>VP-Product Development</b>
            </Typography>
            <br/>
            AutoPay Development Leader leading awesome teams of very talented people both in the US and India to ensure the AutoPay system remains up-to-date, compliant, and resilient. Areas of responsibility include the Edit, Net/Calc, Statutory, PTCS, Custom Majors, EMP Utilities, and BI Teams.
    </BackSide>
  </Flippy>
  </Grid>
  <Grid item xs={3}>
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '200px', height: '470px'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{backgroundColor: '#FFFFFF', width: '200px', height: '300px' }}
    >
    <img src={sireesha} height={'175px'} width={'170px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
           <Typography  variant="h8" align="center">
              <b>SIREESHA S</b>
            </Typography>
            <Typography  variant="h8" align="center">
            VP-Product Development
            </Typography>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#FFFFFF',width: '200px', height: '440px',overflow: 'hidden'}}>
      <Typography  variant="h8" align="center">
              <b>SIREESHA S</b>
            </Typography>
            <Typography fontStyle="italic" variant="h9" align="center">
              <b>VP-Product Development</b>
            </Typography>
            <br/>
            AutoPay Development Leader leading awesome teams of very talented people both in the US and India to ensure the AutoPay system remains up-to-date, compliant, and resilient. Areas of responsibility include the Edit, Net/Calc, Statutory, PTCS, Custom Majors, EMP Utilities, and BI Teams.
    </BackSide>
  </Flippy>
  </Grid>
  
  <Grid item xs={3}>
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '200px', height: '470px'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{backgroundColor: '#FFFFFF', width: '200px', height: '300px' }}
    >
    <img src={RAJ} height={'175px'} width={'170px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
           <Typography  variant="h8" align="center">
              <b>Rajeshwar Akella</b>
            </Typography>
            <Typography  variant="h8" align="center">
            Developer
            </Typography>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#FFFFFF',width: '200px', height: '440px',overflow: 'hidden'}}>
      <Typography  variant="h8" align="center">
              <b>Rajeshwar Akella</b>
            </Typography>
            <Typography fontStyle="italic" variant="h9" align="center">
              <b>Developer</b>
            </Typography>
            <br/>
            AutoPay Development Leader leading awesome teams of very talented people both in the US and India to ensure the AutoPay system remains up-to-date, compliant, and resilient. Areas of responsibility include the Edit, Net/Calc, Statutory, PTCS, Custom Majors, EMP Utilities, and BI Teams.
    </BackSide>
  </Flippy>
  </Grid>
  
  </Grid>

    </CardContent>
    </Card>
    </div>
    
    </div>
 );
}
}
    
about.propTypes = {
  classes: PropTypes.object.isRequired,
};
