import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../logo.png'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {TabPanel} from './Layout'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 100,
  },
}));

export default function ButtonAppBar({handleLogout,handleSideBar}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root} >
      <AppBar position="static" style={{ backgroundColor: '#e6e6e6', color: 'black'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleSideBar}>
            <MenuIcon />
          </IconButton>
          <Toolbar>
            <img src={Logo} alt="logo" className={classes.logo} />
          </Toolbar>
          <Typography variant="body" className={classes.title}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Daily Schedule" {...a11yProps(0)} />
            <Tab label="Learning Materials" {...a11yProps(1)} />
            <Tab label=" Assignment" {...a11yProps(2)} />
          </Tabs>
          </Typography>

          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <Avatar alt="" src="" />
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>

      <TabPanel value={value} index={0}>
          Daily Schedule
      </TabPanel>
      <TabPanel value={value} index={1}>
          Learning Materials
      </TabPanel>
      <TabPanel value={value} index={2}>
          Assignment
      </TabPanel>

    </div>
  );
}