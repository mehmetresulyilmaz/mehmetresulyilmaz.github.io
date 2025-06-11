import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', background: '#f1f1f1' }}>
            <p>&copy; {new Date().getFullYear()} Mehmet Resul Yılmaz. All rights reserved.</p>
            <div>
                <a href="https://github.com/mehmetresulyilmaz" target="_blank" rel="noopener noreferrer">GitHub</a> | 
                <a href="https://linkedin.com/in/mehmetresulyilmaz" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;