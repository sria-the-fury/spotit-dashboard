import React, {useState} from 'react';
import "../../css/jobs-form.css";

const JobsForm = () => {

    const [formInputState, setFormInputState] = useState({
        jobType: '',
        jobTitle: '',
        positions: '',
        salary: '',
        deadLine: '',
        descriptions: '',
        requirements: ''
    })

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("Form values => ", formInputState);

    };

    const handleOnChange = (e) => {
        const {id, value} = e.target;

        setFormInputState(prevState => ({
            ...prevState,
            [id]: value
        }));

    };

    const disableSubmitButton = () => {
        let jobTypeValue = formInputState.jobType;
        let jobTitleValue = formInputState.jobTitle;
        let jobPositionsValue = formInputState.positions;
        let jobDescValue = formInputState.descriptions;
        let jobSalaryValue = formInputState.salary;
        let jobReqValue = formInputState.requirements;
        let jobDeadlineValue = formInputState.deadLine;

        return !((jobTypeValue && jobTitleValue && jobDescValue && jobReqValue && jobSalaryValue && jobDeadlineValue!== '') && (jobPositionsValue !== '' && jobPositionsValue > 0) );
    };

    return (
        <div className='container' style={{marginTop: '5em'}}>
            <h3 className="font-weight-bold text-center text-uppercase heading">Post Jobs for your Org.</h3>
            <hr className='hr-heading'/>
            <div className="form-color-area">
                <h4 className='font-weight-bold text-center text-white'>JOBS FORM</h4>

                <form autoComplete="off" onSubmit={(e) => handleOnSubmit(e)}>

                    <div className="row row-in-form">
                        <div className="form-group col-lg-6 col-md-6 col-sm-6 col-in-form">
                            <label htmlFor="jobType">Job Type</label>
                            <input type="text" className="form-control" id='jobType'
                                   placeholder="Full-Time/Part-Time/Internship...." onChange={e => handleOnChange(e)}/>
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-6 col-in-form">
                            <label htmlFor="jobTitle">Job Title</label>
                            <input type="text" className="form-control" id='jobTitle'
                                   placeholder="Digital Marketing/Full Stack Dev" onChange={e => handleOnChange(e)}/>
                        </div>

                    </div>

                    <div className="row">
                        <div className="form-group col-lg-2 col-md-2 col-sm-2 col-in-form">
                            <label htmlFor="positions">Positions</label>
                            <input type="text" className="form-control" id='positions'
                                   placeholder="20" onChange={e => handleOnChange(e)}/>

                        </div>

                        <div className="form-group col-lg-5 col-md-5 col-sm-5 col-in-form">
                            <label htmlFor="deadLine">Dead Line</label>
                            <input type="date" className="form-control" id='deadLine'
                                   placeholder="20" onChange={e => handleOnChange(e)}/>

                        </div>

                        <div className="form-group col-lg-5 col-md-5 col-sm-5 col-in-form">
                            <label htmlFor="salary">Salary</label>
                            <input type="text" className="form-control" id='salary'
                                   placeholder="20000TK/Unpaid" onChange={e => handleOnChange(e)}/>
                        </div>

                    </div>


                    <div className="form-group">
                        <label htmlFor="descriptions">Descriptions</label>
                        <input type="text" className="form-control" id='descriptions'
                               placeholder="@SPOTiTUSA is looking for a.." onChange={e => handleOnChange(e)}/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="requirements">Requirements</label>
                        <input type="text" className="form-control" id='requirements'
                               placeholder="write requirements here" onChange={e => handleOnChange(e)}/>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-success font-weight-bold mb-2" disabled={disableSubmitButton()}>Submit</button>
                    </div>


                </form>

            </div>

        </div>
    );
}

export default JobsForm;