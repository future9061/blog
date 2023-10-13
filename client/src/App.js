import './App.css';
import NavBar from './components/NavBar/NavBar';
import { useEffect } from 'react';
import { userLogin } from './store/userSlice';
import { useDispatch } from 'react-redux'
import Container from './components/Container/Container';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    for (const key of Object.keys(sessionStorage)) {
      if (key.includes("firebase:authUser:")) {
        const userData = JSON.parse(sessionStorage.getItem(key));
        dispatch(userLogin(userData));
      }
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Container />
    </div>
  );
}

export default App;
