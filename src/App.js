import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import renderRoute from './routes';
import { Suspense } from 'react';

function App() {
  return (
    <h1>HELLO WOLRD BA CON NGHEN</h1>
    
    // <Suspense fallback={<div className='d-flex justify-content-center'><div className='loader'></div></div>}>
    // <BrowserRouter>
    //   <Routes>
    //     {renderRoute()}
    //   </Routes>
    // </BrowserRouter>
    // </Suspense>
  );
}

export default App;
