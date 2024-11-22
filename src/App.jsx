import Start from './Pages/Start';
import PageNotFound from './Pages/PageNotFound';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer';
import Background from './components/Background';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
      <Router>
        <Background />
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Navigate to='/home' replace />}/>

          <Route path='/home' exact element={<Start/>}/>

          <Route path='/login' element={<Login/>}/>

          <Route path='/register' element={<Register/>}/>

          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
