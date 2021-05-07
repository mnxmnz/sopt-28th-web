import React from 'react';
import styled from 'styled-components';

function ResultCard() {
  return (
    <StyledResultCardWrap>
      <StyledPhoto>
        <p>PHOTO</p>
      </StyledPhoto>
      <StyledName>
        <p>NAME</p>
      </StyledName>
      <StyledId>
        <p>ID</p>
      </StyledId>
      <StyledBio>
        <p>BIO</p>
      </StyledBio>
      <StyledUser>
        <StyledFollowers>
          <p>Followers</p>
        </StyledFollowers>
        <StyledFollowing>
          <p>Following</p>
        </StyledFollowing>
      </StyledUser>
    </StyledResultCardWrap>
  );
}

const StyledResultCardWrap = styled.div`
  width: 760px;
  height: 500px;
  border-radius: 10px;
  margin-top: 30px;
  padding: 10px;
  font-size: 15px;
  background-color: ${({ theme }) => theme.colors.card};

  p {
    font-weight: bold;
    margin-right: 20px;
  }
`;

const StyledPhoto = styled.div`
  width: 300px;
  height: 300px;
  border: none 1px;
  display: flex;
  align-items: center;
`;

const StyledName = styled.div`
  width: 300px;
  height: 40px;
  border: none 1px;
  display: flex;
  align-items: center;
  padding: 3px;
`;

const StyledId = styled.div`
  width: 300px;
  height: 40px;
  border: none 1px;
  display: flex;
  align-items: center;
  padding: 3px;
`;

const StyledBio = styled.div`
  width: 300px;
  height: 70px;
  border: none 1px;
  display: flex;
  align-items: center;
  padding: 3px;
`;

const StyledUser = styled.div`
  width: 300px;
  height: 40px;
  border: none 1px;
  display: flex;
  align-items: center;
  padding: 3px;
`;

const StyledFollowers = styled.div`
  width: 150px;
  padding: 3px;
`;

const StyledFollowing = styled.div`
  width: 150px;
  padding: 3px;
`;

export default ResultCard;
