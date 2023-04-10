/* eslint-disable semi */
import React, { useState, useCallback } from 'react';
import { Form, Checkbox, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
// 컴포넌트에 props 로 넘겨주는 함수는 useCallback 을 써줘야 최적화가 된다

// 자바스크립트 적듯이 하는게 아니라 css 적듯이
const ButtonWrapper = styled.div`
  margin-top: 1px;
`;
const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const onFinish = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  const onFinishFailed = useCallback(() => {
    console.log('login failed');
  }, []);
  // 리액트는 DOM을 살펴보며 바뀐게 있는지 체크하고 있으면 리렌더링을 한다. 자바스크립트에서 객체 비교는 false기 때문에
  // style={{ marginTop: 10 }} 이렇게 주면 {{}} 객체가 매번 새롭다고 인식해서 페이지 호출할 때마다 리렌더링하고 속도가 느려진다.
  return (
      <Form
        
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input
            name='user-id'
            value={id}
            onChange={onChangeId}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password
            type='password'
            value={password}
            onChange={onChangePassword} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <ButtonWrapper>
            <Button type="primary" htmlType="submit" loading={false}>
              로그인
            </Button>
            <Link href='/signup'><Button>회원가입</Button></Link>
          </ButtonWrapper>
        </Form.Item>
      </Form>
  )
}

export default LoginForm;