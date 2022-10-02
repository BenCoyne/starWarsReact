import React from 'react';
import Characters from './Characters';
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        May the EGGGGGG be with you
        <Characters />
      </div>
    </QueryClientProvider>
  );


}

export default App;
