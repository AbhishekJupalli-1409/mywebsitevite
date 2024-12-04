import React from 'react'
import image from '../assets/macbook.avif'
const Loginpage = () => {
    return (
        <>

            <div className='justify-center flex flex-row w-full'>

            <div class="grow-[2] basis-0 flex min-h-full flex-col w-2/5 max-md:w-full px-4 py-12 lg:px-8">

                    <div class="sm:mx-auto flex flex-col  justify-start sm:w-full sm:max-w-sm">
                        <div><img class="  h-10" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /></div>
                        
                        <h2 class="mt-5  text-left text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                        <p class=" text-left mt-2 text-sm/6 text-gray-500">
                            Not a member?
                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                        </p>
                       
                    </div>

                    <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-6" action="/home" method="GET">
                            <div>
                                <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                                <div class="mt-2">
                                    <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                                    
                                </div>
                                <div class="mt-2">
                                    <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="left inline">
                                    <input type="radio" id='remember' />
                                    <label class="ml-1 text-sm/6 font-normal text-gray-900" htmlFor="remember">Remember me</label>
                                </div>
                                <div class="inline text-sm text-right">
                                        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                    
                                </div>
                            </div>
                            <div>
                               <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Sign in</button>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="flex-grow h-0.5 bg-gray-200"></div>
                                <p class="font-semibold text-center text-xs">Or continue with</p>
                                <div class="flex-grow h-0.5 bg-gray-200"></div>
                            </div>
                            <div class="flex items-center w-full justify-around">
                                <button class="font-semibold flex w-20 h-8 items-center justify-center border rounded-sm boeder-gray-200 ">
                                   <div>Google</div>
                                </button>
                                <button class="font-semibold flex w-20 h-8 items-center justify-center border rounded-sm border-gray-200  ">
                                    <div>Github</div>    
                                </button>
                            </div>

                        </form>

                       
                    </div>
                </div>
                <div className='grow-0 basis-auto w-3/5 max-md:hidden  overflow-hidden'>
                    <img className=' h-dvh w-full object-cover ' src={image} alt="" />
                </div>

            </div>


        </>
    )
}

export default Loginpage
