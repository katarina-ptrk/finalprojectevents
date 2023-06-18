import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import './nav.css';
import Create from './pages/Create';
import Event from './pages/Event';
import Events from './pages/Events';
import JoinEvent from './pages/JoinEvent';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Preview from './pages/Preview';
import UserPage from './pages/UserPage';




function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}>
        </Route>
        <Route path="/create" element={<Create />}>
        </Route>
        <Route path="/event" element={<Event />}>
        </Route>
        <Route path="/events" element={<Events />}>
        </Route>
        <Route path="/joinevent" element={<JoinEvent />}>
        </Route>
        <Route path="/login" element={<LogIn />}>
        </Route>
        <Route path="/signup" element={<SignUp />}>
        </Route>
        <Route path="/preview" element={<Preview />}>
        </Route>
        <Route path="/userpage" element={<UserPage />}>
        </Route>
      </Routes>
    
    </>
  )
}

export default App
