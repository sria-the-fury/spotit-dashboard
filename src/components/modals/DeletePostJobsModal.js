import React, {useState} from 'react';
import Modal from 'react-modal';
import {FaArrowRight} from "react-icons/all";
import "../../css/modals/post-job-delete-modal.css";
import { Redirect } from "react-router-dom";

const DeletePostJobsModal = (props) => {
    const {isOpenModal, closeDeleteModal,jobID, removePostedJob, isGoBack, GoBackTrue, goBackFromCards, goBackFromDetailsToJobHome} = props;

    const [redirectTrue, setRedirectTrue] = useState(false);


    const handleDeletePostedJob = (jobID) => {
        removePostedJob(jobID);
        closeDeleteModal();
        if(GoBackTrue){
            if(goBackFromDetailsToJobHome) setRedirectTrue(true);
            else isGoBack();
        }
        if(goBackFromCards) isGoBack();
    };

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            backgroundColor: '#b72a5e',
            transform             : 'translate(-50%, -50%)',
            border: 'none'
        }
    };
    if(redirectTrue){
        return (<Redirect to="/post-jobs"/>);
    }
    else {

        return (
            <div className="container">
                <Modal
                    isOpen={isOpenModal}
                    style={customStyles}
                    ariaHideApp={false}
                    overlayClassName="Overlay"
                    closeTimeoutMS={300}

                >
                    <div className="row row-for-modals">
                        <div className="col-12 col-for-modals">
                            <span className="text-warning delete-modal-header">Delete</span>
                            <i className="float-right text-light cursor-pointer" onClick={() => closeDeleteModal()}><FaArrowRight/></i>
                        </div>
                    </div>
                    <div className="row row-for-modals">
                        <div className="col-12 col-for-modals">
                            <p className="text-light">Are you sure to delete this Job?</p>
                        </div>
                    </div>

                    <div className="row row-for-modals">

                        <div className="col-12 col-for-modals">
                            <button className="btn btn-danger" onClick={() => handleDeletePostedJob(jobID)}>YES</button>
                            <button className="btn btn-info float-right" onClick={() => closeDeleteModal()}>NO</button>
                        </div>
                    </div>


                </Modal>

            </div>

        );
    }
}

export default DeletePostJobsModal;