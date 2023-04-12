import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import FollowList2 from '../components/FollowList2';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followingList = [{ nickname: 'xodmf' }, { nickname: '123' }, { nickname: '456' }]
  const followerList = [{ nickname: 'xodmf' }, { nickname: '123' }, { nickname: '456' }]
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList2 header="팔로잉 목록" data = { followingList } />
        <FollowList2 header="팔로워 목록" data = { followerList } />
      </AppLayout>
    </>)
}

export default Profile