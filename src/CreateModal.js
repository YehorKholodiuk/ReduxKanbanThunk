import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

import {connect} from "react-redux";
import {createCard} from "./redux/actions";

const CreateModal = (props) => {
    const {toggle, isOpen} = props;

    const [inputName, setInputName] = useState('')
    const [inputDescription, setInputDescription] = useState('')

    const onCreateCard = () =>{
        const newCard ={
            name:inputName,
            description:inputDescription,
            status:'todo',
            priority: 1,
        };
        props.createCard(newCard);
        toggle()
    }


    return (
        <div>


            <Modal
                toggle={toggle}
                isOpen={isOpen}
            >
                <ModalHeader toggle={toggle}>
                    Create Task
                </ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"></span>
                        <input type="text" className="form-control" placeholder="Task Name" aria-label="Username"
                               aria-describedby="basic-addon1" value= {inputName} onChange = {(e) => setInputName(e.target.value)}/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"></span>
                        <input type="text" className="form-control" placeholder="Task Description" aria-label="Username"
                               aria-describedby="basic-addon1"value= {inputDescription} onChange = {(e) => setInputDescription(e.target.value)}/>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={onCreateCard}
                    >
                        Create Card
                    </Button>
                    {' '}
                    <Button onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        </div>
    );
};

const mapDispatchToProps = dispatch =>({
    createCard: (newCard) => dispatch(createCard(newCard)),
})

export default connect(null,mapDispatchToProps) (CreateModal);
