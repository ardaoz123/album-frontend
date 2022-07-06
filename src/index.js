import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import AlbumOverview from "./components/AlbumOverview";
import AlbumCard from './components/AlbumCard';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import {
    CardActionArea,
    Card,
} from '@material-ui/core';




ReactDOM.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="AlbumOverview" element={<AlbumOverview />} />
                <Route path="AlbumCard" element={<AlbumCard/>} />
            </Routes>
        </BrowserRouter>
    ,document.getElementById('root')
);