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
import "react-alice-carousel/lib/alice-carousel.css";
import Banner1 from './Banner1.png';
import Banner2 from './Banner2.jpg';
import Banner3 from './Banner3.jpg';
import {Filemanager} from './Filemanager'

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
    title: 'Work Flow',
    description: ['Request Lifecyle', 'Defect Lifecycle', 'What we Do'],
    buttonText: 'Know more',
    buttonVariant: 'outlined',
    link: "/workflow"
  },
  {
    title: 'Important Links',
    subheader: '    ',
    description: ['Track your Request', 'Request a Custom', 'Raise a Defect'],
    buttonText: 'Know More',
    buttonVariant: 'contained',
    buttonColor: '#2a6171',
    textColor: "#FFFFFF",
  },
  {
    title: 'Request Status',
    description: ['Requests in Progress', 'Requests in Backlog', 'Blocked Requests'],
    buttonText: 'Know More',
    buttonVariant: 'outlined',
  },
];

export class Home extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <div style={{ textAlign: "center"}}>
        <main className={classes.layout}>

          <AliceCarousel fadeOutAnimation={true} autoPlay={true} autoPlayInterval={4500} stopAutoPlayOnHover={true}
            infinite={true} buttonsDisabled={true}>
            <img src={Banner1} alt={' '} width='1000' height='250'/>
            <img src={Banner2} alt={' '} width='1000' height='250'/>
            <img src={Banner3} alt={' '} width='1000' height='250'/>
            </AliceCarousel>

          <div style={{paddingRight: 140, paddingLeft: 140, margin: 'auto', align: 'center',marginTop: 25 }}>
            {/* End hero unit */}
            <Grid container spacing={40} alignItems="flex-end">
              {tiers.map(tier => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                  {/* <Link to={tier.link} style={{textDecoration: "none"}}> */}
                  {/* <Card className="hoverable"> */}
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
                        <Card className="hoverable">
                        <Typography variant="subtitle1" align="center" key={line}>
                          {line}
                        </Typography>
                        </Card>
                        </Link>
                      ))}
                    </CardContent>
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