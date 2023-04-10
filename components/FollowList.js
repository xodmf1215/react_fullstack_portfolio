/* eslint-disable semi */
import React, { useState, useCallback, useEffect } from 'react';
import VirtualList from 'rc-virtual-list';
import PropTypes from 'prop-types';
import { List, Avatar, message } from 'antd';

const FollowList = ({ header, data }) => {
  const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
  const ContainerHeight = 400;
  const [data, setData] = useState([]);
  const appendData = useCallback(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  }, []);
  useEffect(() => {
    appendData();
  }, []);
  /*
  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };
  */
  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        //onScroll={onScroll}
        loadMore = { 
          <div style= {{ textAlign: 'center', margin: '10px 0' }}>
            <Button>더보기</Button>
          </div>
        }
      >
        {(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={item.email}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default FollowList;