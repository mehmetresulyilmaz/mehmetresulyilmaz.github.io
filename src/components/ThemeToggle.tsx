import React from 'react';

const ThemeToggle: React.FC<{ toggleTheme: () => void; isDarkMode: boolean }> = ({ toggleTheme, isDarkMode }) => {
    return (
        <button onClick={toggleTheme} style={{ padding: '10px', cursor: 'pointer' }}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};

export default ThemeToggle;