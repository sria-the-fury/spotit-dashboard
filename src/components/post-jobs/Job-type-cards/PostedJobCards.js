import React, {useState} from 'react';
import "../../../css/post-job-cards.css";
import {BsClockHistory, BsFillTrashFill,FaPen} from "react-icons/all";
import moment from "moment";
import {Link} from "react-router-dom";
import DeletePostJobsModal from "../../modals/DeletePostJobsModal";
import {removePostedJob} from "../../../actions/jobPostAction";
import {connect} from "react-redux";

const PostedJobCards = (props) => {
    const {jobByJobType, removePostedJob, jobsLength, goBack} = props;


    const [isOpenDeleteModal, setDeleteModal] = useState(false);
    const closeDeleteModal = () => {
        setDeleteModal(false);
    };
    const openDeleteModal = () => {
        setDeleteModal(true);
    }

    const getJobPostedTime = () => {
        let jobPostedTime = jobByJobType.date.toDate(),
            todayDate = new Date(),
            getDayDifference = Math.round((todayDate.getTime() - jobPostedTime.getTime())/(1000*3600*24));
        if(getDayDifference > 20 ) return moment(jobPostedTime).format('dddd, Do MMM YYYY, h:mm a');
        else if(getDayDifference < 7) {
            if(getDayDifference < 1) return moment(jobPostedTime).startOf('minutes').fromNow();
            else return moment(jobPostedTime).calendar();
        }
        else return moment(jobPostedTime).startOf('minutes').fromNow();
    };

    const getDeadLineDate = () => {
        let jobDeadLineDate = jobByJobType.deadLine.toDate();
        return moment(jobDeadLineDate).format('ddd, Do MMM YYYY');
    };

    const getCardsBgColorClass = jobByJobType.jobType === '1' ? 'full-time-card-bg' : jobByJobType.jobType === '2' ? 'part-time-card-bg' : 'internship-card-bg';

    const goBackFromCards = jobsLength <= 1 ? true : false;


    return (
        <div className="col-sm-12 col-md-6 col-lg-4 text-white" >
            <div className={'post-job-card '+getCardsBgColorClass}>
                <Link to={'/post-jobs/'+jobsLength+'/'+jobByJobType.jobType+'/'+ jobByJobType.id} style={{textDecoration: 'none'}}>
                    <div className="post-job-title-name-card text-center">
                        <h5 className='font-weight-bold'>{jobByJobType.jobTitle}</h5>
                    </div>
                    <div className="post-job-desc-card text-white">
                        {jobByJobType.descriptions}
                    </div>
                    <div className="post-job-position-posted-time text-uppercase">
                            <span>
                                positions: {jobByJobType.positions}
                            </span>
                        <span><BsClockHistory/> {getDeadLineDate()} </span>
                    </div>
                </Link>

                <div className="posted-job-time">
                    <small>Posted : {getJobPostedTime()}</small>
                </div>
                <div className="post-delete-edit-are">
                    <span className='text-danger' onClick={() => openDeleteModal()}><BsFillTrashFill/></span>
                    <span><FaPen/></span>
                </div>
            </div>


            <DeletePostJobsModal isOpenModal={isOpenDeleteModal} closeDeleteModal={closeDeleteModal}
                                 jobID={jobByJobType.id} goBackFromCards={goBackFromCards} isGoBack={goBack}

                                 removePostedJob={removePostedJob}/>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return{
        removePostedJob: jobID => dispatch(removePostedJob(jobID))


    }
}

export default connect(null, mapDispatchToProps)(PostedJobCards);