import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Link, Route, Routes, useRouteMatch
} from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import logo from '../../../images/logo.png';
import AddProduct from '../AddProduct/AddProduct';
import BookingDash from '../BookingDash/BookingDash';
import GetReview from '../GetReview/GetReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyBooking from '../MyBooking/MyBooking';
import Pay from '../Pay/Pay';
import './Dashboard.css';

const drawerWidth = 200;

function Dashboard(props) {
  const { users,logOut } = useFirebase();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const [admin, setAdmin] = useState({});

  
  useEffect(() => {
    fetch('https://obscure-sierra-48545.herokuapp.com/admins')
      .then(res => res.json())
      .then(data => {
        data.forEach(admin => {
          if (admin.email === users.email) {
            setAdmin(admin)
          }
        })
      });
  }, [users.email]);

console.log(admin);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img className="img-fluid logo w-100" src={logo} alt="" />
      </Toolbar>
      <Divider />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!admin.email && <li>
          <Link to={`${url}/myBooking`}>My Booking</Link>
        </li>}
        {!admin.email && <li>
          <Link to={`${url}/pay`}>Pay</Link>
        </li>}
        {!admin.email &&   <li>
          <Link to={`${url}/getReview`}>Give A Review</Link>
        </li>}
        {admin.email &&<li>
          <Link to={`${url}/allBooking`}>Manage All Booking</Link>
        </li>}
        {admin.email &&<li>
          <Link to={`${url}/addProduct`}>Add Product</Link>
        </li>}
        {admin.email &&<li>
          <Link to={`${url}/manageProduct`}>Manage Product</Link>
        </li>}
        {admin.email && <li>
          <Link to={`${url}/makeAdmin`}>Make Admin</Link>
        </li>}
      </ul>
      <Button
        sx={{ width: 1 }}
        onClick={logOut}
        variant="contained"
        className="login-btn"
      >
        LogOut
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#D8E8EB',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="text-black" variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route exact path={path} element={<MyBooking/>}/>
          <Route path={`${path}/myBooking`} element={<MyBooking/>}/>
          <Route path={`${path}/pay`} element={<Pay />}/>
          <Route path={`${path}/addProduct`} element={<AddProduct />}/>
          <Route path={`${path}/allBooking`} element={<BookingDash />}/>
          <Route path={`${path}/getReview`} element={<GetReview />}/>
          <Route path={`${path}/makeAdmin`} element={ <MakeAdmin/>}/>
          <Route path={`${path}/manageProduct`} element={<ManageProduct/>}/>
        </Routes>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
