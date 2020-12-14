import React, {useEffect, useState} from 'react';
import "../../css/jobs-form.css";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "../../css/quill-editor.css";
import {addJobPost} from "../../actions/jobPostAction";
import {connect} from "react-redux";

const JobsForm = (props) => {

    const {addJobPost} = props;
    const [checkValue, setCheckValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const [formInputState, setFormInputState] = useState({
        jobTitle: '',
        positions: '',
        salary: '',
        deadLine: '',
        descriptions: '',
        requirements: ''
    });

    const handleOnSubmit = (e) => {

        e.preventDefault();
        addJobPost(formInputState, checkValue);
        e.target.reset();
        setCheckValue('');
        setFormInputState({
            jobTitle: '',
            positions: '',
            salary: '',
            deadLine: '',
            descriptions: '',
            requirements: ''
        });

    };

    const handleOnChange = (e) => {
        const {id, value} = e.target;

        setFormInputState(prevState => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleOnChangeReq = (value) => {
        setFormInputState(prevState => ({
            ...prevState,
            requirements: value
        }));

    };


    const disableSubmitButton = () => {

        let jobTypeValue = checkValue;
        let jobTitleValue = formInputState.jobTitle;
        let jobPositionsValue = formInputState.positions;
        let jobDescValue = formInputState.descriptions;
        let jobSalaryValue = formInputState.salary;
        let jobReqValue = formInputState.requirements;
        let jobDeadlineValue = formInputState.deadLine;
        let leadingParagraphAndSpacePattern = /<p>[\s]*[<br>]*<\/p>/g,
            truncateTextReq = jobReqValue.replace(leadingParagraphAndSpacePattern, "");

        return !((jobTypeValue && jobTitleValue && jobDescValue && truncateTextReq && jobSalaryValue && jobDeadlineValue !== '') && (jobPositionsValue !== '' && jobPositionsValue > 0) );
    };



    const  modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            ['link'],
            [{ 'align': [] }],
            [{ 'color': [] }],
        ],
    };

    const formats = [
        'bold', 'italic', 'underline',
        'list', 'bullet',
        'link', 'color', 'align','color'
    ];

    const simulateNetworkRequest = () => {
        return new Promise((resolve) => setTimeout(resolve, 2500));
    }


    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setIsLoading(false);
            });
        }
    }, [isLoading]);



    return (
        <div className='container' style={{marginTop: '5em'}}>

            <h3 className="font-weight-bold text-center text-uppercase heading">Post Jobs for your Org.</h3>
            <hr className='hr-heading'/>
            <div className="form-color-area">
                <h4 className='font-weight-bold text-center text-white'>JOBS FORM</h4>

                <form autoComplete="off" onSubmit={(e) => handleOnSubmit(e)}>

                    <div className="row row-in-form">
                        <div className="form-group col-lg-12 col-in-form">
                            <label htmlFor="jobType">Job Type</label><br/>

                            <div className='custom-checkbox-for-job-type text-uppercase text-white font-weight-bold'>
                                <span onClick={() => setCheckValue('1')} className={checkValue === '1' ? 'active-check' : 'blank'}>FULL-TIME</span>
                                <span onClick={() => setCheckValue('2')} className={checkValue === '2' ? 'active-check' : 'blank'}>PART-TIME</span>
                                <span onClick={() => setCheckValue('3')} className={checkValue === '3' ? 'active-check' : 'blank'}>Internship</span>

                            </div>


                        </div>
                        <div className="form-group col-lg-12 col-in-form">
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
                        <ReactQuill value={formInputState.requirements} theme="snow" placeholder="Write Requirements"
                                    modules={modules}
                                    formats={formats}
                                    onChange={(e)=>handleOnChangeReq(e)} />
                    </div>

                    <div className="form-group">
                        <button type="submit"
                                className="btn btn-success font-weight-bold"
                                disabled={disableSubmitButton()}
                                onClick={() => setIsLoading(!isLoading)}>
                            {isLoading ? 'wait...' : 'Submit' }</button>
                    </div>


                </form>

            </div>


        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addJobPost: (formInfo, jobType) => dispatch(addJobPost(formInfo, jobType))
    }
}

export default connect(null, mapDispatchToProps)(JobsForm);