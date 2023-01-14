import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <section className='max-w-[full] h-[1400px] w-1300px bg-[#0F2E71] md:h-[780px]' id='contact'>    

       <div class="h-56 grid grid-cols-1 gap-4 content-start ... md:grid-cols-1 md:grid-cols-2">
          <div class="max-w-[1100px] h-[650px] w-1100px m-auto py-20 px-10 relative group ">
             
                  <a href="https://goo.gl/maps/f8EWNmELpwEu6APy9" class="block max-w-sm p-6 bg-white border text-center border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-300">
                      <FontAwesomeIcon className='mb-2 text-center text-6xl font-bold tracking-tight text-[#0F2E71] ' icon={faMapLocation}></FontAwesomeIcon>  
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Ubicación</h5>
                      <p class="font-normal text-gray-700 dark:text-gray-700">calle pando entre madre de dios II</p>
                  </a>
                  <br></br>
                  <br></br>
                  <a href="https://wa.me/qr/P2EOGLUXVMLKA1" class="block max-w-sm p-6 bg-white border text-center border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-300">
                      <FontAwesomeIcon className='mb-2 text-center text-6xl font-bold tracking-tight text-[#0F2E71] ' icon={faPhone}></FontAwesomeIcon>  
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Telefono celular</h5>
                      <p class="font-normal text-gray-700 dark:text-gray-700">llamanos a nuestra whtaspp</p>
                  </a>
             
            </div>
            
          <form className='p-10 py-1 md:p-10 md:py-20'>
              <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ingrese sus nombres" required></input>
              </div>
              <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
                <input type="text" id="lastname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ingrese sus apellidos" required></input>
              </div>
              <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electronico</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ingrese su correo" required></input>
              </div>
              <div class="mb-6">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu mensaje</label>
                 <textarea id="message" rows="4" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder=""></textarea>
              </div>
              
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
            </form>
        </div>

    </section>
  )
}

export default Contact