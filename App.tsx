import * as React from 'react';
import Main from './views/main'

import { Container } from 'inversify';
import { ILogger,ConsoleLogger } from './services/LogService';




function App() {  
  return (        
    <Main/>
  );
}

export default App;