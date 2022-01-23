import React, { useState } from 'react';
import styled from 'styled-components';
import Transfer from './Transfer';
import CoinSelector from './CoinSelector';

const TransferModal = ({ sanityTokens, thirdWebTokens, walletAddress }) => {
  const [action, setAction] = useState('send');
  const [selectedToken, setSelectedToken] = useState(sanityTokens[1]);

  const selectedStyle = {
    color: '#3773f5',
  };

  const unselectedStyle = {
    border: '1px solid #282b2f',
  };

  const selectedModal = (option) => {
    switch (option) {
      case 'send':
        return (
          <Transfer
            selectedToken={selectedToken}
            setAction={setAction}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );
      case 'receive':
        return <h2>receive</h2>;
      case 'select':
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );
      default:
        return <h2>send</h2>;
    }
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === 'send' ? selectedStyle : unselectedStyle}
          onClick={() => setAction('send')}
        >
          <p>Send</p>
        </Option>

        <Option
          style={action === 'receive' ? selectedStyle : unselectedStyle}
          onClick={() => setAction('receive')}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{selectedModal(action)}</ModalMain>
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

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
