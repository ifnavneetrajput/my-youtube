
import { Provider } from 'react-redux';
import './App.css';

import Body from './Components/Body'
import Head from './Components/Head';
import appStore from './utils/appStore';
function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
