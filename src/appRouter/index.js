import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import HomePage from './home';
import SignUpPage from './sign-up';
import SignInPage from './sign-in';
import UserRouter from './userRouter'
import NotFound404 from './404NotFound'

const PrivateRoute = ({ isLoggedIn }) =>
    isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />;

const AppRouter = (props) =>
    <Routes>
        <Route exact path="/" element={props.isLoggedIn ? <Navigate to="/user" /> : <HomePage {...props} />} />
        <Route path="/sign-up" element={props.isLoggedIn ? <Navigate to="/user" /> : <SignUpPage {...props} />} />
        <Route path="/sign-in" element={props.isLoggedIn ? <Navigate to="/user" /> : <SignInPage {...props} />} />
        <Route path='/user' element={<PrivateRoute {...props} />}>
            <Route exact path="/user/" element={<Navigate to="/user/test-tts" />} />
            <Route path='/user/*' element={<UserRouter {...props} />} />
        </Route>
        <Route path="/*" element={<NotFound404 />} />
    </Routes>


export default AppRouter;
