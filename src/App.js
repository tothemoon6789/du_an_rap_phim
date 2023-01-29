import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
// import renderRoute from './routes';

// ! Home
import HomeTemplate from './pages/HomeTemplate/HomeTemplate';
import HomePage from './pages/HomeTemplate/HomePage/HomePage';
import DetailPage from './pages/HomeTemplate/DetailPage/DetailPage';
import BookingPage from './pages/HomeTemplate/BookingPage/BookingPage';
import CommingSoonPage from './pages/HomeTemplate/CommingSoonPage/CommingSoonPage';
import ShowingPage from './pages/HomeTemplate/ShowingPage/ShowingPage';
import LoginPage from './pages/HomeTemplate/LoginPage/LoginPage';
import SingIngPage from './pages/HomeTemplate/SignInPage/SignInPage';

//! Admin
import AdminTemplate from './pages/AdminTemplate/AdminTemplate';
import DashboardPage from './pages/AdminTemplate/DashboardPage/DashboardPage';
import UserPage from './pages/AdminTemplate/UserPage/UserPage';
import ManageFilmPage from './pages/AdminTemplate/ManageFilmPage/ManageFilmPage';
import AddNewPage from './pages/AdminTemplate/AddNewPage/AddNewPage';
import ShowTimesPage from './pages/AdminTemplate/ShowTimesPage/ShowTimesPage';
import AddNewUserPage from './pages/AdminTemplate/AddNewUserPage/AddNewUserPage';

// ! User
import UserTemplate from './pages/UserTemplate/UserTemplate';

// import renderRoute from './routes';
// import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<HomePage />}></Route>
          <Route path='detail' element={<DetailPage />}></Route>
          <Route path='booking' element={<BookingPage />}></Route>
          <Route path='showing' element={<ShowingPage />}></Route>
          <Route path='comming-soon' element={<CommingSoonPage />}></Route>
          <Route path='login' element={<LoginPage />}>
            {/* <Route path='user' element={<UserTemplate/>} ></Route> */}
          </Route>
          <Route path='sign-in' element={<SingIngPage />}></Route>
          <Route path='*' element={<HomePage />}></Route>

        </Route>
        <Route path='admin' element={<AdminTemplate />}>

          <Route index element={<DashboardPage />}></Route>
          <Route path='manage-user' element={<UserPage />}></Route>
          <Route path='film' element={<ManageFilmPage />}></Route>
          <Route path='addnew' element={<AddNewPage />}></Route>
          <Route path='show-time' element={<ShowTimesPage />}></Route>
          <Route path='add-new-user' element={<AddNewUserPage />}></Route>
        </Route>
        <Route path='user'>
          <Route index element={<UserTemplate />}></Route>
        </Route>
       
       {/* {this.renderRoute()} */}
      </Routes>

    </BrowserRouter>

    
    // <BrowserRouter>
    // <Suspense fallback={<div className='d-flex justify-content-center'><div className='loader'></div></div>}>
    //   <Routes>
    // {renderRoute()}
    //   </Routes>
    // </Suspense>
    // </BrowserRouter>
  );
}

export default App;
