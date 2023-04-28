import React, { useState, useEffect } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const ToggleTheme = () => {
    const [theme, setTheme] = useState('light');

    // if local storage is empty save theme as light
    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'light');
        }
    }, []);

    useEffect(() => {
        // select html elem
        const html = document.querySelector('html');
        if (localStorage.getItem('theme') === 'dark') {
            html.classList.add('dark');
            setTheme('dark');
        } else {
            html.classList.remove('dark');
            setTheme('light');
        }
    }, [theme]);

    // handle switch theme
    const handleThemeSwitch = () => {
        if (localStorage.getItem('theme') === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className="w-[50px] flex items-center">
            <div className="p-2 " onClick={handleThemeSwitch}>
                {theme === 'light' ? <BsMoon /> : <BsSun />}
            </div>
        </div>
    );
};

export default ToggleTheme;
