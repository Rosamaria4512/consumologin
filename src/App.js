import {Routes,Route,BrowserRouter} from 'react-router-dom';
//import Lista from './components/Lista'; 
import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
