// import Image from "next/image";
import Hero from "@/components/Hero";
import Hello from "@/components/Hello";

export default function Home() {
  return (
    <div className="snap snap-y snap-mandatory h-screen overflow-y-scroll">
      <div className="bg-[#292e30] flex h-screen snap-start">
        <Hero />
      </div>
      <div className="bg-red-100 flex h-screen snap-start">
        <Hello />
      </div>
      <div className="bg-green-500 flex justify-center items-center h-screen snap-start">
        Little brief about me
      </div>
      <div className="bg-blue-500 flex justify-center items-center h-screen snap-start">
        My experience
      </div>
      <div className="bg-purple-500 flex justify-center items-center h-screen snap-start">
        My projects
      </div>
      <div className="bg-yellow-500 flex justify-center items-center h-screen snap-start">
        My side projects and certifications
      </div>
    </div>
  );
}
