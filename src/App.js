import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import PostJobsHome from "./components/post-jobs/PostJobsHome";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import JobsForm from "./components/post-jobs/JobsForm";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>

                <Route exact path='/' component={Home}/>
                <Route path='/post-jobs' component={PostJobsHome}/>
                <Route path='/post-jobs-form' component={JobsForm}/>
            </Switch>
        </BrowserRouter>




    );
}

export default App;
