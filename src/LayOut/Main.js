import React from 'react';
import { Outlet } from 'react-router-dom';



const Main = () => {
    return (
        <div>
          {/* <Navbar/> */}
          <Outlet/>
          {/* <Footer/>   */}
        </div>
    );
};

export default Main;