import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import OrderDetails from './Components/OrderDetails/OrderDetails';
import Explore from './Components/Pages/Explore/Explore/Explore';
import Home from './Components/Pages/Home/Home/Home';
import Register from './Components/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/orderDetails/:productId" element={
              <PrivateRoute>
                  <OrderDetails></OrderDetails>
              </PrivateRoute>
            }/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/dashBoard" element={
            <PrivateRoute>
                <Dashboard/>
            </PrivateRoute>
            }/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
