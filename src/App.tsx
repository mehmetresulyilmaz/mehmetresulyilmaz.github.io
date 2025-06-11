import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import ThemeToggle from './components/ThemeToggle';
import './styles/global.css';

const App: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <Header />
            <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <About />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;