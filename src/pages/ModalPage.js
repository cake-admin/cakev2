import React, { useState } from 'react';
import styled from 'styled-components';
import Modal, { BasicModal, ConfirmationModal, MODAL_STATUS } from '../components/design-system/Modal.tsx';
import Button, { BUTTON_VARIANTS } from '../components/design-system/Button';

const PageContainer = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #0F172A;
`;

const ControlsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #0F172A;
`;

const Select = styled.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 0.875rem;
  background-color: #FFFFFF;
  color: #0F172A;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`;

const PreviewSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const ModalPage = () => {
  // Basic Modal state
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [basicTheme, setBasicTheme] = useState(THEMES.LIGHT_A);
  const [basicHeader, setBasicHeader] = useState('Header');
  const [basicSubtitle, setBasicSubtitle] = useState('Subtitle');
  const [basicCopy, setBasicCopy] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nunc sed urna ultricies placerat. Etiam dictum rhoncus justo ut cursus. Curabitur tincidunt malesuada mi, ac aliquam lorem ullamcorper a. Quisque faucibus non magna at pulvinar. Cras at ante nisi. Sed massa mauris, luctus vitae dolor ac, rhoncus maximus metus. Phasellus ultrices tristique eros, at luctus sapien.');
  const [basicPrimaryLabel, setBasicPrimaryLabel] = useState('Primary');
  const [basicSecondaryLabel, setBasicSecondaryLabel] = useState('Secondary');

  // Confirmation Modal state
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [confirmationTheme, setConfirmationTheme] = useState(THEMES.LIGHT_A);
  const [confirmationStatus, setConfirmationStatus] = useState(MODAL_STATUS.INFO);
  const [confirmationTitle, setConfirmationTitle] = useState('Title');
  const [confirmationBody, setConfirmationBody] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor lorem quis vulputate rhoncus. Donec ornare enim purus.');
  const [confirmationShowCheckbox, setConfirmationShowCheckbox] = useState(false);
  const [confirmationCheckboxChecked, setConfirmationCheckboxChecked] = useState(false);
  const [confirmationPrimaryLabel, setConfirmationPrimaryLabel] = useState('Primary');
  const [confirmationSecondaryLabel, setConfirmationSecondaryLabel] = useState('Secondary');

  return (
    <PageContainer>
      <Header>
        <Title>Modal</Title>
        <Description>
          Modal components provide a focused way to display content, gather user input, or confirm actions. 
          The design system includes two modal types: Basic Modal for general content display and Confirmation Modal 
          for status-based confirmations with optional checkbox support.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Basic Modal</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Theme</Label>
            <Select value={basicTheme} onChange={(e) => setBasicTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection>
          <Button
            variant={BUTTON_VARIANTS.SECONDARY}
            label="Open Basic Modal"
            onClick={() => setBasicModalOpen(true)}
          />
        </PreviewSection>

        <BasicModal
          isOpen={basicModalOpen}
          onClose={() => setBasicModalOpen(false)}
          header={basicHeader}
          subtitle={basicSubtitle}
          copy={basicCopy}
          primaryButtonLabel={basicPrimaryLabel}
          secondaryButtonLabel={basicSecondaryLabel}
          theme={basicTheme}
          onPrimaryClick={() => {
            console.log('Primary button clicked');
            setBasicModalOpen(false);
          }}
          onSecondaryClick={() => {
            console.log('Secondary button clicked');
            setBasicModalOpen(false);
          }}
        />
      </Section>

      <Section>
        <SectionTitle>Confirmation Modal</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Theme</Label>
            <Select value={confirmationTheme} onChange={(e) => setConfirmationTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
          <Control>
            <Label>Status</Label>
            <Select value={confirmationStatus} onChange={(e) => setConfirmationStatus(e.target.value)}>
              <option value={MODAL_STATUS.INFO}>Info</option>
              <option value={MODAL_STATUS.SUCCESS}>Success</option>
              <option value={MODAL_STATUS.WARNING}>Warning</option>
              <option value={MODAL_STATUS.ERROR}>Error</option>
            </Select>
          </Control>
          <Control>
            <Label>Show Checkbox</Label>
            <Select value={confirmationShowCheckbox.toString()} onChange={(e) => setConfirmationShowCheckbox(e.target.value === 'true')}>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection>
          <Button
            variant={BUTTON_VARIANTS.SECONDARY}
            label="Open Confirmation Modal"
            onClick={() => setConfirmationModalOpen(true)}
          />
        </PreviewSection>

        <ConfirmationModal
          isOpen={confirmationModalOpen}
          onClose={() => setConfirmationModalOpen(false)}
          title={confirmationTitle}
          body={confirmationBody}
          status={confirmationStatus}
          showCheckbox={confirmationShowCheckbox}
          checkboxChecked={confirmationCheckboxChecked}
          onCheckboxChange={(checked) => setConfirmationCheckboxChecked(checked)}
          primaryButtonLabel={confirmationPrimaryLabel}
          secondaryButtonLabel={confirmationSecondaryLabel}
          theme={confirmationTheme}
          onPrimaryClick={() => {
            console.log('Primary button clicked', { checkboxChecked: confirmationCheckboxChecked });
            setConfirmationModalOpen(false);
          }}
          onSecondaryClick={() => {
            console.log('Secondary button clicked');
            setConfirmationModalOpen(false);
          }}
        />
      </Section>
    </PageContainer>
  );
};

export default ModalPage;

