import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Row, Col } from "antd";
import PostCapsule from "./PostCapsule";

// 카테고리 번호에 따라 다른 헬프 포스트들을 불러오게 하거나 걸러내게 해야할듯.
const PostList = ({ categoryNum }) => {
  const { helpPosts } = useSelector(state => state.posts);
  return (
    <PostListUpperDiv>
      <Row gutter={[24, 24]}> 
        {helpPosts.map((help, index) => (
          <ColCapsule xs={24} md={12} xl={8} key={index}>
            <PostCapsule data={help} />
          </ColCapsule>
        ))}
      </Row>
    </PostListUpperDiv>
  );
};

const PostListUpperDiv = styled.div`
  padding: 20px 0;
`;
const ColCapsule = styled(Col)`
  display: flex;
  justify-content: center;
`;

export default PostList;
