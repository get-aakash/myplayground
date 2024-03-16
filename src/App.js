import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import UpdateToDo from './components/UpdateToDo';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='update/:id' element = {<UpdateToDo />}/>
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
      
    </div>
  );
}

export default App;
