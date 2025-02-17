// import Navbar from "@/components/Navbar";
// import { BackgroundBeamsWithCollisionDemo } from "./Hero";
import AnimatedTestimonialsDemo from "./Projects";
import AnimatedLogoCloud from "./Logo Clouds";
// import { BentoGridThirdDemo } from "./Dapsoo's Projects";
import Faq from "./faq";
import HoverSpring from "./Features";
import { TabsDemo } from "./About us/About Us";
import { InfiniteMovingCardsDemo } from "./Our Impact";
import { MassageOfDirector } from "./Massage";
import Footer from "@/components/Footer";
import Hero from "./Hero Section/HeroSection";
import AboutUs from "./AboutUs/ORG-Background";
import { Vision } from "./About us/Mission & vision/Vision";
import VisionSec from "./AboutUs/Vision";
import Mission from "./AboutUs/Mission";


export default function Home() {
  return (
    <>
{/* <Navbar />              */}
{/* <BackgroundBeamsWithCollisionDemo />    */}
<Hero />
<AnimatedLogoCloud />   
<AboutUs />
<Mission />
<VisionSec />                              
<AnimatedTestimonialsDemo />             
{/* <MassageOfDirector />                 */}
<InfiniteMovingCardsDemo />           
{/* <BentoGridThirdDemo /> */}     
<HoverSpring />                         
<Faq />                               
<Footer />                             

    </>
  );
}
