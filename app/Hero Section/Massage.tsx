// import { useRef } from "react";
// import { Card } from "flowbite-react";

// const MassageModal = () => {
//   const modalRef = useRef<HTMLDialogElement>(null);

//   const openModal = () => {
//     modalRef.current?.showModal();
//   };

//   return (
//     <div>
//       <button className="btn btn-ghost bg-slate-" onClick={openModal}>
//       Director Massage
//       </button>

//       <dialog ref={modalRef} id="my_modal_1" className="modal h-fullS">
//        <Card className="max-w-[70rem] overflow-scroll p-4 text-start border-gray-50">
//              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                Director Massage
//              </h5>
//              <p className="italic font-sans font-bold">Dear Partners, Supporters, and Stakeholders,</p>
//        <p className=""> It is my privilege to welcome you to the Office of Development of Afghanistan People and Social Services Organization <strong>(DAPSSO)</strong>. We are passionate about changing society through delivering social services to the underserved population of Afghanistan, thus facilitating sustainable development of the country.
//         Since our founding, DAPSSO has partnered with other organizati provide over a dozen programs and services to address th serious humanitarian and development problems of Afghanistan  center of our activities AADDDE has worked with coope principles. Our projects in education, health care, com livelihood support, demining, and social services have strength number of communities and built their resilience.
//         A unified approach to problem solving ensures sustainability.  to the collective efforts of our donors, partners, and a d team, we believe that a self-sufficient and prosperous Afghanis possible.
//         Let us put our hands together to provide the country wi necessary changes and build a future filled with hope and ta possibilities for every citizen.</p>
       
//        <p className="italic font-sans font-bold">Yours sincerely,</p>
       
//        <p className="italic font-sans font-bold"> Nangialy Wardak </p>
       
//        <p className="italic font-sans font-bold">Director, DAPSSO</p>
//             <form method="dialog" className="flex justify-end">
//               {/* If there is a button in form, it will close the modal */}
//               <button className="bg-gray-800 px-8 py-2 rounded-md text-white">Close</button>
//             </form>
//            </Card>
//       </dialog>
//     </div>
//   );
// };

// export default MassageModal;

import { useRef } from "react";
import { Card } from "flowbite-react";

const MassageModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <div>
      <button className="btn btn-ghost bg-slate-200" onClick={openModal}>
        Director Massage
      </button>

      <dialog ref={modalRef} id="my_modal_1" className="modal h-fullS">
        <Card className="max-w-[70rem] overflow-y-auto max-h-[80vh] p-4 text-start border-gray-50">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Director Massage
          </h5>
          <p className="italic font-sans font-bold">Dear Partners, Supporters, and Stakeholders,</p>
          <p>
            It is my privilege to welcome you to the Office of Development of Afghanistan People and Social Services Organization <strong>(DAPSSO)</strong>. We are passionate about changing society through delivering social services to the underserved population of Afghanistan, thus facilitating sustainable development of the country.
            Since our founding, DAPSSO has partnered with other organizations to provide over a dozen programs and services to address the serious humanitarian and development problems of Afghanistan. At the center of our activities, AADDDE has worked with cooperative principles. Our projects in education, healthcare, livelihood support, demining, and social services have strengthened the number of communities and built their resilience.
            A unified approach to problem-solving ensures sustainability. Thanks to the collective efforts of our donors, partners, and team, we believe that a self-sufficient and prosperous Afghanistan is possible.
            Let us put our hands together to provide the country with the necessary changes and build a future filled with hope and tangible possibilities for every citizen.
          </p>
          <p className="italic font-sans font-bold">Yours sincerely,</p>
          <p className="italic font-sans font-bold">Nangialy Wardak</p>
          <p className="italic font-sans font-bold">Director, DAPSSO</p>
          <form method="dialog" className="flex justify-end">
            {/* If there is a button in form, it will close the modal */}
            <button className="bg-gray-800 px-8 py-2 rounded-md text-white">Close</button>
          </form>
        </Card>
      </dialog>
    </div>
  );
};

export default MassageModal;

