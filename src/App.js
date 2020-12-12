import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import JobsForm from "./components/post-jobs/JobsForm";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>

                <Route exact path='/' component={Home}/>
                <Route path='/post-jobs' component={JobsForm}/>
            </Switch>
        </BrowserRouter>




    );
}

export default App;
