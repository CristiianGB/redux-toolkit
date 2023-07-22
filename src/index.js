import React from 'react';
import ReactDOM from 'react-dom/client';
import MiRouter from "./MiRouter"
import store from './store/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* al provider le doy el valor del store para relacionarlo y que toda la aplicaciona acceda a sus valores */}
    <Provider store={store}> 
    {/* almaceno todo el proyecto en miRouter */}
      <MiRouter /> 
    </Provider>
  </React.StrictMode>
);
