import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import UserHome from './user-home';
import TestTTS from './test-tts';

const UserRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<UserHome />} />
            <Route exact path="test-tts" element={<TestTTS />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    )
}


export default UserRouter;
