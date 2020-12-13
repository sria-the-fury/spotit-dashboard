import React from 'react';
import {BsPencilSquare} from "react-icons/all";
import "../../css/post-jobs-home.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import _ from "lodash";
import {Spinner} from "react-bootstrap";

const PostJobsHome = (props) => {
    const {allJobs} = props;

    const findFullTimeJobs = allJobs ?  _.find(allJobs, {
        "jobType" : "1"
    }) : '';

    const findInternshipJobs = allJobs ? _.find(allJobs, {
        "jobType" : "3"
    }) : '';

    const findPartTimeJobs = allJobs ? _.find(allJobs, {
        "jobType" : "2"
    }) : '';

    const countFullTimePostedJobs = allJobs ? _.filter(allJobs, {
        "jobType" : "1"
    }) : '' ;

    const countPartTimePostedJobs = allJobs ? _.filter(allJobs, {
        "jobType" : "2"
    }) : '' ;

    const countInternshipPostedJobs = allJobs ? _.filter(allJobs, {
        "jobType" : "3"
    }) : '' ;

    console.log("allJobs=>", findFullTimeJobs);
    console.log("countFullTimePostedJobs=>", countFullTimePostedJobs.length);
    console.log("countInternshipPostedJobs=>", countInternshipPostedJobs.length);


    if(allJobs){return (
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

                        {
                            countFullTimePostedJobs.length > 0 ?
                                <div className='text-center'>
                                    <h5 className='font-weight-bold'>You have posted : {countFullTimePostedJobs.length} jobs</h5>
                                </div> :
                                <div className='text-center'>
                                    <h5 className='font-weight-bold'>You don't give any post yet</h5>
                                </div>

                        }


                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="jobs-card text-white card-hover">
                        <div className="job-type">
                            <h4 className='font-weight-bold text-center text-uppercase'>Part Time</h4>
                        </div>
                        {
                            countPartTimePostedJobs.length > 0 ?
                                <div className='text-center'>
                                    <h5 className='font-weight-bold'>You have posted : {countPartTimePostedJobs.length} jobs</h5>
                                </div> :
                                <div className='text-center'>
                                    <h5 className='font-weight-bold'>You don't give any post yet</h5>
                                </div>

                        }



                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="jobs-card text-white card-hover">
                        <div className="job-type">
                            <h4 className='font-weight-bold text-center text-uppercase'>Internship</h4>
                        </div>
                        {
                            countInternshipPostedJobs.length > 0 ?
                                <div className='text-center'>
                                    <h5 className='font-weight-bold'>You have posted : {countInternshipPostedJobs.length} jobs</h5>
                                </div> :
                                <div className='text-center'>
                                    <h5 className='font-weight-bold'>You don't give any post yet</h5>
                                </div>

                        }

                    </div>
                </div>
            </div>

        </div>

    );}

    else {
        return (
            <div className='spinner-custom'>
                <Spinner animation="border" role="status" variant="success" >
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const jobs = state.firestore.ordered.jobs;
    return{
        allJobs: jobs

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect( [
        {
            collection: 'jobs',
            orderBy: ["date", "desc"]

        }
    ])) (PostJobsHome);