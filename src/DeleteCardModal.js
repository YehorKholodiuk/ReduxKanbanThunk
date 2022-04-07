import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {deleteCard} from "./redux/actions";
import {connect} from "react-redux";

const DeleteCardModal = (props) => {

    const {task, openDeleteModal, setOpenDeleteModal} = props

    const toggle = () => {
        setOpenDeleteModal(!openDeleteModal)
    };



    const deleteCardButtonHandler = () => {
        props.deleteCard(task._id)
        setOpenDeleteModal(!openDeleteModal)
    }



    return (
        <div>
            <Modal isOpen={openDeleteModal} toggle={toggle} >
                <ModalHeader toggle={toggle} charCode="X">Delete this Card?</ModalHeader>
                <ModalBody>
                    {task.name}<br />
                    {task.description}
                </ModalBody>
                <ModalFooter>
                    <Button outline color="warning" onClick={deleteCardButtonHandler}> OK </Button>{' '}
                    <Button outline color="danger" onClick={toggle}> NOT OK </Button>
                </ModalFooter>
            </Modal>

        </div>
    );
};



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCardModal)
