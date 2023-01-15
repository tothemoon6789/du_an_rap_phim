import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerTemplate from './templates/CustomerTemplate';
import Home from './pages/customer/home/Home';
import Detail from './pages/customer/detail/Detail';
import Booking from './pages/customer/booking/Booking';
import AdminTemplate from './templates/AdminTemplate';
import Film from './pages/admin/Film';
import User from './pages/admin/User';
import AddNew from './pages/admin/AddNew';
import AdminHomePage from './pages/admin/AdminHomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<CustomerTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='detail' element={<Detail />}></Route>
          <Route path='booking' element={<Booking />}></Route>
        </Route>
        <Route path='admin' element={<AdminTemplate />}>
          <Route index element={<AdminHomePage />}></Route>
          <Route path='user' element={<User />}></Route>
          <Route path='film' element={<Film />}></Route>
          <Route path='addnew' element={<AddNew />}></Route>
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
