import Site from './containers/site/Site';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (
    <BrowserRouter basename="react-projet4">
      <Site></Site>
    </BrowserRouter>
  );
}

export default App;
