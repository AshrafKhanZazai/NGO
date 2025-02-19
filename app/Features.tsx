'use client';
import { motion } from 'framer-motion'
import Image from 'next/image'

const ProjectsData = [
  {
    id: 1,
    name: 'Education',
    description: ' Provides literacy programs, teacher training, and educational publications to enhance learning opportunities.',
    link: '#',
    image: 'https://ansubkhan.com/images/projects/syntaxUI.svg',
  },
  {
    id: 2,
    name: 'Health Services',
    description: 'Offers basic healthcare, health awareness campaigns, and medical support for communities.',
    link: '#',
    image: 'https://ansubkhan.com/images/projects/prettyfolio.png',
  },
  {
    id: 3,
    name: 'Vocational Training',
    description: 'Equips youth and women with job skills to improve employability and economic independence.',
    link: '/#',
    image: 'https://ansubkhan.com/images/projects/enchant.png',
  },
  {
    id: 4,
    name: 'Emergency Relief',
    description: 'Provides food, cash assistance, and essential supplies to vulnerable families in crisis situations.',
    link: '#',
    image: 'https://ansubkhan.com/images/projects/portfolio.png',
  },
  {
    id: 5,
    name: 'Livelihood Support',
    description: ' Implements agricultural and economic programs to improve food security and income generation.',
    link: '#',
    image: 'https://ansubkhan.com/images/projects/quote-vault.png',
  },
  {
    id: 6,
    name: 'Human Rights Awareness',
    description: 'Conducts legal education and awareness programs to promote rights and peacebuilding.',
    link: '#',
    image: 'https://ansubkhan.com/images/projects/quote-vault.png',
  },
]

const HoverSpring = () => {
  return (
    // <div>
    //   <div className="grid w-full grid-cols-2 gap-x-10 md:grid-cols-3 justify-between">
    //     {ProjectsData.map((project) => {
    //       return (
    //         <motion.div
    //           whileHover={{
    //             y: -8,
    //           }}
    //           transition={{
    //             type: 'spring',
    //             bounce: 0.7,
    //           }}
    //           key={project.id}
    //           className="mt-5 text-left"
    //         >
    //           <a target="_blank" rel="noopener noreferrer" href={project.link}>
    //             <Image
    //               src={project.image}
    //               width={30}
    //               height={30}
    //               className="mb-3 rounded-lg border-gray-400 dark:border"
    //               alt={project.name}
    //             />
    //             <div className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
    //               {project.name}
    //             </div>
    //             <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
    //               {project.description}
    //             </div>
    //           </a>
    //         </motion.div>
    //       )
    //     })}
    //   </div>
    // </div>


<div>
    <h1 className='text-center items-center text-5xl  mb-24 text-[#252525ed] font-serif font-bold'>Our Services</h1>
  <div className="grid w-full p-4 grid-cols-2 gap-x-2 md:grid-cols-3 justify-items-center items-center">
    {ProjectsData.map((project) => {
      return (
        <motion.div
          whileHover={{
            y: -8,
          }}
          transition={{
            type: 'spring',
            bounce: 0.7,
          }}
          key={project.id}
          className="mt-5 text-left"
        >
          <a target="_blank" rel="noopener noreferrer" href={project.links}>
            <Image
              src={project.image}
              width={30}
              height={30}
              className="mb-3 rounded-lg border-gray-400 dark:border"
              alt={project.name}
            />
            <div className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
              {project.name}
            </div>
            <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
              {project.description}
            </div>
          </a>
        </motion.div>
      );
    })}
  </div>
</div>

  )
}

export default HoverSpring
