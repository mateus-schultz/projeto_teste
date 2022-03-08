
import { Routes, Route } from "react-router-dom";

import Home from '../pages';

const RoutesWrapper = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<h1>Olá</h1>} />
        </Routes>
    )
};

export default RoutesWrapper;
