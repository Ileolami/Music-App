import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        document.body.classList.toggle('dark');
        localStorage.setItem('darkMode', newDarkMode.toString());
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className='flex justify-end mr-2 mt-2'>
            <button
                type="button"
                onClick={toggleDarkMode}
                className='text-lg bg-slate-900 text-slate-200 h-10 w-10 rounded-full flex justify-center items-center focus:outline-none'
            >
                {darkMode ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    );
}

export default DarkMode;