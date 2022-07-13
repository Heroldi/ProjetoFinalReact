import React from 'react';
import { GlobalStyle } from './components/GlobalStyles';
import Routers from './routes';


function App() {
  return (
    <div className="App">
      <Routers />
      <GlobalStyle />
    </div>
  );
}
export default App;
