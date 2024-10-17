"use client";

import { useRouter } from "next/navigation";
function page() {
  const router = useRouter();
  return (
    <div className=" h-max w-dvw bg-white text-black flex justify-center items-center flex-col gap-6">
      <h1>This component is being rendered on Client</h1>
      <p>
        We will use <code>useRouter()</code> hook to implement routing in this
        page
      </p>
      <p>
        We should use <code>Link</code> from <code>next/navigation</code> unless
        we absolutely need to use <code>useRouter()</code>
      </p>
      <div className="w-full justify-center flex space-x-6 p-4 border-2 border-black border-dotted">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          onClick={() => router.push("/")}
        >
          Home
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          onClick={() => router.push("/intro")}
        >
          Intro-Server
        </button>
      </div>
      <h1>Hello, This is Askari</h1>
      <p>I am a Full Stack Developer - Trying to be Jack of All</p>
      <p>'Why' you ask?</p>
      <p>
        I feel unfulfilled in whatever I know so I want to learn{" "}
        <strong className=" italic underline">AND KNOW</strong> more.
      </p>
      <div className=" flex flex-col gap-2 mb-4">
        <p>I currently have knowledge of ~</p>
        <ul className="list-disc">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>Python</li>
          <li>Docker</li>
          <li>Amazon Web Services</li>
          <li>Google Cloud Platform</li>
          <li>PHP Open Source Frameworks</li>
          <li>Cpanel</li>
          <li>MongoDB</li>
          <li>Nextjs</li>
          <li>Zustand</li>
          <li>Tailwind</li>
          <li>Styled Components</li>
          <li className=" text-xl text-pretty text-red-400 italic">
            Always Learning More... Soon adding a few more 😃
          </li>
        </ul>
      </div>
    </div>
  );
}

export default page;
