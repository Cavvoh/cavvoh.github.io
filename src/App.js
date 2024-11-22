import Start from './Pages/Start';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Navigate to='/home' replace />}/>

          <Route path='/home' exact element={<Start/>}/>

          <Route path='/login' element={<Login/>}/>

          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
