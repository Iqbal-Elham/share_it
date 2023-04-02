import React, { useState, useRef, useEffect } from 'react';
import { HiMenuAlit4 } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Routes, Route } from 'react-router-dom';
import { SideBar, useProfile } from '../components';
import { client } from '../client';
import logo from '../assets/logo.png';
import Pins from './Pins';


const Home = () => {
    return (
        <div>
            hello Home
        </div>
    );
}

export default Home;
