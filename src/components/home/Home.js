import React from 'react'
import "../../css/home.css";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/all";

const Home = () => {
    return (
        <div className='container' style={{marginTop: '5em'}}>
            <h3 className='text-center font-weight-bold text-uppercase heading dashboard-heading'>Dashboard</h3>
            <hr className='hr-heading'/>
            <div className="row">
                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <div className="card-dashboard-jobs text-white text-uppercase">
                        <div className="job-type text-center">
                            <div className='seen'>
                                <span className='seen-text'> <AiFillEye/> : </span>
                                <span className='number-text'>99</span>
                            </div>

                            <span className='font-weight-bold job-card-header'>Full-Time</span>
                            <div className='unseen'>
                                <span className='unseen-text'> <AiFillEyeInvisible/> : </span>
                                <span className='number-text'>99</span>
                            </div>

                            <hr className='bg-white'/>
                            <div className='desc-job-type float-left'>
                                <h6 className='font-weight-bold'>Applications</h6>
                                <div>
                                    <span className='float-left'>
                                        Today's  : 5
                                    </span>
                                </div>
                                <div>
                                    <span className='float-left'>
                                        Yesterday's : 7
                                    </span>
                                </div>

                                <div>
                                    <span className='float-left'>
                                        Total : 7
                                    </span>
                                </div>

                            </div>
                            <div className='vl'>

                            </div>

                            <div className='desc-job-type float-right'>
                                <h6 className='font-weight-bold'>Remarks</h6>
                                <div>
                                    <span className='float-right'>
                                        Contacted  : 5
                                    </span>
                                </div>
                                <div>
                                    <span className='float-right'>
                                        Rejected : 7
                                    </span>
                                </div>

                                <div>
                                    <span className='float-right'>
                                        Later : 7
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <div className="card-dashboard-jobs text-white text-uppercase">
                        <div className="job-type text-center">
                            <div className='seen'>
                                <span className='seen-text'> <AiFillEye/> : </span>
                                <span className='number-text'>99</span>
                            </div>

                            <span className='font-weight-bold job-card-header'>PART-Time</span>
                            <div className='unseen'>
                                <span className='unseen-text'> <AiFillEyeInvisible/> : </span>
                                <span className='number-text'>99</span>
                            </div>

                            <hr className='bg-white'/>
                            <div className='desc-job-type float-left'>
                                <h6 className='font-weight-bold'>Applications</h6>
                                <div>
                                    <span className='float-left'>
                                        Today's  : 5
                                    </span>
                                </div>
                                <div>
                                    <span className='float-left'>
                                        Yesterday's : 7
                                    </span>
                                </div>

                                <div>
                                    <span className='float-left'>
                                        Total : 7
                                    </span>
                                </div>

                            </div>
                            <div className='vl'>

                            </div>

                            <div className='desc-job-type float-right'>
                                <h6 className='font-weight-bold'>Remarks</h6>
                                <div>
                                    <span className='float-right'>
                                        Contacted  : 5
                                    </span>
                                </div>
                                <div>
                                    <span className='float-right'>
                                        Rejected : 7
                                    </span>
                                </div>

                                <div>
                                    <span className='float-right'>
                                        Later : 7
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <div className="card-dashboard-jobs text-white text-uppercase">
                        <div className="job-type text-center">
                            <div className='seen'>
                                <span className='seen-text'> <AiFillEye/> : </span>
                                <span className='number-text'>99</span>
                            </div>

                            <span className='font-weight-bold job-card-header'>INTERNSHIP</span>
                            <div className='unseen'>
                                <span className='unseen-text'> <AiFillEyeInvisible/> : </span>
                                <span className='number-text'>99</span>
                            </div>

                            <hr className='bg-white'/>
                            <div className='desc-job-type float-left'>
                                <h6 className='font-weight-bold'>Applications</h6>
                                <div>
                                    <span className='float-left'>
                                        Today's  : 5
                                    </span>
                                </div>
                                <div>
                                    <span className='float-left'>
                                        Yesterday's : 7
                                    </span>
                                </div>

                                <div>
                                    <span className='float-left'>
                                        Total : 7
                                    </span>
                                </div>

                            </div>
                            <div className='vl'>

                            </div>

                            <div className='desc-job-type float-right'>
                                <h6 className='font-weight-bold'>Remarks</h6>
                                <div>
                                    <span className='float-right'>
                                        Contacted  : 5
                                    </span>
                                </div>
                                <div>
                                    <span className='float-right'>
                                        Rejected : 7
                                    </span>
                                </div>

                                <div>
                                    <span className='float-right'>
                                        Later : 7
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
}

export default Home;