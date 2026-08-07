import type { ReactNode } from 'react';
import { ChartTypePicker } from './controls/ChartTypePicker';
import { DataEditor } from './controls/DataEditor';
import { DataImport } from './controls/DataImport';
import { ColorControls } from './controls/ColorControls';
import { StyleControls } from './controls/StyleControls';
import { LayoutControls } from './controls/LayoutControls';
import { HeaderControls } from './controls/HeaderControls';
import { ExportControls } from './controls/ExportControls';
import { CodeExport } from './controls/CodeExport';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="panel__section">
      <h2 className="panel__section-title">{title}</h2>
      {children}
    </section>
  );
}

export function CustomizationPanel() {
  return (
    <aside className="panel" aria-label="Chart customization">
      <Section title="Chart type">
        <ChartTypePicker />
      </Section>
      <Section title="Style">
        <StyleControls />
      </Section>
      <Section title="Layout">
        <LayoutControls />
      </Section>
      <Section title="Color">
        <ColorControls />
      </Section>
      <Section title="Data">
        <DataEditor />
        <DataImport />
      </Section>
      <Section title="Header">
        <HeaderControls />
      </Section>
      <Section title="Code">
        <CodeExport />
      </Section>
      <Section title="Figma">
        <ExportControls />
      </Section>
    </aside>
  );
}
