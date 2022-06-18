import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import {Provider} from 'react-redux'
import configureStore from './store/store'
import {Routes,BrowserRouter as Router,Route} from 'react-router-dom'
import Profile from "./views/Profile/Profile";

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/users/:userID' element={<Profile/>} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
