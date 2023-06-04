import React from 'react';
import { Link } from 'react-router-dom';


function NotFoundPage() {
    return (
        <div>
            <img src='/404.jpg' alt="404 Not Found" />
            <Link to="/">Return to Home Page</Link>
        </div>
    );
}

export default NotFoundPage;
