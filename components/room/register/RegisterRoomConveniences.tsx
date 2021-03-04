import React from "react";
import styled from "styled-components";
import palette from "../../../styles/palette";
import { convenienceList } from "../../../lib/staticData";
import { useDispatch } from "react-redux";
import { useSelector } from "../../../store";
import { registerRoomActions } from "../../../store/registerRoom";
import CheckboxGroup from "../../common/CheckboxGroup";
import RegisterRoomFooter from "./RegisterRoomFooter";

const Container = styled.div`
  padding: 62px 30px 100px;
  h2 {
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 56px;
  }
  h3 {
    font-weight: bold;
    color: ${palette.gray_76};
    margin-bottom: 6px;
  }
  .register-room-step-info {
    font-size: 14px;
    max-width: 400px;
    margin-bottom: 24px;
  }
`;

const RegisterRoomConveniences: React.FC = () => {
  const dispatch = useDispatch();

  const conveniences = useSelector((state) => state.registerRoom.conveniences);

  const onChangeConveniences = (selected: string[]) => {
    dispatch(registerRoomActions.setConveniences(selected));
  };

  return (
    <Container>
      <h2>게스트가 어떤 공간을 사용할 수 있나요?</h2>
      <h3>6단계</h3>
      <p className="register-room-step-info">
        등록하고자 하는 숙소에서 게스트가 이용 가능한 공용공간을 선택하세요.
      </p>
      <div className="register-room-conveniences-checkbox-group-wrapper">
        <CheckboxGroup
          value={conveniences}
          onChange={onChangeConveniences}
          options={convenienceList}
        />
      </div>
      <RegisterRoomFooter
        prevHref="/room/register/amentities"
        nextHref="/room/register/photo"
      />
    </Container>
  );
};

export default RegisterRoomConveniences;
