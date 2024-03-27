import './App.css';
import Quora from './components/Quora';
import { login ,selectUser } from './feature/user';
import Login from './components/auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(login({
          userName: authUser.displayName,
          photo: authUser.photoURL,
          email: authUser.email,
          uid: authUser.uid
        }));
        console.log("Auth user", authUser);
      }
      else{
        console.log("Error in user authentication");
      }
    });
  }, [dispatch])

  return (
    <div className="App">
      {
        user ? (<Quora/>) : (<Login/>)
      }
    </div>
  );
}

export default App;
