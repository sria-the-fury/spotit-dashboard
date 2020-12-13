import React from 'react';
import {BsPencilSquare} from "react-icons/all";
import "../../css/post-jobs-home.css";
import {Link} from "react-router-dom";

const PostJobsHome = () => {
    return (
        <div className='container' style={{marginTop: '5em'}}>
            <h3 className='text-uppercase font-weight-bold text-center heading'>Manage Jobs For SPOTiTUSA</h3>
            <hr className='hr-heading'/>

            <div className='row'>
                <div className="col-lg-12">
                    <div className="area-for-post-btn">
                        <Link to="/post-jobs-form" style={{textDecoration: 'none'}}>
                            <span className='app-btn-color text-white post-write-btn'>
                                <span className='post-plus-icon'><BsPencilSquare/></span>
                                <span className='font-weight-bold text-uppercase'>Post Jobs</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <h4 className='text-uppercase font-weight-bold text-center heading' style={{marginTop: '1.2em'}}>The Jobs have been Posted.....</h4>


            <div className='row'>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="jobs-card text-white card-hover">
                        <div className="job-type">
                            <h4 className='font-weight-bold text-center text-uppercase'>Full-Time</h4>
                        </div>
                        <div className='text-center'>
                            <h5 className='font-weight-bold'>You don't give any post yet</h5>
                        </div>
                        <div className='text-center'>
                            <h5 className='font-weight-bold'>You have posted : 3 jobs</h5>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="jobs-card text-white card-hover">
                        <div className="job-type">
                            <h4 className='font-weight-bold text-center text-uppercase'>Part Time</h4>
                        </div>
                        <div className='text-center'>
                            <h5 className='font-weight-bold'>You don't give any post yet</h5>
                        </div>
                        <div className='text-center'>
                            <h5 className='font-weight-bold'>You have posted : 3 jobs</h5>
                        </div>

                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="jobs-card text-white card-hover">
                        <div className="job-type">
                            <h4 className='font-weight-bold text-center text-uppercase'>Internship</h4>
                        </div>
                        <div className='text-center'>
                            <h5 className='font-weight-bold'>You don't give any post yet</h5>
                        </div>
                        <div className='text-center'>
                            <h5 className='font-weight-bold'>You have posted : 3 jobs</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default PostJobsHome;