import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Shared/Footer';
import Header from '../component/Shared/Header';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <>
          <Header></Header>
          <ToastContainer />
          <Outlet></Outlet>
          <Footer></Footer>  
        </>
    );
};

export default Root;