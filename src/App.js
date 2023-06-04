import {BrowserRouter as Router , Routes , Route} from  'react-router-dom';
import Home from './Components/Home';
import GetName from './Components/GetName';

import './App.css';

function App() {
  return (
    <div >
       <Router>
          <Routes>
            <Route path = "/" element={ <Home/> }></Route>
            <Route path = "/getName" element={<GetName/>}></Route>
          </Routes>
        </Router>
       
    </div>
  );
}

export default App;
