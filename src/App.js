import React, { useState, useCallback } from 'react';
import AppRouter from './appRouter';
import AppDrawer from "./components/drawer"
import { useNavigate } from "react-router-dom";

const getToken = () => {
  return localStorage.getItem('token')
}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());
  const navigate = useNavigate();

  const signOut = useCallback(() => {
    localStorage.clear()
    navigate("/");
    setIsLoggedIn(false)
  }, [])

  return (
    <AppDrawer isLoggedIn={isLoggedIn} signOut={signOut} >
      <AppRouter isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </AppDrawer>
  );
}

export default App;
