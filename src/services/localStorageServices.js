import React from 'react';

export const getArrFromStorage = () => {
    const arrayFromLS = JSON.parse(localStorage.getItem('arrOfLS'));
    return arrayFromLS || []
}

export const setToLocalStorage = (obj) => {
    localStorage.setItem('arrOfLS', JSON.stringify(obj));
}