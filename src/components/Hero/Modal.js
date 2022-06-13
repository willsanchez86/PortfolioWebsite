import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Button from '../../styles/GlobalComponents/Button';
import { FaUserAlt, FaTag } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

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
              <Input type="text" name="name" />
              <Label>Your Name</Label>
            </FormContainer>
            <FormContainer>
              <MdEmail
                size="2.5rem"
                style={{ position: 'absolute', bottom: 0, left: 0 }}
              />
              <Input type="email" name="email" />
              <Label>Your Email</Label>
            </FormContainer>
            <FormContainer>
              <FaTag
                size="2.5rem"
                style={{ position: 'absolute', bottom: 0, left: 0 }}
              />
              <Input type="text" name="subject" />
              <Label>Subject</Label>
            </FormContainer>
            <FormContainer>
              <MessageInput name="message" cols="30" rows="4"></MessageInput>
              <Label>Your Message</Label>
            </FormContainer>
            <input
              type="hidden"
              name="_autoresponse"
              value="Your message was received! I will respond as soon as I can!"
            ></input>
            <input type="submit" value="Submit" />
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
  background: #e0e4eb;
  color: #0f1624;
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
  height: 20%;
  position: relative;
`;

const Input = styled.input`
  height: 80%;
  width: 300px;
  background: transparent;
  border: hidden;
  border-bottom solid;
  position: absolute;
  bottom: 0;
  left: 3rem;
`;

const MessageInput = styled.textarea`
  background: transparent;
  border: hidden;
  border-bottom: solid;
  margin-left: 3rem;
  width: 300px;
`;

const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: calc(3rem + 305px);
`;

export default Modal;
