import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import PostJobsHome from "./components/post-jobs/PostJobsHome";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>

                <Route exact path='/' component={Home}/>
                <Route path='/post-jobs' component={PostJobsHome}/>
            </Switch>
        </BrowserRouter>




    );
}

export default App;
