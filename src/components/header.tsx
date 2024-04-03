import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SearchIcon from "../assets/icons/search.png"
import ProfileIcon from "../assets/icons/user.png"
import CartIcon from "../assets/icons/cart.png"

const Header = () => {
  const ref = useRef({} as HTMLElement)
  const { contextSafe } = useGSAP(() => {
    gsap.to(ref.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut"
    })
  }, [])

  const showMenu = contextSafe(() => {
    const hamburgerTl = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
        delay: 0.3,
        duration: 0.3
      }
    })
    gsap.fromTo(".menu", {
      x: "-100%",
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      ease: "power3.inOut"
    })
    hamburgerTl.set("#menu-hamburger", {
      opacity: 1,
    })
    hamburgerTl.to("#menu-hamburger>.nth-1", {
      top: "8px",
      rotate: "135deg",
      delay: 0,
    })
    hamburgerTl.to("#menu-hamburger>.nth-2", {
      opacity: 0,
      left: 60,
      delay: 0
    })
    hamburgerTl.to("#menu-hamburger>.nth-3", {
      top: "8px",
      rotate: "-135deg",
      delay: 0
    })
  })

  return (
    <header ref={ref} className="shadow-sm opacity-0 -translate-y-full bg-white z-20 sticky top-0 w-full">
      <nav className="flex items-center p-4 md:px-8 md:py-6 gap-x-2">
        <button title="open menu" onClick={showMenu} className="hamburger focus:outline-0 w-10 h-[22px] relative flex items-center lg:hidden">
          <span className="block w-[90%] bg-gray-800 h-[5px] rounded-xl"></span>
        </button>

        <ul className="flex justify-between w-full md:gap-x-8 lg:gap-x-10">
          <a href="#" className="hover:text-gray-400 text-lg md:text-2xl flex items-center justify-center mnt-bold font-bold">SHOP.CO</a>
          <menu className="hidden lg:flex items-center flex-grow justify-between gap-x-4 mnt-regular">
            <li><a className="font-medium hover:text-gray-400" href="#">Shop</a></li>
            <li><a className="font-medium hover:text-gray-400" href="#">On Sale</a></li>
            <li><a className="font-medium hover:text-gray-400" href="#">New Arrivals</a></li>
            <li><a className="font-medium hover:text-gray-400" href="#">Brands</a></li>
          </menu>
          <input type="text" aria-labelledby="search" placeholder="Search..." className="hidden md:flex bg-gray-100 px-4 py-2 rounded-2xl w-1/4 md:basis-full lg:basis-auto md:flex-grow" />
          <div className=" flex items-center justify-end w-full flex-grow gap-x-2 md:basis-56 md:gap-x-6">
            <li tabIndex={0}>
              <img className="w-6 h-6 hover:w-7 hover:h-7 cursor-pointer md:w-9 md:h-9 md:hidden" src={SearchIcon} alt="search" />
            </li>
            <li><a href="#">
              <img className="w-6 h-6 hover:w-7 hover:h-7 md:w-9 md:h-9" src={CartIcon} alt="cart" /></a>
            </li>
            <li><a href="#">
              <img className="w-6 h-6 hover:w-7 hover:h-7 md:w-9 md:h-9" src={ProfileIcon} alt="profile" /></a>
            </li>
          </div>
        </ul>
      </nav>
    </header>

  )
}
export default Header