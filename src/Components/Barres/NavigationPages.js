import React from 'react';
import { NavLink } from 'react-router-dom';
import MyComponent from './MyComponent';

const NavigationPages = () => {
    return (
       <div className="navigation">
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <NavLink to="/">
                <li class=" mr-3 inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">accueil</li>
            </NavLink>
            <NavLink to="/about">
                <li class=" mr-3 inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">A Propos</li>
            </NavLink>
            <NavLink to="/infosmagasins">
                <li  class=" mr-3 inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Infos Magasins</li>
            </NavLink>
            <NavLink to="/ShibaPrice">
            <li  class=" mr-3 inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Crypto</li>
            </NavLink>    
            
        </ul>
       </div>
    );
};

export default NavigationPages;