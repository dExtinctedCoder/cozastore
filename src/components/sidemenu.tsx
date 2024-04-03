import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Menu = () => {
  const ref = useRef({} as HTMLElement)

  const { contextSafe } = useGSAP(() => {
    gsap.set(ref.current, {
      x: "-100%",
      opacity: 0,
    })
  }, [])

  const hideMenu = contextSafe(() => {
    gsap.fromTo(".menu", {
      x: "0",
      opacity: 1,
    }, {
      x: "-100%",
      opacity: 0,
    })
    gsap.set("#menu-hamburger", {
      opacity: 0,
    })
    gsap.set("#menu-hamburger>.nth-1", {
      top: 0,
      opacity: 1,
      rotate: 0
    })
    gsap.set("#menu-hamburger>.nth-2", {
      top: "8px",
      opacity: 1,
      left: 0
    })
    gsap.set("#menu-hamburger>.nth-3", {
      top: "16px",
      rotate: 0
    })

  })

  return (
    <aside ref={ref} className="lg:hidden menu shadow-md shadow-black bg-[#333] p-8 fixed top-0 left-0 h-full text-white z-30 min-w-[85vw]">
      <button title="close menu" id="menu-hamburger" onClick={hideMenu} className="transition-all mx-auto mr-0 w-10 h-12 relative flex items-center focus:outline-0 lg:hidden">
        <span className="nth-1 transition-all shadow-sm shadow-gray-50 block w-full bg-white h-1 rounded-md absolute left-0 top-0"></span>
        <span className="nth-2 transition-all shadow-sm shadow-gray-50 block w-full bg-white h-1 rounded-md absolute left-0 top-2"></span>
        <span className="nth-3 transition-all shadow-sm shadow-gray-50 block w-full bg-white h-1 rounded-md absolute left-0 top-4"></span>
      </button>

      <menu className="flex flex-col gap-y-2 basis-full flex-grow px-8 py-12">
        <li><a onClick={hideMenu} className="text-lg font-medium mnt-regular tracking-wide hover:tracking-widest focus:outline-none focus:tracking-widest focus:text-blue-200 hover:text-blue-200 inline-block py-2" href="#">Shop</a></li>
        <li><a onClick={hideMenu} className="text-lg font-medium mnt-regular tracking-wide hover:tracking-widest focus:outline-none focus:tracking-widest focus:text-blue-200 hover:text-blue-200 inline-block py-2" href="#">On Sale</a></li>
        <li><a onClick={hideMenu} className="text-lg font-medium mnt-regular tracking-wide hover:tracking-widest focus:outline-none focus:tracking-widest focus:text-blue-200 hover:text-blue-200 inline-block py-2" href="#">New Arrivals</a></li>
        <li><a onClick={hideMenu} className="text-lg font-medium mnt-regular tracking-wide hover:tracking-widest focus:outline-none focus:tracking-widest focus:text-blue-200 hover:text-blue-200 inline-block py-2" href="#">Brands</a></li>
      </menu>
    </aside>
  )
}
export default Menu