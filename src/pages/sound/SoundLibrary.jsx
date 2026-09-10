import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Search } from 'lucide-react';
import { Card } from '../../cakeand/components/Card';
import { Dropdown } from '../../cakeand/components/Dropdown';
import { TextInput } from '../../cakeand/components/TextInput';
import {
  soundCatalog,
  soundFamilies,
  soundLibrarySource,
} from '../../data/sound-catalog';
import SoundPreview from './SoundPreview';

const Toolbar = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(12rem, 1fr);
  align-items: end;
  gap: var(--space-300);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-400);

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const SoundCard = styled(Card)`
  height: 100%;
  min-width: 0;
`;

const CardInner = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
  height: 100%;
  padding: var(--space-400);
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
`;

const SoundName = styled.h3`
  margin: 0;
  color: var(--color-text-icon-primary);
  font-family: 'Rookery New', Rookery, var(--font-family);
  font-size: var(--type-size-subtitle);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
`;

const Classification = styled.p`
  margin: 0;
  color: var(--color-primary-primary);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
`;

const Description = styled.p`
  flex: 1;
  margin: 0;
  color: var(--color-text-icon-secondary);
  font-size: var(--type-size-body);
  line-height: 1.45;
`;

const Attributes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-100);
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Attribute = styled.li`
  border-radius: var(--radius-1000);
  padding: var(--space-050) var(--space-150);
  background: var(--color-tonal-tonal-secondary-overlay);
  color: var(--color-text-icon-on-tonal-secondary);
  font-size: var(--type-size-caption);
  line-height: 1.35;
`;

const VariantField = styled.div`
  width: 100%;
`;

const Count = styled.p`
  margin: 0;
  color: var(--color-text-icon-secondary);
  font-size: var(--type-size-body);
`;

const Empty = styled.div`
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-300);
  padding: var(--space-600);
  color: var(--color-text-icon-secondary);
  text-align: center;
`;

const SourceLink = styled.a`
  color: var(--color-primary-primary);
`;

const SoundLibraryCard = ({ sound }) => {
  const [fileId, setFileId] = useState(sound.primary.id);
  const selectedFile = sound.files.find((file) => file.id === fileId) ?? sound.primary;
  const options = sound.files.map((file) => ({
    value: file.id,
    label: file.variant
      ? `Variant ${String(file.variant).padStart(2, '0')}`
      : 'Primary',
  }));

  return (
    <SoundCard elevation="low">
      <CardInner>
        <CardHeader>
          <SoundName>{sound.name}</SoundName>
          <Classification>
            {[sound.family, sound.category].filter(Boolean).join(' / ') || 'Unclassified'}
          </Classification>
        </CardHeader>
        {sound.description ? <Description>{sound.description}</Description> : null}
        <Attributes aria-label={`${sound.name} sonic attributes`}>
          {Object.values(sound.attributes).map((attribute) => (
            <Attribute key={attribute}>{attribute}</Attribute>
          ))}
          <Attribute>{sound.hierarchy || 'Unclassified'}</Attribute>
        </Attributes>
        {sound.files.length > 1 ? (
          <VariantField>
            <Dropdown
              id={`variant-${sound.id}`}
              label={`${sound.name} version`}
              value={selectedFile.id}
              onValueChange={setFileId}
              options={options}
            />
          </VariantField>
        ) : null}
        <SoundPreview sound={sound} file={selectedFile} />
      </CardInner>
    </SoundCard>
  );
};

const SoundLibrary = () => {
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState('all');

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return soundCatalog.filter((sound) => {
      const familyMatches = family === 'all' || sound.family === family;
      const searchable = [
        sound.name,
        sound.family,
        sound.category,
        sound.description,
        ...(sound.useCases || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return familyMatches && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [family, query]);

  const familyOptions = [
    { value: 'all', label: 'All sound types' },
    ...soundFamilies.map((name) => ({ value: name, label: name })),
  ];

  return (
    <>
      <Toolbar>
        <TextInput
          id="sound-search"
          label="Search sounds"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search name, family, category, or use case"
          startIcon={<Search />}
        />
        <Dropdown
          id="sound-family-filter"
          label="Filter by type"
          value={family}
          onValueChange={setFamily}
          options={familyOptions}
        />
      </Toolbar>
      <Count role="status">
        Showing {filtered.length} of {soundCatalog.length} sound profiles
      </Count>
      {filtered.length ? (
        <Grid>
          {filtered.map((sound) => (
            <SoundLibraryCard key={sound.id} sound={sound} />
          ))}
        </Grid>
      ) : (
        <Empty>No sounds match that search and filter combination.</Empty>
      )}
      <Count>
        Audio assets synchronized from the{' '}
        <SourceLink href={soundLibrarySource} target="_blank" rel="noopener noreferrer">
          official Cake&amp; sound library
        </SourceLink>
        .
      </Count>
    </>
  );
};

export default SoundLibrary;
