import React, { useState } from 'react';

const Mission = () => {        
    return (
        <div id='Mission' className="relative bg-white">
    <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img className="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" />
    </div>

    <section className="relative py-12 sm:py-4 lg:pt-20 lg:pb-36">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
                <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                    <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Our Mission!</h1>

                        <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                        

                            <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">DAPSSO is committed to empowering Afghan communities by enhancing <span className='font-bold'>education, social services, and economic stability.</span> Through impactful projects, humanitarian aid, and capacity-building initiatives, we strive to create sustainable solutions that improve livelihoods, promote human rights, and foster resilience across Afghanistan.</p>
                        </div>
                    </div>

                    {/* <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center hover:bg-gray-600"
                            role="button"
                        >
                            Get feedback
                        </a>

                        <a
                            href="#"
                            title=""
                            className="
                                inline-flex
                                items-center
                                px-4
                                py-4
                                mt-4
                                text-lg
                                font-bold
                                transition-all
                                duration-200
                                bg-transparent
                                border border-transparent
                                sm:mt-0
                                font-pj
                                justif-center
                                rounded-xl
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300
                                hover:bg-gray-200
                                focus:bg-gray-200
                            "
                            role="button"
                        >
                            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            Download iOS App
                        </a>
                    </div> */}
                </div>

                <div className="xl:col-span-3 sm:mb-12">
                    <img className="w-full h-[35rem] mx-auto" src="Brands/Mission.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

    )
}
export default Mission;