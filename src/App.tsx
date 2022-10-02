import Characters from './Characters';
import { QueryClient, QueryClientProvider } from 'react-query';

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
