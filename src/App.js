import Start from './Pages/Start';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>

          <Route path='/home' exact element={<Start/>}/>

          <Route path='/login' element={<Login/>}/>

          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
