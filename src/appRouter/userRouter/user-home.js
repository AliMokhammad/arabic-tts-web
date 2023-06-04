import React from 'react';
import { Link } from 'react-router-dom';

function UserHomePage({ user }) {
    return (
        <div>
            <h1>Welcome, {user?.name}!</h1>
            <p>Here's some content just for you.</p>
            <Link to="/user/test-tts">Test TTS</Link>
        </div>
    );
}

export default UserHomePage;
