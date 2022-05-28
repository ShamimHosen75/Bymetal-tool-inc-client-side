import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './pages/Blog/Blog';
import AddProduct from './pages/Dashboard/AddProduct';
import AddReveiw from './pages/Dashboard/AddReveiw';
import Dashboard from './pages/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageOrders from './pages/Dashboard/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts';
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import Payment from './pages/Dashboard/Payment';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAdmin from './pages/Login/RequireAdmin';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import MyPortofolio from './pages/MyPortofolio/MyPortofolio';
import Purchase from './pages/Purchase/Purchase';
import Navbar from './pages/shared/Navbar';
import NotFound from './pages/shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<RequireAuth><Payment /></RequireAuth>}></Route>
          <Route path='addReveiw' element={<AddReveiw></AddReveiw>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        </Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/myPortofolio" element={<MyPortofolio></MyPortofolio>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
