import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Search } from 'lucide-react';
import { Card } from '../../cakeand/components/Card';
import { SimpleCard } from '../../cakeand/components/Card/SimpleCard';
import { Chip } from '../../cakeand/components/Chip/Chip';
import { Dropdown } from '../../cakeand/components/Dropdown';
import { HelperString } from '../../cakeand/components/Elements/HelperString';
import { InputLabel } from '../../cakeand/components/Elements/InputLabel';
import { TextInput } from '../../cakeand/components/TextInput';
import {
  soundCatalog,
  soundFamilies,
} from '../../data/sound-catalog';
import SoundPreview from './SoundPreview';
import SoundWaveform from './SoundWaveform';

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

const ProfileTemplate = styled(SimpleCard)`
  height: 100%;
`;

const WaveMedia = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: var(--space-300) var(--space-400);
`;

const Attributes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-100);
  margin: 0;
  padding: 0;
  list-style: none;
`;

const PropertyField = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  width: 100%;
  min-width: 0;
`;

const ActionStack = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--space-300);
  min-width: 0;
`;

const VariantField = styled.div`
  width: 100%;
`;

const Empty = styled.div`
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-300);
  padding: var(--space-600);
  color: var(--color-text-icon-secondary);
  text-align: center;
`;

const capitalizeLabel = (value) => {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};

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
      <ProfileTemplate
        media={
          <WaveMedia>
            <SoundWaveform
              peaks={selectedFile.peaks}
              label={`Static waveform for ${sound.name}`}
            />
          </WaveMedia>
        }
        title={sound.name}
        body={sound.description || 'No authored description is available yet.'}
        actions={
          <ActionStack>
            {sound.family || sound.category ? (
              <PropertyField>
                <InputLabel size="sm" id={`${sound.id}-type`}>
                  Type
                </InputLabel>
                <Attributes aria-labelledby={`${sound.id}-type`}>
                  {sound.family ? (
                    <li>
                      <Chip type="secondary" size="sm">
                        {capitalizeLabel(sound.family)}
                      </Chip>
                    </li>
                  ) : null}
                  {sound.category ? (
                    <li>
                      <Chip type="secondary" size="sm">
                        {capitalizeLabel(sound.category)}
                      </Chip>
                    </li>
                  ) : null}
                </Attributes>
              </PropertyField>
            ) : null}
            <PropertyField>
              <InputLabel size="sm" id={`${sound.id}-properties`}>
                Properties
              </InputLabel>
              <Attributes aria-labelledby={`${sound.id}-properties`}>
                {Object.values(sound.attributes).map((attribute) => (
                  <li key={attribute}>
                    <Chip type="secondary" size="sm">
                      {capitalizeLabel(attribute)}
                    </Chip>
                  </li>
                ))}
                <li>
                  <Chip type="secondary" size="sm">
                    {capitalizeLabel(sound.hierarchy || 'Unclassified')}
                  </Chip>
                </li>
              </Attributes>
            </PropertyField>
            {sound.files.length > 1 ? (
              <VariantField>
                <Dropdown
                  id={`variant-${sound.id}`}
                  label="Variant"
                  value={selectedFile.id}
                  onValueChange={setFileId}
                  options={options}
                />
              </VariantField>
            ) : null}
            <SoundPreview sound={sound} file={selectedFile} showWaveform={false} />
          </ActionStack>
        }
      />
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
      <HelperString role="status" tone="greyscale" showIcon={false}>
        Showing {filtered.length} of {soundCatalog.length} sound profiles
      </HelperString>
      {filtered.length ? (
        <Grid>
          {filtered.map((sound) => (
            <SoundLibraryCard key={sound.id} sound={sound} />
          ))}
        </Grid>
      ) : (
        <Empty>No sounds match that search and filter combination.</Empty>
      )}
    </>
  );
};

export default SoundLibrary;
