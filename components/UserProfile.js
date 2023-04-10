/* eslint-disable semi */
import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Meta } = Card;
const ButtonWrapper = styled(Button)`
  margin-top: 10px
`;

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
        <div key="twit">짹짹<br />0</div>,
        <div key="followings">팔로잉<br />0</div>,
        <div key="follwers">팔로워<br />0</div>,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
        title="Card title"
        description="This is the description"
      />
      <ButtonWrapper onClick={ onLogOut }> 로그아웃 </ButtonWrapper>
    </Card>);
}

export default UserProfile;