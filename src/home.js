import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { workFlow } from './workflow';
import { withStyles } from '@material-ui/core/styles';
import AliceCarousel from 'react-alice-carousel';
import responsive from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Banner1 from './Banner1.png';
import Banner2 from './Banner2.jpg';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },

});

const tiers = [
  {
    title: 'What We Do',
    description: ['Customize Payrolls', 'Payroll Features Support', 'Talent Development'],
    link: '/workflow',
  },
  {
    title: 'How We Do',
    subheader: '    ',
    description: ['Request Life Cycle', 'Defect Life Cycle', 'Patch / Release Calendar '],
  },
  {
    title: 'Help Needed',
    description: ['Submit a New Request', 'Submit a Defect', 'Track Your Request'],
  },
];

export class Home extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <div style={{ textAlign: "center"}}>
        <main className={classes.layout}>
        {/* <Link style={{ textDecoration: "none" }} to="/bannerdata"> */}
             <link></link>         
                   
          <AliceCarousel fadeOutAnimation={true} autoPlay={true} autoPlayInterval={3000} stopAutoPlayOnHover={true}
            infinite={true} buttonsDisabled={true}  responsive={responsive}> 
             <Link style={{ textDecoration: "none" }} to="/bannerdata">
            <img src={Banner1} alt={' '} width='1000' height='250' />
            </Link>
            <Link style={{ textDecoration: "none" }} to="/bannerdata2">
            <img src={Banner2} alt={' '} width='1000' height='250'/>
            </Link>
            {/* <Link style={{ textDecoration: "none" }} to="/home">
            <img src={Banner3} alt={' '} width='1000' height='250'/>
            </Link> */}
            
            </AliceCarousel>
            {/* </Link> */}
          <div style={{paddingRight: 140, paddingLeft: 140, margin: 'auto', align: 'center',marginTop: 25 }}>
            {/* End hero unit */}
            <Grid container spacing={40} alignItems="flex-end">
              {tiers.map(tier => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                  
                  <Card className="hoverable">
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{ align: 'center' }}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      {tier.description.map(line => (
                        <Link to={tier.link} style={{textDecoration: "none"}}>
                        <Typography variant="subtitle1" align="center" key={line}>
                          {line}
                        </Typography>
                        </Link>
                      ))}
                    </CardContent>
                    </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>

        {/* <Typography style={{ marginTop: 50 }} variant='p' align="center">
          For questions or comments about this site<br />
          contact <a href="mailto:rajeshwar.akella@adp.com?Subject=Website%20Feedback" target="_top">Custom Majors</a>
        </Typography> */}
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);