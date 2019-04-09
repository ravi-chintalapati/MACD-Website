import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Home } from './home';
import Button from '@material-ui/core/Button';
import { request } from './custom-request';
import { documentation } from './documentation';
import { faq } from './faq';
import { about } from './about';
import Logo from './logo.png';
import Collapse from '@material-ui/core/Collapse';
import { HomeRounded, Code, FileCopyRounded, QuestionAnswerRounded, ContactSupportRounded, ContactMailRounded } from "@material-ui/icons";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Slide } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ClippedDrawer extends React.Component {
  state = {
    open: false,
    inboxOpen: false
  }

  handleClose = () => {
    this.setState({ open: false });
  }
  handleOpen = () => {
    this.setState({ open: true });
  }
  render() {
    const { classes } = this.props;
    const { inboxOpen } = this.state;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar} style={{ backgroundColor: '#FFFFFF' }}>
            <Toolbar>
              <img src={Logo} style={{ marginRight: 20 }} height={30} width={70} />
              <Typography variant="h5" color="default" noWrap>
                 Major Accounts Custom Development 
              </Typography>
              <Button color="default" onClick={this.handleOpen} style={{ marginLeft: 840 }}>Contact Us</Button>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <List>
              <Link style={{ textDecoration: "none" }} to="/home"><ListItem button>
                <ListItemIcon><HomeRounded /></ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem></Link>

              <Link style={{ textDecoration: "none" }} to="/submit"><ListItem button>
                <ListItemIcon><QuestionAnswerRounded /></ListItemIcon>
                <ListItemText primary={"Submit a Request"} />
              </ListItem></Link>

              <Link style={{ textDecoration: "none" }} to="/documentation"><ListItem button>
                <ListItemIcon><FileCopyRounded /></ListItemIcon>
                <ListItemText primary={"Documentation"} />
              </ListItem></Link>

              <Link style={{ textDecoration: "none" }} to="/faq"><ListItem button>
                <ListItemIcon><ContactSupportRounded /></ListItemIcon>
                <ListItemText primary={"FAQ's"} />
              </ListItem></Link>

            </List>
            <Divider />
            <List>

              <ListItem button onClick={()=>this.setState({inboxOpen: !inboxOpen})}>
                <ListItemIcon><Code /></ListItemIcon>
                <ListItemText primary="Dev Desk" />
                {inboxOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.inboxOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText inset primary="Starred" />
                  </ListItem>
                </List>
              </Collapse>

              <Link style={{ textDecoration: "none" }} to="/about"><ListItem button>
                <ListItemIcon><ContactMailRounded /></ListItemIcon>
                <ListItemText primary={"About Us"} />
              </ListItem></Link>

            </List>
          </Drawer>
          <main className={classes.content} style={{ marginTop: 60 }}>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/submit" component={request} />
                  <Route path="/documentation" component={documentation} />
                  <Route path="/faq" component={faq} />
                  <Route path="/about" component={about} />
                  <Route component={Home} />
                </Switch>

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
                <b>Lori Colelli</b><br /> Senior Director<br /> Roseland, NJ <br /><br />
                <b>Sireesha Somayajula</b><br /> Senior Manager<br /> Hyderabad, India
            </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
            </Button>
            </DialogActions>
          </Dialog>
        </div>
      </BrowserRouter>
      </MuiPickersUtilsProvider>
    );
  }
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);