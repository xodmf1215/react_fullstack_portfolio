/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react'
// useState는 함수를 캐싱, useMemo는 값을 캐싱
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Menu, Input, Space, Row, Col } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import styled from 'styled-components'

import LoginForm from '../components/LoginForm'
import UserProfile from '../components/UserProfile'

// 리렌더링을 방지하기 위한 styled 적용
const SearchInputLegacy = styled(Input.Search)`
    vertical-align: middle
`
// children은 React의 도구, children의 타입은 node
// React 에서 화면에 그릴 수 있는 것 (=return 안에 들어가는 것) 모두가 node

// 반응형 페이지 만들 때는 Grid System을 활용한다. antd에서는 Row, Col 을 지원함
// 반응형 페이지 만들 때는 가로->세로, 가로->세로 순으로 디자인 한다.
const AppLayout = ({ children }) => {
  const { Search } = Input
  const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff'
    }}
  />)
  const onSearch = (value) => console.log(value)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // 리렌더링을 회피하기 위한 useMemo 사용, 같은 객체 유지
  const SearchInputStyle = useMemo(() => {
    return { marginTop: 10 }
  }, [])
  // AppLayout 태그 안쪽이 children임
  return (
    <>
      <div>JSX 문법 재사용 컴포넌트 AppLayout.js</div>
      <div>
      <Menu mode = 'horizontal'>
        <Menu.Item>
          <Link href="/">노드버드</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInputLegacy />
        </Menu.Item>
        <Menu.Item>
          <Space direction='vertical'>
          <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
      style = {SearchInputStyle}
    />
          </Space>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>
      <Row gutter= {8}>
        <Col xs= {24} md= {6} >
          {isLoggedIn ? <UserProfile setIsLoggedIn = { setIsLoggedIn }/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
        </Col>
        <Col xs= {24} md= {12}>
          {children}
        </Col>
        <Col xs= {24} md= {6}>
          <a href='https://diary1215.blogspot.com' target='_blank' rel='noreferrer'>내블로그</a>
        </Col>
      </Row>
      <div>
      </div>
    </div>
    </>)
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayout