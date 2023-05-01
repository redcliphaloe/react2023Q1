import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

describe('App', () => {
  it('First page name is Home', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Home');
  });
});
