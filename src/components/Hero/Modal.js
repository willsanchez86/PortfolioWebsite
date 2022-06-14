import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Button from '../../styles/GlobalComponents/Button';
import { FaUserAlt, FaTag } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: null,
};

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [values, setValues] = useState(initialValues);

  // Form Input Changes
  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <ModalTitle>Get in Touch</ModalTitle>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        <StyledModalBody>
          <Form
            action="https://formsubmit.co/williamlancelotsanchez@gmail.com"
            method="post"
          >
            <FormContainer>
              <FaUserAlt
                size="2.5rem"
                style={{ position: 'absolute', bottom: 0, left: 0 }}
              />
              <Input
                type="text"
                name="name"
                value={values.name}
                onChange={handleInputChange}
              />
              <Label>Your Name</Label>
            </FormContainer>
            <FormContainer>
              <MdEmail
                size="2.5rem"
                style={{ position: 'absolute', bottom: 0, left: 0 }}
              />
              <Input
                type="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
              <Label>Your Email</Label>
            </FormContainer>
            <FormContainer>
              <FaTag
                size="2.5rem"
                style={{ position: 'absolute', bottom: 0, left: 0 }}
              />
              <Input
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleInputChange}
              />
              <Label>Subject</Label>
            </FormContainer>
            <TextAreaContainer>
              <MessageInput
                name="message"
                onChange={handleInputChange}
                cols="30"
                rows="4"
                value={values.message}
              ></MessageInput>
              <Label>Your Message</Label>
            </TextAreaContainer>
            <input
              type="hidden"
              name="_autoresponse"
              value="Your message was received! I will respond as soon as I can!"
            ></input>
            <SubmitButton />
          </Form>
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledModalHeader = styled.div`
  height: 15%;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
`;

const ModalTitle = styled.h1`
  display: inline;
  padding
`;

const StyledModal = styled.div`
  background: #0f1624;
  color: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 0 15px 25px 25px;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Form = styled.form`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormContainer = styled.div`
  margin-left: 30px;
  height: 15%;
  position: relative;
`;

const Input = styled.input`
  height: 60%;
  width: 300px;
  background: transparent;
  color: white;
  border: hidden;
  border-bottom solid;
  border-bottom-color: white;
  position: absolute;
  bottom: 0;
  left: 3rem;

  &:focus {
    outline: 0;
    border-bottom-color: #b133ff;
  }
`;

const TextAreaContainer = styled.div`
  margin-left: 30px;
  height: 28%;
  position: relative;
`;

const MessageInput = styled.textarea`
  background: transparent;
  color: white;
  border: hidden;
  border-bottom: solid;
  border-bottom-color: white;
  position: absolute;
  bottom: 0;
  margin-left: 3rem;
  width: 300px;

  // &:focus + ${Label} {
  //   color: #a543d6;
  //   opacity: 1;
  //   transition: 0.2s ease all;
  //   top: 10px;
  //   font-size: 1.5rem;
  // }
`;

const Label = styled.label`
  position: absolute;
  bottom: 10px;
  left: 3.2rem;

  ${Input}:focus ~ &,
  ${Input}:not(focus):not([value=""]) ~ & {
    color: #b133ff;
    opacity: 1;
    transition: 0.2s ease all;
    top: 10px;
    font-size: 1.5rem;
  }

  ${MessageInput}:focus ~ &,
  ${MessageInput}:not(focus):not(:empty) ~ & {
    color: #b133ff;
    opacity: 1;
    transition: 0.2s ease all;
    top: 10px;
    font-size: 1.5rem;
  }
`;

const SubmitButton = styled.input.attrs({ type: 'submit', value: 'Submit' })`
  width: 50%;
  margin-left: calc(3rem + 60px);
  margin-top: 30px;
  background: #75239e;
  border-radius: 50px;
  border: none;
  color: white;
  font-weight: bold;
  padding: 16px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: linear-gradient(270deg, #945dd6 0%, #a55b9e 100%);
  }
`;

export default Modal;
