import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { fontStack } from '../../styles/globalStyles';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 600px;
  max-width: 90vw;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  font-family: ${fontStack};
`;

const SearchHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  font-size: 16px;
  color: #171717;
  background: transparent;
  padding: 0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #94A3B8;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #64748B;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  &:hover {
    background: #F1F5F9;
    color: #475569;
  }
`;

const SearchResults = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const ResultSection = styled.div`
  padding: 8px 0;
`;

const SectionTitle = styled.div`
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ResultItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 8px 16px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;

  &:hover {
    background: #F8FAFC;
  }
`;

const ResultTitle = styled.span`
  font-size: 14px;
  color: #171717;
  font-weight: 500;
`;

const ResultPath = styled.span`
  font-size: 12px;
  color: #64748B;
`;

const NoResults = styled.div`
  padding: 32px 16px;
  text-align: center;
  color: #64748B;
  font-size: 14px;
`;

const SearchModal = ({ isOpen, onClose, initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState({
    components: [],
    foundations: [],
    guides: []
  });
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults({
        components: [],
        foundations: [],
        guides: []
      });
      return;
    }

    // Mock search results - replace with actual search logic
    const searchResults = {
      components: [
        { title: 'Button', path: '/components/button', description: 'Interactive button component' },
        { title: 'Input', path: '/components/input', description: 'Form input component' }
      ],
      foundations: [
        { title: 'Colors', path: '/foundations/colors', description: 'Color system and tokens' }
      ],
      guides: [
        { title: 'Getting Started', path: '/guides/getting-started', description: 'Quick start guide' }
      ]
    };

    setResults(searchResults);
  }, [query]);

  const handleResultClick = (path) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <SearchHeader>
          <SearchIcon style={{ color: '#64748B' }} />
          <SearchInput
            autoFocus
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </SearchHeader>

        <SearchResults>
          {query.trim() ? (
            Object.entries(results).map(([section, items]) => (
              items.length > 0 && (
                <ResultSection key={section}>
                  <SectionTitle>{section}</SectionTitle>
                  {items.map((item, index) => (
                    <ResultItem
                      key={index}
                      onClick={() => handleResultClick(item.path)}
                    >
                      <ResultTitle>{item.title}</ResultTitle>
                      <ResultPath>{item.path}</ResultPath>
                    </ResultItem>
                  ))}
                </ResultSection>
              )
            ))
          ) : (
            <NoResults>
              Start typing to search...
            </NoResults>
          )}
        </SearchResults>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SearchModal; 