import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)
const Header = () => {
  const ref = useRef({} as HTMLUListElement)

  useGSAP(() => {
    gsap.fromTo(ref.current.children, {
      x: "-100%",
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "top bottom"
      }
    })
    gsap.fromTo(".icon-socials", {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.125,
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "top bottom"
      }
    })
    gsap.fromTo("#copyright", {
      y: 100
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "top bottom"
      }
    })
  }, [])

  return (
    <footer className="px-4 py-8 md:px-6 md:py-10 lg:px-10 lg:py-12 bg-[#222222] text-white">
      <div className="flex flex-col gap-y-8 md:gap-x-8 lg:gap-x-12 lg:flex-row">
        <div className="flex flex-col gap-y-2 lg:gap-y-4 lg:basis-1/3">
          <h4 className="text-3xl md:text-4xl mnt-bold font-black">SHOP.CO</h4>
          <p className="text-[#A5A5A5] md:max-w-[40ch] lg:max-w-full">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
          <div className="flex items-center gap-x-2">
            <a href="#" className="icon-socials bg-white flex items-center justify-center rounded-full p-2 border border-[#E2E2E2] hover:-translate-y-[3px] hover:scale-90 focus:border-black focus:outline-0 focus:bg-black transition-all"><FaTwitter className="text-lg text-black" /></a>
            <a href="#" className="icon-socials bg-white flex items-center justify-center rounded-full p-2 border border-[#E2E2E2] hover:-translate-y-[3px] hover:scale-90 focus:border-black focus:outline-0 focus:bg-black transition-all"><FaLinkedinIn className="text-lg text-black" /></a>
            <a href="#" className="icon-socials bg-white flex items-center justify-center rounded-full p-2 border border-[#E2E2E2] hover:-translate-y-[3px] hover:scale-90 focus:border-black focus:outline-0 focus:bg-black transition-all"><FaInstagram className="text-lg text-black" /></a>
            <a href="#" className="icon-socials bg-white flex items-center justify-center rounded-full p-2 border border-[#E2E2E2] hover:-translate-y-[3px] hover:scale-90 focus:border-black focus:outline-0 focus:bg-black transition-all"><FaGithub className="text-lg text-black" /></a>
          </div>
        </div>
        <ul ref={ref} className="w-full flex flex-wrap gap-x-5 md:gap-x-6 gap-y-5 md:flex-row md:justify-between lg:basis-full lg:flex-nowrap">
          <ul className="flex flex-col gap-y-3 basis-[45%] md:gap-x-8 md:basis-auto">
            <h6 className="tracking-[0.2em] mb-1 font-semibold text-white text-lg uppercase">COMPANY</h6>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">About</a></li>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Features</a></li>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Works</a></li>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Career</a></li>
          </ul>
          <ul className="flex flex-col gap-y-3 basis-[45%] md:basis-auto">
            <h6 className="tracking-[0.2em] mb-1 font-semibold text-white text-lg uppercase">HELP</h6>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Customer Support</a></li>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Delivery Details</a></li>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Terms & Conditions</a></li>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Privacy Policy</a></li>
          </ul>
          <ul className="flex flex-col gap-y-3 basis-[45%] md:basis-auto">
            <h6 className="tracking-[0.2em] mb-1 font-semibold text-white text-lg uppercase">FAQ</h6>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Account</a></li>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Manage Deliveries</a></li>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Orders</a></li>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Payment</a></li>
          </ul>
          <ul className="flex flex-col gap-y-3 basis-[45%] md:basis-auto">
            <h6 className="tracking-[0.2em] mb-1 font-semibold text-white text-lg uppercase">Resources</h6>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Free eBook</a></li>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Development Tutorials</a></li>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">How to - blog</a></li>
            <li><a href="#" className="text-[#8D8D8D] hover:text-gray-300 hover:underline hover:underline-gray-300 capitalize transition-all">Youtube playlist</a></li>
          </ul>
        </ul>
      </div>
      <hr className="h-0 border border-gray-300 mt-8 mb-4" />
      <div className="pb-8">
        <small id="copyright" className="capitalize opacity-0 text-[#8D8D8D] text-center text-sm block">Shop.co <span className="text-base">&copy;</span> 2024, All Rights reserved</small>
      </div>
    </footer>

  )
}
export default Header