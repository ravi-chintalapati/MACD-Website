import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core/styles';

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
      width: 900,
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
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const tiers = [
  {
    title: 'Work Flow',
    description: ['Request Lifecyle', 'Defect Lifecycle', 'What we Do'],
    buttonText: 'Know more',
    buttonVariant: 'outlined',
  },
  {
    title: 'Custom Calendar',
    subheader: 'Deployment Schedules',
    description: ['Black Out Dates', 'Payroll Release Dates', 'Holidays'],
    buttonText: 'Know More',
    buttonVariant: 'contained',
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
                <div style={{ textAlign: "center" }}>
                <main className={classes.layout}>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                        <Typography variant="h6" align="center" color="textSecondary" component="p">
                            Quickly build an effective pricing table for your potential customers with this layout.
                            It&apos;s built with default Material-UI components with little customization.
                        </Typography>
                    </div>
                    <div style={{margin: 'auto', align: 'center'}}>
                    {/* End hero unit */}
                    <Grid container spacing={40} alignItems="flex-end">
                        {tiers.map(tier => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                                <Card>
                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{ align: 'center' }}
                                        subheaderTypographyProps={{ align: 'center' }}
                                        action={tier.title === 'Pro' ? <StarIcon /> : null}
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        {tier.description.map(line => (
                                            <Typography variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </CardContent>
                                    <CardActions className={classes.cardActions}>
                                        <Button fullWidth variant={tier.buttonVariant}>
                                            {tier.buttonText}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    </div>
                </main>

                <Typography style={{ marginTop: 50 }} variant='p' align="center">
                    For questions or comments about this site<br />
                    contact <a href="mailto:rajeshwar.akella@adp.com?Subject=Website%20Feedback" target="_top">Custom Majors</a>
                </Typography>
            </div>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Home);