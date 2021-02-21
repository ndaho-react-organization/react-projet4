import Site from './containers/site/Site';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="react-projet4">
      <Site></Site>
    </BrowserRouter>
  );
}

export default App;
