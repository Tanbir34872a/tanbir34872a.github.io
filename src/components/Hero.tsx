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
'use client'
import React, {HTMLAttributes} from 'react';
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



function Blob() {
  return (
    <div className="blobs absolute w-[60vh] h-[60vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/8">
      {/* Blob A */}
      <div className="blob a absolute w-full h-full rounded-full bg-[#A9C1CB] bg-opacity-[80%] blur-80 animate-random-circular2"></div>
      {/* Blob B */}
      <div className="blob b absolute w-full h-full rounded-3xl bg-[#C9D4D6] bg-opacity-[50%] blur-80 animate-random-circular"></div>
      {/* Blob C */}
      <div className="blob c absolute w-full h-full rounded-full bg-[#A9C1CB] blur-80 animate-random-circular"></div>
    </div>
  )
}

export function AvatarHalo({ className }: HTMLAttributes<HTMLDivElement>) {
  const totalItems = items.length;
  return (
    <div className={`w-[50vw] h-[50vw] text-center overflow-hidden relative fade-out-circle ${className}`}> {/*Banner*/}
      <Blob />
      <Image src={'/file1.png'} alt='Tanbir Yousuf' width={0} height={0} sizes='100vh' className='w-auto h-[60%] left-1/4 absolute -bottom-10 fade-out-bottom' />
      <div className="absolute w-10 h-32 top-[50%] left-[43%] transform -translate-x-1/2 ml-[-100px] transform-style-3d perspective-[200px] animate-orbit z-0"> {/*Slider*/}
        {items.map((item, index) => {
          const rotation = `rotateY(${(index * (360 / totalItems))}deg) translateZ(105px)`;
          return (
            <div
              key={index}
              className='absolute inset-0'
              style={{ transform: rotation }}
            >
              <Image src={item.src} alt={item.alt} width={0} height={0} sizes='10vw' className='w-full h-full object-contain' />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hello() {
  return (
    <div className='w-full h-[100vh] flex flex-row justify-between text-center overflow-hidden relative '> {/*Banner*/}
      <div className='flex flex-col justify-center items-center w-1/2 h-full'>
        <h1 className='text-4xl font-bold text-white'>Tanbir Yousuf</h1>
        <p className='text-xl text-white'>A Junior Fullstack Developer</p>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/Tanbir34872a" target="_blank" rel="noreferrer">
            <Image src="/logos/linkedin-white.png" alt="LinkedIn" width={50} height={50} className='border-[#f3f3f3] border-2 rounded-full p-1 '  />
          </a>
          <a href="https://github.com/Tanbir34872a" target="_blank" rel="noreferrer">
            <Image src="/logos/github-white.png" alt="GitHub" width={50} height={50} className='border-[#f3f3f3] border-2 rounded-full p-1 ' />
          </a>
          <a href="mailto:tanbir.yousuf@outlook.com" target="_blank" rel="noreferrer">
            <Image src="/logos/email-white.png" alt="Email" width={50} height={50} className='border-[#f3f3f3] border-2 rounded-full p-1 '  />
          </a>
          <a href="tel:+8801609086811" target="_blank" rel="noreferrer">
            <Image src="/logos/phone-white.png" alt="Telephone" width={50} height={50} className='border-[#f3f3f3] border-2 rounded-full p-1 '  />
          </a>
        </div>
        <div className="flex space-x-4 mt-4 border-[#f3f3f3] border-2 rounded-3xl p-1 h-10 flex-row justify-center items-center object-fill">
          {/* <a href="tel:+8801609086811" target="_blank" rel="noreferrer" className=''> */}
            <Image src="/logos/phone-white.png" alt="Telephone" width={50} height={10} className='object-fill' />
            <p>Check my Resume</p>
          {/* </a> */}
        </div>
      </div>
      <AvatarHalo className='bottom-52'/>
    </div>
  );
}