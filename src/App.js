import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import PostJobsHome from "./components/post-jobs/PostJobsHome";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import JobsForm from "./components/post-jobs/JobsForm";
import {ToastContainer} from "react-toastify";
import FullTimeJobs from "./components/post-jobs/full-time-jobs/FullTimeJobs";
import JobDetails from "./components/post-jobs/JobDetails";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="text-center">
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable
                    pauseOnHover={false}
                />

            </div>
            <Switch>

                <Route exact path='/' component={Home}/>
                <Route exact path='/post-jobs' component={PostJobsHome}/>
                <Route path='/post-jobs/full-time/cards' component={FullTimeJobs}/>
                <Route path='/post-jobs/:jobType/:id' component={JobDetails}/>
                <Route path='/post-jobs-form' component={JobsForm}/>
            </Switch>
        </BrowserRouter>


    );
}

export default App;
