import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFire } from '@fortawesome/free-solid-svg-icons'
//import logo from './toppng.com-free-fire-png-logo-fire-flame-clipart-366x600.png'
function AppBar() {
  return (
    <div>
    <nav class=" bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
            <div class="flex items-center px-7 flex-shrink-0 text-white mr-6">
            <a href="" class="flex items-center">
              <FontAwesomeIcon className='mb-2 text-3xl font-bold tracking-tight px-2 text-gray-900 dark:text-white ' icon={faFire}></FontAwesomeIcon>  
            </a>
            <h5 class="sm:text-center mb-2 text-3xl font-bold tracking-tight px-1 text-gray-900 dark:text-white">MetanoGas</h5>
            </div>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="true">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Inicio</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default AppBar