import Start from './Pages/Start';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start/>}/>
        {/*<Route path='/login' element={<Start/>}/>*/}
      </Routes>
    </Router>
  );
}

export default App;
