# Design System Documentation Site

A comprehensive design system documentation site built with React, featuring interactive component examples, responsive navigation, and detailed documentation.

## Features

- **Interactive Component Examples**: Live, editable examples of all design system components
- **Responsive Navigation**: Collapsible left sidebar with mobile support
- **Component Documentation**: Detailed usage guidelines and code examples
- **Version Control**: Complete changelog and version history
- **Modern Design**: Clean, professional interface inspired by modern design systems
- **Accessible**: WCAG compliant components with keyboard navigation

## Components Included

### Core Components
- **Button**: 5 variants (primary, secondary, outline, ghost, danger) with 3 sizes
- **Card**: Flexible content containers with header, body, and footer sections
- **Input**: Form inputs with validation states and helper text
- **Modal**: Overlay dialogs with backdrop and keyboard navigation

### Design System Features
- Responsive navigation with mobile hamburger menu
- Interactive controls for component customization
- Real-time code generation
- Comprehensive usage guidelines
- Version control and changelog

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd design-system-docs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start the development server
- `npm build` - Build the project for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (not recommended)

## Project Structure

```
src/
├── components/
│   ├── design-system/     # Design system components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Input.js
│   │   └── Modal.js
│   └── Navigation.js      # Main navigation component
├── pages/                 # Page components
│   ├── Home.js
│   ├── ButtonPage.js
│   ├── CardPage.js
│   ├── InputPage.js
│   ├── ModalPage.js
│   └── VersionControl.js
├── App.js                 # Main app component
└── index.js              # Entry point
```

## Design System Principles

### Consistency
- Unified design language across all components
- Consistent spacing, typography, and color usage
- Standardized component APIs

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios

### Flexibility
- Customizable components with multiple variants
- Responsive design patterns
- Themeable color system

## Component Usage

### Button
```jsx
import Button from './components/design-system/Button';

<Button variant="primary" size="medium" onClick={handleClick}>
  Click me
</Button>
```

### Card
```jsx
import Card from './components/design-system/Card';

<Card elevated hoverable>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle>Card subtitle</Card.Subtitle>
  </Card.Header>
  <Card.Body>
    Card content goes here
  </Card.Body>
  <Card.Footer>
    <Button size="small">Action</Button>
  </Card.Footer>
</Card>
```

### Input
```jsx
import Input from './components/design-system/Input';

<Input
  label="Email Address"
  placeholder="Enter your email"
  type="email"
  required
  helperText="We'll never share your email"
/>
```

### Modal
```jsx
import Modal from './components/design-system/Modal';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  subtitle="Modal subtitle"
>
  Modal content goes here
</Modal>
```

## Customization

### Styling
The design system uses styled-components for styling. You can customize the theme by modifying the color tokens and spacing values in the component files.

### Adding New Components
1. Create a new component file in `src/components/design-system/`
2. Follow the existing component patterns
3. Add interactive examples to the corresponding page
4. Update the navigation to include the new component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by modern design systems like Material Design and Ant Design
- Built with React and styled-components
- Uses Inter font family for typography 