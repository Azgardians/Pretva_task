/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Navbar.module.css'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import MailIcon from '@material-ui/icons/Mail';
import StarRateIcon from '@material-ui/icons/StarRate';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ListItemText from '@material-ui/core/ListItemText';
import { Route, NavLink, Switch } from 'react-router-dom';
import About from '../About/About'
import Product from '../Product/Product'
import Rating from '../Rating/Rating'
import SettingsIcon from '@material-ui/icons/Settings';


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
    width: "30vw",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "30vw",
  },
  drawerContainer: {
    overflow: 'auto',
    paddingTop:"14vh",
    [theme.breakpoints.up('md')]: {
      paddingTop:"10vh",
    }
  },
  drawerMain: { 
    paddingTop:"14vh",
    [theme.breakpoints.up('md')]: {
      paddingTop:"10vh",
    }
  },
  RightNav: {
    display: "flex",
    marginTop:"3vh",
    flexDirection:"column",
    [theme.breakpoints.up('md')]: {
      flexDirection:"row",
    }
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <div>
            <h1> PRETVA LOGO</h1>
        </div>
        <div className={styles.navigation}>
            <ul>
                <li><a href="#"><i class="fa fa-handshake"></i><span>Services</span></a></li>
                <li><a href="#"><i class="fa fa-user"></i><span>About</span></a></li>
                <li><a href="#"><i class="fa fa-book"></i><span>Search</span></a></li>
                <li><a href="#"><i class="fa fa-rss"></i> <span>FeedBack &amp; Support</span></a></li>
            </ul>
        </div>
        <div className={classes.RightNav}>
            <NotificationsIcon fontSize="large" />
            <Button variant="outlined" style={{marginBottom:"3vw"}}>My Account</Button>

            <Button variant="container " style={{color:"white" ,margin:"0vw 0vw 3vw 1vw", backgroundColor:"black"}}>LogOut</Button>
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
          <div style={{marginLeft:"1vw" , textAlign:"center"}}>
            <PersonOutlineRoundedIcon style={{fontSize:"150px" , color:"#000000"}} />
            <h1><strong>Rohit Gupta</strong></h1>
            <p style={{marginBottom:"4vh", marginTop:"0vh" }}>Supplier, Sahara Fabrics Pvt. Ltd.</p>
            <p style={{marginBottom:"4vh"}}>Company GSTIN - 123456789012345</p>
          </div>
          <List component="nav" style={{marginLeft:"4vw"}}>
            <ListItem>
              <LocationOnIcon />
              <ListItemText primary="New Delhi , India" />
            </ListItem>
            <ListItem>
              <StarRateIcon style={{color:"#ffef00"}} />
              <ListItemText primary="4.5 (209)" />
            </ListItem>
            <ListItem>
              <MailIcon />
              <ListItemText primary="rohit.gupta@gmail.com" />
            </ListItem>
          </List>
          <div>
            <Divider />
            <p style={{marginLeft:"5vw"}} >Company Profile</p>
            <Divider />
            <p style={{marginLeft:"5vw"}} >Deal Requests & Wishlists</p>
            <Divider />
            <p style={{marginLeft:"5vw"}} >Clients & Payments</p>
            <Divider />
            <Divider />
            <p style={{marginLeft:"5vw"}} >Chat history</p>
            <Divider />
            <Divider />
          </div>
          <div style={{backgroundColor:"lightblue", textAlign:"center", height:"8vh" }}>
            <hr/>
              <h2><SettingsIcon/><strong>Edit Profile</strong></h2>
            <hr/>
          </div>
          <div style={{backgroundColor:"#fff44f", textAlign:"center", height:"6vh" }}>
            <hr/>
              <p>Wish to buy products?<u style={{color:"blue"}}>Click Here</u></p>
            <hr/>
          </div>
        </div>
      </Drawer>
      <main className={classes.drawerMain}>
        <Toolbar />
        <AppBar position="static" style={{backgroundColor:"#ffffff", color:"black" , boxShadow:"none" }}>
          <div className={styles.navigation}>
              <ul>
                  <li><NavLink
                      to="/about/"
                      exact
                      activeStyle={{color:"#e74c3c"}}
                      >About the Company</NavLink></li>
                  <li><NavLink
                      to="/product/"
                      exact
                      activeStyle={{color:"#e74c3c"}}
                      >Product Gallery</NavLink></li>
                  <li><NavLink
                      to="/rating/"
                      exact
                      activeStyle={{color:"#e74c3c"}}
                      >Rating &amp; Reviews</NavLink></li>
              </ul>
          </div>
      </AppBar>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/rating" component={Rating} />
      </Switch>
      </main>      
    </div>
  );
}
