'use client';

// const HeroSection = () => {        
//     return (
//         <div className="overflow-x-hidden bg-gray-50">
//     {/* <header className="relative py-4 md:py-6">
//         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="relative flex items-center justify-between">
//                 <div className="flex-shrink-0">
//                     <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
//                         <img className="w-auto h-8" src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg" alt="" />
//                     </a>
//                 </div>

//                 <div className="flex lg:hidden">
//                     <button type="button" className="text-gray-900">
//                         <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
//                         </svg>
//                     </button>
//                 </div>

//                 <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
//                     <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Experts </a>

//                     <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Community Groups </a>

//                     <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Support </a>
//                 </div>

//                 <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
//                     <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Login </a>

//                     <a
//                         href="#"
//                         title=""
//                         className="
//                             px-5
//                             py-2
//                             text-base
//                             font-semibold
//                             leading-7
//                             text-gray-900
//                             transition-all
//                             duration-200
//                             bg-transparent
//                             border border-gray-900
//                             rounded-xl
//                             font-pj
//                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
//                             hover:bg-gray-900 hover:text-white
//                             focus:bg-gray-900 focus:text-white
//                         "
//                         role="button"
//                     >
//                         Join community
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </header> */}

//     <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
//         <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//             <div className="max-w-3xl mx-auto text-center">
//                 <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full font-pj">Crafted With Care, Empowering With Purpose</p>
//                 <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-5xl lg:leading-tight font-pj">Empowering Afghanistan Communities  Through Social Services and Development.</h1>
//                 <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">Our mission is to uplift communities by providing essential social
//                 services, empowering individuals, and fostering sustainable development.</p>

//                 <div className="relative inline-flex mt-10 group">
//                     <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

//                     <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
//                         Get access to 4,958 resources
//                     </a>
//                 </div>
//             </div>
//         </div>

//         <div className="mt-16 md:mt-20">
//             <img className="object-cover object-top w-full h-auto mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100" src="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png" alt="" />
//         </div>
//     </section>
// </div>

//     )
// }
// export default HeroSection;

import { ArrowRightIcon, Menu } from 'lucide-react'
import { useState } from 'react'
import BounceButton from '../About us/Who we Are/CTAButton';
import MassageModal from './Massage';
import '../AboutUs/ORG-Background'
import '../AboutUs/Mission'
import '../AboutUs/Vision'
import '../../components/Footer'
import '../Projects'
import Link from 'next/link';
// import WhoWeAre from '../AboutUs/ORG-Background';
const routes = {
  feature: './',
  pricing: '../AboutUs/ORG-Background',
}
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
//   background-color: #8BC6EC;
// background-image: linear-gradient(135deg, #8BC6EC 22%, #9599E2 80%);

  return (
    <header className="relative min-h-screen bg-gradient-to-br bg-[#ffffff] text-gray-700">
      {/* Navbar */}
      <nav className="absolute left-0 right-0 top-0 bg-transparent p-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          {/* Logo */}
          <a href="3" className="text-2xl font-bold">
            DAPSSO
          </a>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 md:flex">
            <Link href={routes.feature} className="hover:underline">
              Home
            </Link>
            <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="">About</div>
            <ul tabIndex={0} className="dropdown-content bg-white border border-gray-200 rounded-lg menu z-[1] w-52 p-2 shadow">
                <li><Link href='#WhoWeAre'>background</Link></li>
                <li><Link href='#Mission'>Mission</Link></li>
                <li><Link href='#Vision'>Vision</Link></li>
            </ul>
            </div>
            <Link href='#Projects' className="">
              Projects
            </Link>
            {/* <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="">Projects</div>
            <ul tabIndex={0} className="dropdown-content bg-white border border-gray-200 rounded-lg menu z-[1] w-52 p-2 shadow">
                <li><a>Education</a></li>
                <li><a>Healthcare</a></li>
                <li><a>Livelihood Support</a></li>
            </ul>
            </div> */}
            <Link href="#Footer" className="">
              Contact Us
            </Link>
          </div>
          <BounceButton />
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full bg-[#ffffff] p-4 md:hidden">
            <a href={routes.feature} className="block py-2">
              Home
            </a>
            <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="">About</div>
            <ul tabIndex={0} className="dropdown-content bg-white border border-gray-200 rounded-lg menu z-[1] w-52 p-2 shadow">
                <li><a>background</a></li>
                <li><a>Vision & mission</a></li>
                <li><a>Leadership</a></li>
            </ul>
            </div>
            <span className='block'></span>
            <div className="dropdown dropdown-hover py-2">
            <div tabIndex={0} role="button" className="">Projects</div>
            <ul tabIndex={0} className="dropdown-content bg-white border border-gray-200 rounded-lg menu z-[1] w-52 p-2 shadow">
                <li><a>Education</a></li>
                <li><a>Healthcare</a></li>
                <li><a>Livelihood Support</a></li>
            </ul>
            </div>
            <a href='#' className="block">
              Contact Us
            </a>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center p-5 pt-24 text-center">
        <img
          src="Brands/Picture1-removebg-preview.svg"
          alt="App Logo"
          width={170}
          height={170}
          className="object-fill"
        />
        <h1 className="pt-4 text-4xl font-bold leading-tight md:text-5xl md:leading-tight">
        Empowering Afghanistan Communities  Through Social Services and Development
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg font-light md:text-xl">
        Our mission is to uplift communities by providing essential social
        services, empowering individuals, and fostering sustainable developmen
        </p>
        <div className="mt-12 flex flex-col justify-center gap-4 md:flex-row">
           {/* Open the modal using document.getElementById('ID').showModal() method */}
           <MassageModal />
        </div>
      </div>
    </header>
  )
}

export default Hero