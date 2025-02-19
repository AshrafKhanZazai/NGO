"use client";
import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQS = [
  {
    title: "What is DAPSSO?",
    desc: "DAPSSO (Development of Afghanistan People and Social Services Organization) is a non-profit organization committed to enhancing social and economic conditions in Afghanistan through education, health services, vocational training, and humanitarian aid.",
  },
  {
    title: "When was DAPSSO established?",
    desc: "DAPSSO was originally founded in 1994 under the name 'Health and Development for Afghan Community Women (HDCAW)' and later rebranded in 2024 to better serve the needs of the Afghan people.",
  },
  {
    title: "What are DAPSSO’s main focus areas?",
    desc: "DAPSSO focuses on education, vocational training, health awareness, human rights, emergency assistance, and agricultural sustainability to improve Afghan communities' quality of life.",
  },
  {
    title: "What are some of DAPSSO’s notable achievements?",
    desc: "DAPSSO has successfully implemented over 20 major projects, including the Unconditional Seasonal Support Project (2022-2023) that assisted over 25,000 households and vocational training programs for youth and women in multiple provinces.",
  },
  {
    title: "How does DAPSSO collaborate with other organizations?",
    desc: "DAPSSO partners with international donors, government agencies, local authorities, and community elders to ensure effective project implementation, receiving funding from organizations like USAID, World Bank, and the Asia Foundation.",
  },
  {
    title: "How can I support or contribute to DAPSSO’s initiatives?",
    desc: "You can support DAPSSO by donating, volunteering, or partnering with the organization for community initiatives.",
  },
  {
    title: "Where is DAPSSO currently operating?",
    desc: "DAPSSO operates across multiple provinces in Afghanistan, including Ghazni, Kabul, Nangarhar, Kandahar, Herat, and Balkh, among others.",
  },
  {
    title: "How can I contact DAPSSO?",
    desc: "You can contact DAPSSO through their official website, email, or office locations. Visit the website for more details.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-8 mt-32">
      <div className="container mx-auto">
        <div className="text-center">
          {/* Ensure all required props are provided */}
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
            placeholder=""
            onPointerEnterCapture={() => { } }
            onPointerLeaveCapture={() => { } } children={undefined}          >
            {/* Optionally add a subtitle or description here */}
          </Typography>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <AccordionHeader className="text-left text-gray-900" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                  // If Typography here doesn’t require these props,
                  // you might not need to supply them. But if TypeScript complains,
                  // you can add them too:
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
