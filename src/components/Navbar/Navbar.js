/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Navbar.module.css'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#ffffff',
    color:"#000000",
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-around",
    alignItems:"center",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    paddingTop:"10vh",
  },
  drawerMain: {
      paddingTop: "10vh"
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <div>
            <h1>LOGO</h1>
        </div>
        <div className={styles.navigation}>
            <ul>
                <li><a href="#"><i class="fa fa-handshake"></i><span>Services</span></a></li>
                <li><a href="#"><i class="fa fa-user"></i><span>About</span></a></li>
                <li><a href="#"><i class="fa fa-book"></i><span>Search</span></a></li>
                <li><a href="#"><i class="fa fa-rss"></i> <span>FeedBack &amp; Support</span></a></li>
            </ul>
        </div>
        <div>
            <NotificationsIcon />
            <Button variant="outlined">My Account</Button>

            <Button variant="container " style={{color:"white" ,marginLeft:"1vw", backgroundColor:"black"}}>LogOut</Button>
        </div>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          
          <Divider />
          <List>
            
          </List>
        </div>
      </Drawer>
      <main className={classes.drawerMain}>
        <Toolbar />
        <h1>Main Content</h1>
      </main>
    </div>
  );
}
