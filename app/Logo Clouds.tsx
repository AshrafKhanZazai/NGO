const logos = [
    {
      id: 1, 
      name: 'Vercel',
      url: 'Brands/2shSQ0kFx2MtlvSc3iaKELkvzyR.svg',
    },
    {
      id: 2,  
      name: 'Nextjs',
      url: 'Brands/2shVcM9f31TYxKyhQXf2L5x1mkU.svg',
    },
    {
      id: 3,
      name: 'Prime',
      url: 'https://populardemocracy.org/wp-content/uploads/2025/01/RAD-logo_FINAL-_CLR_ver_01_0-3.gif',
    },
    {
      id: 4,
      name: 'Trustpilot',
      url: 'https://cf-sparkai-live.s3.amazonaws.com/users/12566423/spark_ai/o_bg-remover-gen_2shZVoHCCcNpnMOouNBVov5Janc.png',
    },
    {
      id: 5,
      name: 'Webflow',
      url: 'Brands/2shVoUSw6UMXT2kwv2cRAFHWDz7.svg',
    },
  
    {
      id: 6,
      name: 'Airbnb',
      url: 'Brands/2shVrDLB0Oepty9sgQDcjCsSsHs.svg',
    },
    {
      id: 7,
      name: 'Tina',
      url: 'Brands/2shVstSdS8Zl9u5F7xSYHvV7lrR.svg',
    },
    {
      id: 8,
      name: 'Stackoverflow',
      url: 'Brands/2shVulTsx3tBC3fWFmZcMX0i7Pp.svg',
    },
    {
      id: 9,
      name: 'mistral',
      url: 'https://www.international.gc.ca/world-monde/assets/images/funding-financement/canada-aid-aide/canada-wordmark-colour.png',
    },
    {
      id: 10,
      name: 'mistral',
      url: 'https://brandlogos.net/wp-content/uploads/2021/12/world_bank-brandlogo.net_.png',
    },
  ];
  
  const AnimatedLogoCloud = () => {
      return (
          <div className="w-full py-12">
        <div className="mx-auto w-full px-4 md:px-8">
          <div
            className="group relative mt-6 flex gap-6 overflow-hidden p-2"
            style={{
                maskImage:
                "",
            }}
            >
            {Array.from({ length: 5 }, (_, index) => (
              <div
              key={`loop-${index}`} // Unique key for each outer div
              className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo) => (
                  <img
                    key={logo.id} // Unique key from the logo object
                    src={logo.url}
                    className="h-auto w-36 object-contain px-2"
                    alt={logo.name}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AnimatedLogoCloud;
  




  // Other why to use this. But this one is not clean
  
  //   const AnimatedLogoCloud = () => {
  //     return (
  //       <div className="w-full py-12">
  //         <div className="mx-auto w-full px-4 md:px-8">
  //           <div
  //             className="group relative mt-6 flex gap-6 overflow-hidden p-2"
  //             style={{
  //               maskImage:
  //                 'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
  //             }}
  //           >
  //             {Array(5)
  //               .fill(null)
  //               .map((index) => (
  //                 <div
  //                   key={index}
  //                   className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
  //                 >
  //                   {logos.map((logo) => (
  //                     <img
  //                       key={logo.id}
  //                       src={logo.url}
  //                       className="h-10 w-28 px-2 brightness-0  dark:invert"
  //                       alt={`${logo.name}`}
  //                     />
  //                   ))}
  //                 </div>
  //               ))}
  //           </div>
  //         </div>
  //       </div>
  //     )
  //   }
  
//   export default AnimatedLogoCloud