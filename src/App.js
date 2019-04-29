import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Logo from './logo.png';
import { request } from './custom-request';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import { Album } from './Album';
import { documentation } from './documentation';
import { faq } from './faq';
import { about } from './about';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Slide } from '@material-ui/core';

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

  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },

});

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Pricing extends React.Component {
  state = {
    open: false,
    inboxOpen: false
  }

  componentDidMount() {
    fetch("http://localhost:8888/kishore").then(d => d.text()).then(d => console.log(d));
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <React.Fragment>
          <BrowserRouter>
            <div className={classes.root}>
              <CssBaseline />
              <AppBar position="absolute" color="default"  className={classes.appBar}>
                <Toolbar>
                    <Link style={{ textDecoration: "none" }} to="/home">
                      <img src={Logo} style={{ marginRight: 20 }} height={30} width={70} alt='  ' />
                    </Link>
                    <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
                      Major Accounts Custom Development
                    </Typography>
                    <div className={classes.grow} />
                    <i>Catering to the custom needs of Major Accounts</i>
                </Toolbar>
              </AppBar>
                <AppBar position="static" style={{ backgroundColor: '#2a6171' }}>
                  <Toolbar variant="dense">

                    <Link style={{ textDecoration: "none" }} to="/home">
                      <Button style={{ marginLeft: 30, marginRight: 50, color: "#FFFFFF" }} >Home</Button>
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/submit">
                      <Button style={{ marginRight: 50, color: "#FFFFFF" }} >Request a custom</Button>
                    </Link>

                    <Button style={{ marginRight: 50, color: "#FFFFFF" }} >
                      <a href="http://dpopsweb/Main/CA/CreateRequestNoTabs.aspx?pcat=1319AC4" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: "none" }}>
                        Raise a Defect</a>
                    </Button>

                    <Link style={{ textDecoration: "none" }} to="/documentation">
                      <Button style={{ marginRight: 50, color: "#FFFFFF" }} >Documentation</Button>
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/about">
                      <Button style={{ marginRight: 50, color: "#FFFFFF" }} >About Us</Button>
                    </Link>

                    <Button style={{ marginRight: 50, color: "#FFFFFF" }} onClick={this.handleOpen}>Contact Us</Button>

                    <div className={classes.grow} />

                    <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Search…"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                      />
                    </div>

                  </Toolbar>
                </AppBar>

                <main className={classes.layout}>

                  <main className={classes.content} style={{ marginTop: 20 }}>
                    <Switch>
                      <Route path="/home" component={Home} />
                      <Route path="/submit" component={request} />
                      <Route path="/documentation" component={documentation} />
                      <Route path="/faq" component={faq} />
                      <Route path="/about" component={about} />
                      <Route path="/album" component={Album} />
                      <Route component={Home} />
                    </Switch>
                  </main>

                </main>
                <Dialog
                  open={this.state.open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle id="alert-dialog-slide-title">
                    {"Contact in case of Emergency : "}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      <div>
                        <table>
                          <col width="200" />
                          <col width="200" />
                          <tr>
                            <td>Lori Coleli</td>
                            <td>Sireesha Somayajula</td>
                          </tr>
                          <tr>
                            <td>Senior Director</td>
                            <td>Senior Manager</td>
                          </tr>
                          <tr>
                            <td>NJ, Roseland</td>
                            <td>F9, Hyderabad</td>
                          </tr>
                        </table>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Close
            </Button>
                  </DialogActions>
                </Dialog>

                {/* Footer */}
                <footer className={classNames(classes.footer, classes.layout)}>
                  <Grid style={{ marginLeft: 30 }} container spacing={32} justify="space-evenly">
                    {footers.map(footer => (
                      <Grid item xs key={footer.title}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                          {footer.title}
                        </Typography>
                        {footer.description.map(item => (
                          <Typography key={item} variant="subtitle1" color="textSecondary">
                            {item}
                          </Typography>
                        ))}
                      </Grid>
                    ))}
                  </Grid>
                </footer>
                {/* End footer */}
            </div>
          </BrowserRouter>
        </React.Fragment>
      </MuiPickersUtilsProvider>
        );
      }
    }
    
Pricing.propTypes = {
          classes: PropTypes.object.isRequired,
      };
      
export default withStyles(styles)(Pricing);