import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export let useDarkMode = () => {
    let [darkMode, setDarkMode] = useLocalStorage('darkMode', false)
    let body = document.body;

    useEffect(() => {
        if(darkMode === true) {
            body.classList.add('dark-mode')
        }
        else{
            body.classList.remove('dark-mode')
        }
    }, [darkMode, body.classList])
    return [ darkMode, setDarkMode ]
}