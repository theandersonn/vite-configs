### Criar o projeto
```bash
yarn create vite jest-testing-library -- --template react
```

### instalar Jest
```bash
yarn add jest @types/jest -D
```

### criar scripts em package.json
```json
{
  "test": "jest",
  "test:watch": "jest --watchAll"
}
```

### criar App.spec.jsx

```js
describe('Jest', () => {
  it('testing jet', () => {
    expect(1).toBe(1);
  });
});
```
### instalar testing-library
```bash
yarn add @testing-library/jest-dom @testing-library/react @testing-library/user-event -D
```

### instalar babel
```bash
yarn add @babel/core @babel/preset-env @babel/preset-react babel-jest identity-obj-proxy jest-environment-jsdom -D
```

### criar arquivos de configuracão
- jest.config.js
- babel.config.json
- .jest/setup-tests.js
- .jest/__mocks__/fileMock.js

### update no arquivo de teste

```js
import { render, screen } from '@testing-library/react';

it('should display elements', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /vite \+ react/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /vite logo/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /react logo/i })).toBeInTheDocument();
});
```

```js
import userEvent from "@testing-library/user-event";

it('should increment count on click', async () => {
  render(<App />);
    
  const counter = screen.getByRole('button', { name: /count is/i });
  expect(counter.textContent).toBe('count is 0');
    
  await userEvent.click(counter);
  expect(counter.textContent).toBe('count is 1');
});
```