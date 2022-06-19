import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import {Provider} from 'react-redux'
import configureStore from './store/store'
import {Routes,BrowserRouter as Router,Route} from 'react-router-dom'
import Profile from "./views/Profile/Profile";
import {useState} from 'react'
import { ThemeProvider } from "styled-components";
import {lightTheme,darkTheme} from './theme/theme'

const store = configureStore()

function App() {

  const [isDarkTheme,setDarkTheme] = useState(false)

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="App">
        <Router>
          <Navbar isDark={isDarkTheme} toggleTheme={toggleTheme}/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/users/:userID' element={<Profile/>} />
          </Routes>
        </Router>
      </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
