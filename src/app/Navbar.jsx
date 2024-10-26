'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

function Navbar() {

    const pathName = usePathname();

  return (
    <div className=" flex justify-around w-dvw p-3 text-lg text-black bg-gray-50">
        <Link className={`link ${pathName === '/' ? 'underline' : ''}`} href="/">Home</Link>
        <Link className={`link ${pathName === '/intro-client' ? 'underline' : ''}`} href="/intro-client">Intro</Link>
    </div>
  )
}

export default Navbar