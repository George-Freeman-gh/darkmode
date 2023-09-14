import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { useState } from 'react';




const App = () =>{

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    return(
        <div className="container">
            <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            />
            <Main
            darkMode={darkMode}
             />
        </div>
    )
}

export default App