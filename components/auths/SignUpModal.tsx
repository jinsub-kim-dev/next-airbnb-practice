import React from "react";
import styled from "styled-components";
import CloseXIcon from "../../public/static/svg/modal/modal_close_x_icon.svg";
import MailIcon from "../../public/static/svg/auth/mail.svg";
import PersonIcon from "../../public/static/svg/auth/person.svg";
import OpenedEyeIcon from "../../public/static/svg/auth/opened_eye.svg";
import ClosedEyeIcon from "../../public/static/svg/auth/closed_eye.svg";
import Input from "../common/Input";
import palette from "../../styles/palette";

const Container = styled.form`
  width: 568px;
  height: 614px;
  padding: 32px;
  background-color: white;
  z-index: 11;

  .modal-close-x-icon {
    cursor: pointer;
    display: block;
    margin: 0 0 40px auto;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 16px;
  }
`;

const SignUpModal: React.FC = () => {
  return (
    <Container>
      <CloseXIcon className="modal-close-x-icon" />
      <div className="input-wrapper">
        <Input placeholder="이메일 주소" type="email" icon={<MailIcon />} />
      </div>
      <div className="input-wrapper">
        <Input placeholder="이름(예: 길동)" icon={<PersonIcon />} />
      </div>
      <div className="input-wrapper">
        <Input placeholder="성(예: 홍)" icon={<PersonIcon />} />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="비밀번호 설정하기"
          type="password"
          icon={<OpenedEyeIcon />}
        />
      </div>
    </Container>
  );
};

export default SignUpModal;
