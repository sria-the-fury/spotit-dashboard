import React from 'react';
import "../../../css/post-job-cards.css";
import {BsClockHistory, BsFillTrashFill,FaPen} from "react-icons/all";
import moment from "moment";
import {Link} from "react-router-dom";

const FullTimeJobCards = (props) => {
    console.log(props);
    const {fullTimeJob} = props;

    const getJobPostedTime = () => {
        let jobPostedTime = fullTimeJob.date.toDate(),
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
        let jobDeadLineDate = fullTimeJob.deadLine.toDate();
        return moment(jobDeadLineDate).format('ddd, Do MMM YYYY');
    }
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 text-white" >
            <div className='post-job-card '>
                <Link to={'/post-jobs/'+fullTimeJob.jobType+'/'+ fullTimeJob.id} style={{textDecoration: 'none'}}>
                    <div className="post-job-title-name-card text-center">
                        <h5 className='font-weight-bold'>{fullTimeJob.jobTitle}</h5>
                    </div>
                    <div className="post-job-desc-card text-white">
                        {fullTimeJob.descriptions}
                    </div>
                    <div className="post-job-position-posted-time text-uppercase">
                            <span>
                                positions: {fullTimeJob.positions}
                            </span>
                        <span><BsClockHistory/> {getDeadLineDate()} </span>
                    </div>
                </Link>

                <div className="posted-job-time">
                    <small>Posted : {getJobPostedTime()}</small>
                </div>
                <div className="post-delete-edit-are">
                    <span className='text-danger'><BsFillTrashFill/></span>
                    <span><FaPen/></span>
                </div>
        </div>
</div>
);
}

export default FullTimeJobCards;