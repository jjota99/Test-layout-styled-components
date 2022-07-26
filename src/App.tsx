import React from 'react';
import { Template } from "./components/template";
import { Graphic } from "./components/graphic";

import {BrowserRouter, Route, Routes} from "react-router-dom";

export interface ApplicationProps {}

const App: React.FunctionComponent<ApplicationProps> = (props) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Template />}/>
            <Route path="/analytics" element={<Graphic />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
