/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
// NEXT Framework html <head> 태그를 수정하는법, 대문자 Head
import Head from 'next/head'

const NodeBird = ({ Component }) => {
  return (
    <>
    <Head>
      <meta charSet='utf-8' />
      <title>NodeBird</title>
    </Head>
    <div>NEXT Framework _app.js 전화면공통</div>
    <Component />
    </>
  )
}

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired
}

export default NodeBird