// 'use client';
// import dynamic from "next/dynamic";
// import { AnimatedTestimonials } from "../components/ui/carousel";

// function AnimatedTestimonialsDemo() {
//   const testimonials = [
//     {
//       quote:
//       "Provided sustainable agricultural solutions to enhance food security and economic resilience.",
//       name: "Empowering Communities through Greenhouses (2009)",
//       Feild : 'Farah Provinc',
//       designation: "DAI-ASI",
//       src: "/Brands/WhatsApp Image 2025-02-08 at 19.40.08_d21ef822.jpg",
//     },
//     {
//       quote:
//         "Strengthened media capacity by equipping journalists with essential skills.",
//       name: "Capacity Building of Journalists (2008 & 2009)",
//       Feild : 'Mazar, Kunduz, Herat, Nangarhar, Kabul, and Kandahar',
//       designation: "CIDA (Canadian International Development Agency)",
//       src: "/Brands/WhatsApp Image 2025-02-08 at 19.40.16_286a82bd.jpg",    
//     },
//     {
//       quote:
//         "Promoted literacy, civic awareness, and informed public discourse, especially among women and youth.",
//       name: "Roshni Magazine (2006-2011)",
//       Feild : 'Kabul, Nangarhar, Wardak, Ghazni, and Kunduz',
//       designation: "NED (National Endowment for Democracy)",
//       src: "/Brands/WhatsApp Image 2025-02-08 at 19.40.22_074d02d2 (1).jpg",    
//     },
//     {
//       quote:
//         "Increased awareness of human rights and fostered peacebuilding efforts at the community level.",
//         name: "wareness of Rights for Peace (2006-2008)",
//         Feild : 'Parwan',
//       designation: "Rights and Democracy",
//       src: "/Brands/WhatsApp Image 2025-02-08 at 19.40.24_4db5fae3 (1).jpg",    
//     },
//     {
//       quote:
//         "Supported 25,126 households in Ghazni, ensuring food security and economic resilience during challenging times.",
//       name: "Unconditional Seasonal Support (UCSS) Project (2022-2023)",
//       Feild : 'Ghazni Province',
//       designation: "DAI-ASI",
//       src: "/Brands/WhatsApp Image 2025-02-08 at 19.40.37_a298f07b.jpg",    },
//   ];
//   return (
//      <div id="Projects" className="mb-2 mt-12">
//   <h1 className='text-center sm:p-x-12 items-center text-5xl text-[#252525ed] font-serif font-bold'>Our Projects</h1>
//     <AnimatedTestimonials testimonials={testimonials} />
//      </div>



'use client';
import dynamic from "next/dynamic";
import { AnimatedTestimonials } from "../components/ui/carousel";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Provided sustainable agricultural solutions to enhance food security and economic resilience.",
      name: "Empowering Communities through Greenhouses (2009)",
      Feild: 'Farah Province',
      designation: "DAI-ASI",
      src: "/Brands/WhatsApp Image 2025-02-08 at 19.40.08_d21ef822.jpg",
      links: "https://example.com/greenhouse" // ✅ Added links property
    },
    {
      quote:
        "Strengthened media capacity by equipping journalists with essential skills.",
      name: "Capacity Building of Journalists (2008 & 2009)",
      Feild: 'Mazar, Kunduz, Herat, Nangarhar, Kabul, and Kandahar',
      designation: "CIDA (Canadian International Development Agency)",
      src: "/Brands/WhatsApp Image 2025-02-08 at 19.40.16_286a82bd.jpg",
      links: "https://example.com/journalists"
    },
    {
      quote:
        "Promoted literacy, civic awareness, and informed public discourse, especially among women and youth.",
      name: "Roshni Magazine (2006-2011)",
      Feild: 'Kabul, Nangarhar, Wardak, Ghazni, and Kunduz',
      designation: "NED (National Endowment for Democracy)",
      src: "/Brands/WhatsApp Image 2025-02-08 at 19.40.22_074d02d2 (1).jpg",
      links: "https://example.com/roshni-magazine"
    },
    {
      quote:
        "Increased awareness of human rights and fostered peacebuilding efforts at the community level.",
      name: "Awareness of Rights for Peace (2006-2008)",
      Feild: 'Parwan',
      designation: "Rights and Democracy",
      src: "/Brands/WhatsApp Image 2025-02-08 at 19.40.24_4db5fae3 (1).jpg",
      links: "https://example.com/rights-peace"
    },
    {
      quote:
        "Supported 25,126 households in Ghazni, ensuring food security and economic resilience during challenging times.",
      name: "Unconditional Seasonal Support (UCSS) Project (2022-2023)",
      Feild: 'Ghazni Province',
      designation: "DAI-ASI",
      src: "/Brands/WhatsApp Image 2025-02-08 at 19.40.37_a298f07b.jpg",
      links: "https://example.com/ucss-project"
    },
  ];

  return (
    <div id="Projects" className="mb-2 mt-12">
      <h1 className='text-center sm:p-x-12 items-center text-5xl text-[#252525ed] font-serif font-bold'>Our Projects</h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}

export default dynamic(() => Promise.resolve(AnimatedTestimonialsDemo), { ssr: false });
// )};

// export default dynamic (() => Promise.resolve(AnimatedTestimonialsDemo), {ssr: false})
