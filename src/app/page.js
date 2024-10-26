function Intro() {
  return (
    <div className=" h-dvh w-dvw bg-white text-black flex justify-center items-center flex-col gap-6">
        <h1>Hello, {' '}
            This is Askari
        </h1>
        <p>I am a Full Stack Developer - Trying to be Jack of All</p>
        <p>'Why' you ask?</p>
        <p>I feel unfulfilled in whatever I know so I want to learn <strong className=" italic underline">AND KNOW</strong> more.</p>
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
            <li className=" text-xl text-pretty text-red-400 italic">Always Learning More... Soon adding a few more 😃</li>
        </ul>
        </div>
    </div>
  )
}

export default Intro