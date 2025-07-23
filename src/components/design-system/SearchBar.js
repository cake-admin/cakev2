import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import SearchModal from './SearchModal';
import { fontStack } from '../../styles/globalStyles';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 24px 24px 24px;
  box-sizing: border-box;
  font-family: ${fontStack};
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background: #F8FAFC;
  border: 1px solid #CBD5E1;
  border-radius: 6px;
  transition: all 0.2s ease;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: #F1F5F9;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 8px;
  color: #64748B;
  display: flex;
  align-items: center;

  & > svg {
    font-size: 18px;
  }
`;

const SearchInput = styled.div`
  width: 100%;
  height: 36px;
  padding: 0 56px 0 32px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #94A3B8;
  font-family: inherit;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const ShortcutKey = styled.div`
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const KeyboardKey = styled.kbd`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  padding: 0 4px;
  min-width: 16px;
  height: 16px;
  font-size: 11px;
  color: #64748B;
  font-family: inherit;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchContainer>
        <SearchWrapper onClick={handleOpenModal}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <SearchInput>
            Search...
          </SearchInput>
          <ShortcutKey>
            <KeyboardKey>{navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}</KeyboardKey>
            <KeyboardKey>K</KeyboardKey>
          </ShortcutKey>
        </SearchWrapper>
      </SearchContainer>

      <SearchModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SearchBar; 