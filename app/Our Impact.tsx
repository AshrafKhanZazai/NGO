"use client";

import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div id="OurImpact" className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
          <h1 className='text-center sm:p-x-12 items-center text-5xl  mb-24 text-[#252525ed] font-serif font-bold'>Our Impact</h1>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Provided food and cash assistance to over 25,126 households in Ghazni under the UCSS project, ensuring stability for vulnerable families.",
    name: "Humanitarian Aid & Economic Resilience ",
    title: "Impact",
  },
  {
    quote:
      "Empowered youth and women in Zabul, Paktika, and Kabul with technical skills, increasing employability and financial independence.",
    name: " Vocational Training & Employment",
    title: "Impact",
  },
  {
    quote: "Strengthened medical services in Balkh Province, ensuring better healthcare access for underserved communities.",
    name: "Healthcare & Social Welfare",
    title: "Impact",
  },
  {
    quote:
      "Published Roshni Magazine (2006-2011), promoting civic awareness and education in Kabul, Nangarhar, Wardak, Ghazni, and Kunduz.",
    name: "Education & Literacy ",
    title: "Impact",
  },
  {
    quote:
      " Trained journalists in Mazar, Kunduz, Herat, Nangarhar, Kabul, and Kandahar, enhancing press freedom and responsible reporting.",
    name: "Human Rights & Media Development",
    title: "Impact",
  },
];
