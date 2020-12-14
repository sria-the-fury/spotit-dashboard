import React from 'react';
import "../../css/job-details.css";
import {FiArrowLeftCircle,BsFillTrashFill,FaPen} from  "react-icons/all";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import _ from "lodash";
import moment from "moment";
import parse from 'html-react-parser';
import {Spinner} from "react-bootstrap";

const JobDetails = (props) => {
    const {match, history, jobs} = props;
    const {jobType, id} = match.params;


    const goBackPrevious = () => {
        history.goBack();

    };

    const findSpecificJobs = jobs ? _.find(jobs, {"id": id, "jobType" : jobType}) : '';

    const getJobTypeText = jobType === '1' ? "Full-Time" : jobType === '2' ? "Part-Time" : "Internship";



    const getDeadLineDate = () => {
        if(findSpecificJobs) {
            let jobDeadLineDate = findSpecificJobs.deadLine.toDate();
            return moment(jobDeadLineDate).format('ddd, Do MMM YYYY');
        }
    }

    if(findSpecificJobs) {

        return (
            <div className='container' style={{marginTop: '5em'}}>
                <div className='posted-job-details'>
                    <div className="go-back-delete-update-icons-are">
                        <span className='icons-in-details' onClick={() => goBackPrevious()}><FiArrowLeftCircle/></span>
                        <span className='text-danger icons-in-details'><BsFillTrashFill/></span>
                        <span className='icons-in-details'><FaPen/></span>
                    </div>
                    <div className="job-title-details">
                        <h3 className='heading text-uppercase text-center font-weight-bold'> {getJobTypeText} Job
                            Details</h3>
                        <hr className='hr-heading'/>
                    </div>
                    <div className="table-area">
                        <table className="table table-striped text-white">
                            <thead>
                            <tr>
                                <th>Job Title</th>
                                <td className='font-weight-bold'>IT & Marketing Strategist</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>Job Descriptions</th>
                                <td className='text-justify'>{findSpecificJobs.descriptions}</td>

                            </tr>
                            <tr>
                                <th>Requirements</th>
                                <td> {findSpecificJobs ? parse(findSpecificJobs.requirements) : ''}
                                </td>
                            </tr>
                            <tr>

                                <th>Positions</th>
                                <td>{findSpecificJobs.positions}</td>

                            </tr>
                            <tr>
                                <th>Salary</th>
                                <td>{findSpecificJobs.salary}</td>
                            </tr>

                            <tr>
                                <th>Deadline</th>
                                <td>{getDeadLineDate()}</td>
                            </tr>
                            </tbody>

                        </table>
                    </div>


                </div>

            </div>
        );
    }
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
    let jobs = state.firestore.ordered.jobs;
    return {
        jobs : jobs
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(
        [
            {
                collection: 'jobs',
                orderBy: ["date", "desc"]

            }
        ]
    ))(JobDetails);