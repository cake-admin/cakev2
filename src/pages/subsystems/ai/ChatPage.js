import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 32px;
  color: #4A5568;
`;

const ChatPage = () => {
  return (
    <PageContainer>
      <Title>Chat</Title>
      <Description>
        AI-powered chat interface components and patterns for the Cake Design System.
      </Description>
      {/* Add content specific to Chat */}
    </PageContainer>
  );
};

export default ChatPage;