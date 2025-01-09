// import React from 'react';
// import Image from "next/image";

// const items = [
//   { src: "/tools-icons/nestjs.png", alt: "NestJS" },
//   { src: "/tools-icons/nextjs.png", alt: "NextJS" },
//   { src: "/tools-icons/psql.png", alt: "PostgreSQL" },
//   { src: "/tools-icons/php.png", alt: "PHP" },
//   // Add more items as needed
// ];

// export default function Hello() {
//   const totalItems = items.length;

//   return (
//     <div className='w-full h-[100vh] text-center overflow-hidden relative'> {/*Banner*/}
//       <div className="absolute w-52 h-64 top-[10%] left-1/2 transform -translate-x-1/2 ml-[-100px] transform-style-3d perspective-[1000px]"> {/*Slider*/}
//         {items.map((item, index) => {
//           const rotation = 360 / totalItems * index
//           return (
//             <div
//               key={index}
//               className= {`absolute inset-0 rotate-y-[${rotation}deg] translate-z-[550px]`}
//               //style={{ transform: rotation }}
//             >
//               <Image src={item.src} alt={item.alt} width={0} height={0} sizes='100vw' className='w-full h-full object-contain' />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import React from 'react';
import Image from "next/image";

const items = [
  { src: "/tools-icons/nestjs.png", alt: "NestJS" },
  { src: "/tools-icons/nextjs.png", alt: "NextJS" },
  { src: "/tools-icons/psql.png", alt: "PostgreSQL" },
  { src: "/tools-icons/reactjs.png", alt: "React" },
  { src: "/tools-icons/php.png", alt: "PHP" },
  { src: "/tools-icons/css.png", alt: "CSS" },
  { src: "/tools-icons/docker.png", alt: "Docker" },
  { src: "/tools-icons/tailwindcss.png", alt: "TailwindCSS" },
  { src: "/tools-icons/ts.png", alt: "TypeScript" },
  { src: "/tools-icons/js.png", alt: "JavaScript" },
  { src: "/tools-icons/github.png", alt: "Github" },

  // Add more items as needed
];

export default function Hello() {
  const totalItems = items.length;

  return (
    <div className='w-full h-[100vh] text-center overflow-hidden relative'> {/*Banner*/}
      {/* <div className="model bg-[url('/file1.png')] w-full h-[100vh] absolute bottom-0 left-0 bg-[length:auto_130%] bg-no-repeat"></div> */}
      <div className="absolute w-52 h-64 top-[20%] left-1/2 transform -translate-x-1/2 ml-[-100px] transform-style-3d perspective-[1000px] animate-orbit z-0"> {/*Slider*/}
        {items.map((item, index) => {
          const rotation = `rotateY(${(index * (360 / totalItems))}deg) translateZ(550px)`;
          return (
            <div
              key={index}
              className='absolute inset-0'
              style={{ transform: rotation }}
            >
              <Image src={item.src} alt={item.alt} width={0} height={0} sizes='50vw' className='w-full h-full object-contain' />
            </div>
          );
        })}
      </div>
    </div>
  );
}