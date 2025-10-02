import ReactDOM from 'react-dom/client';  // ✅ notice ".client"
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container not found");
}
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
