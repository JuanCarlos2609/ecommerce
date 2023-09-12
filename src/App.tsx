import { CssBaseline } from '@mui/material';
import Root from './Root';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';

function App() {
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <Root />
      </Provider>
    </>
  );
}

export default App;
