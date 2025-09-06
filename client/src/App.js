
import { Provider } from 'react-redux';
import './App.css';

import Body from './Components/Body'
import Head from './Components/Head';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainConatiner from './Components/MainConatiner';
import WatchPage from './Components/WatchPage';
function App() {
console.log("Full process.env:", process.env);

  console.log("API KEY: ", process.env.REACT_APP_API_KEY);

  const appRouter = createBrowserRouter([
      {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element:<MainConatiner/>

        },
        {
          path: '/watch',
          element:<WatchPage/>
        }
      ]
      },
    ])
  
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
