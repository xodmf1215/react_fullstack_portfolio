import React from 'react';
import { List, Card, Button } from 'antd';
import PropTypes from 'prop-types';
import StopOutlined from '@ant-design/icons';

const FollowList2 = ({ header, data }) => {
  console.log(data);
  return (
    <List
      style = {{ marginBottom: 20 }}
      grid = {{ gutter: 4, xs: 2, md: 3 }}
      size = 'small'
      header = {<div>{ header }</div>}
      loadMore = {<div style = {{ textAlign: 'center', margin: '10px 0'}}>
        <Button>더보기</Button>
      </div>}
      bordered
      dataSource = { data }
      renderItem = { (item) => { return (
        <List.Item style = {{ marginTop: 20 }}>
          <Card actions = {[ <StopOutlined key = 'stop'/>] }>
            <Card.Meta description = {item.nickname}/>
          </Card>
        </List.Item>
  );}}
      ></List>
  );
};

FollowList2.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}

export default FollowList2;