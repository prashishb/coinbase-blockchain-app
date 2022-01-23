import React, { useState } from 'react';
import styled from 'styled-components';

const TransferModal = () => {
  const [action, setAction] = useState('send');

  const selectedStyle = {
    color: '#3773f5',
  };

  const unselectedStyle = {
    border: '1px solid #282b2f',
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === 'send' ? selectedStyle : unselectedStyle}
          onClick={() => setAction('send')}
        >
          <p>send</p>
        </Option>

        <Option
          style={action === 'receive' ? selectedStyle : unselectedStyle}
          onClick={() => setAction('receive')}
        >
          <p>receive</p>
        </Option>
      </Selector>
    </Wrapper>
  );
};

export default TransferModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 35rem;
  width: 27rem;
  color: #fff;
  border: 1px solid #282b2f;
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;
