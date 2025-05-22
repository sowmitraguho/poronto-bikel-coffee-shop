import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';

const MainLayouts = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default MainLayouts;