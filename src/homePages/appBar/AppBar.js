import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
//import logo from './toppng.com-free-fire-png-logo-fire-flame-clipart-366x600.png'
function AppBar() {
  return (
    <div>
    <nav class="flex items-center justify-between flex-wrap bg-[#0F2E71] p-4" >
      <div class="flex items-center px-7 flex-shrink-0 text-white mr-6">
      <a href="https://flowbite.com/" class="flex items-center">
        <img src='https://flowbite.com/' ></img>
      </a>
      <h5 class="mb-2 text-3xl font-bold tracking-tight px-5 text-gray-900 dark:text-white">MetanoGas</h5>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto d-none d-md-block">
        <div class="text-right lg:flex-grow mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#responsive-header" class="block mt-4 lg:inline-block  lg:mt-0 text-white hover:text-blue-200 mr-4"> Inicio</a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-200 mr-4"> Sobre nosotros </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-200 mr-4"> Contracto </a>
        </div>
        
      </div>
    </nav>
  </div>
  )
}

export default AppBar