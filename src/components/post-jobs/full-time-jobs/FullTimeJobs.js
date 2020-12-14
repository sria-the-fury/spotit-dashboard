import React from 'react';
import FullTimeJobCards from "./FullTimeJobCards";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import _ from "lodash";
import "../../../css/post-job-cards.css";
import {Spinner} from "react-bootstrap";

const FullTimeJobs = (props) => {
    const  {FullTimeJobs} = props;

    if(FullTimeJobs.length) {

        return (
            <div className='container' style={{marginTop: '5em'}}>
                <h3 className='heading text-uppercase font-weight-bold text-center'>Jobs - Full time </h3>
                <hr className='hr-heading'/>
                <div className='container'>
                    <div className="row row-posted-job">
                        {
                            FullTimeJobs && _.map(FullTimeJobs, (fullTimeJob) => {
                                return (
                                    <FullTimeJobCards fullTimeJob={fullTimeJob} key={fullTimeJob.id}/>
                                )
                            })
                        }
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
    let AllPostedJobs = state.firestore.ordered.jobs;
    let FullTimeJobs = AllPostedJobs ?  _.filter(AllPostedJobs, {
        "jobType": "1"
    }) : '';
    return{
        FullTimeJobs: FullTimeJobs

    }

}

export default compose(
    connect(mapStateToProps),
    firestoreConnect( [
        {
            collection: 'jobs',
            orderBy: ["date", "desc"]

        }
    ]))(FullTimeJobs);