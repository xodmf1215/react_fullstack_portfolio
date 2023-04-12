import React,{ useState, useCallback } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Input, Form, Checkbox, Button } from 'antd';
import useInput from '../hooks/useinput';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  color: red; 
`;
const Signup = () => {
  const [id, ohChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  
  /*
  const [ id, setId ] = useState('');
  const ohChangeId = useCallback( (e) => {
    setId(e.target.value)
  }, []);
  
  const [ password, setPassword ] = useState('');
  const ohChangePassword = useCallback( (e) => {
    setPassword(e.target.value)
  }, []);
  */
  const [ passwordCheck, setPasswordCheck ] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback( (e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [] );
  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  },[])
  const onSubmit = useCallback( () => {
    if(password !== passwordCheck) {
      return setPasswordError(true);
    }
    if(!term) {
      return setTermError(true);
    }
    console.log(id, nickname, password);
  },[password, passwordCheck, term]);
  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={ onSubmit }>
        <div>
          <label htmlFor='user-id'>아이디</label>
          <br/>
          <Input name = 'user-id' value = { id } required onChange= { ohChangeId } />
        </div>
        <div>
          <label htmlFor='user-password'>비밀번호</label>
          <br/>
          <Input name = 'user-password' type = 'password' value = { password } required onChange= { onChangePassword } />
        </div>
        <div>
          <label htmlFor='user-password-check'>비밀번호체크</label>
          <br/>
          <Input name = 'user-password-check' type = 'password' value = { passwordCheck } required onChange= { onChangePasswordCheck } />
          {passwordError && <ErrorMessage> 비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name= 'user-term' checked = {term} onChange = {onChangeTerm}> 약관에 동의합니다.</Checkbox>
          {termError && <ErrorMessage>약관에 동의해야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10}}>
          <Button type = 'primary' htmlType='submit'>가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  )
}

export default Signup