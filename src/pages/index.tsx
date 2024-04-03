import { useRef } from "react"
import HeroImg from "../assets/images/banner-02.jpg"
import youtube from "../assets/icons/youtube.svg"
import skype from "../assets/icons/skype.svg"
import twitch from "../assets/icons/twitch.svg"
import reddit from "../assets/icons/reddit.svg"
import wordpress from "../assets/icons/wordpress.svg"
import medium from "../assets/icons/medium.svg"
import spotify from "../assets/icons/spotify.svg"
import behance from "../assets/icons/behance.svg"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { HomeSection } from "../components/home-section"
import { ProductCard, CategoryCard } from "../components/card"
import { data, categories } from "../data"

gsap.registerPlugin(ScrollTrigger)
const LandingPage = () => {
  const boxRef = useRef({} as HTMLDivElement)
  const ref = useRef({} as HTMLElement)

  useGSAP(() => {
    const heroSectionTl = gsap.timeline({
      defaults: {
        stagger: 0.3,
        ease: "power2.inOut",
        duration: 0.4
      }
    })
    heroSectionTl.to("#hero-title", {
      x: 0,
      opacity: 1,
    })
    heroSectionTl.to("#hero-text", {
      x: 0,
      opacity: 1,
    })
    heroSectionTl.to("#hero-cta", {
      y: 0,
      opacity: 1,
    })
    heroSectionTl.to("#hero-img", {
      scale: 1,
      opacity: 1,
    })
    heroSectionTl.to(".hero-stats", {
      x: 0,
      opacity: 1,
      stagger: 0.1
    })
    const logos = boxRef.current.children
    gsap.fromTo(boxRef.current, {
      x: "-100%",
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
    })
    gsap.to(logos, {
      order: 1,
      repeat: -1,
      ease: "power2.inOut",
      stagger: 2
    })
    const cards: HTMLElement[] = gsap.utils.toArray(ref.current.children)
    cards.forEach((card) => {
      gsap.fromTo(card!, {
        x: "-100%",
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: 0.55,
        scrollTrigger: {
          trigger: card!,
          start: "top center"
        },
        ease: "power3.Out"
      })
    })

  }, [])

  return (
    <main className="flex-grow basis-full">
      <section id="hero-section" className="bg-white flex flex-col lg:flex-row md:gap-y-4 lg:items-center pt-8">
        <div className="flex px-4 md:px-8 flex-col gap-y-4 lg:gap-y-8 md:py-8 md:pb-0">
          <h1 id="hero-title" className="uppercase text-2xl lg:text-4xl mnt-bold font-bold translate-x-[100vw] opacity-0">Find clothes that matches your style</h1>
          <p id="hero-text" className="text-[#9A9A9A] -translate-x-full opacity-0 lg:text-lg">Browse through our diverse range of meticulously crafted garment, designed to bring out your individuality and cater to your sense of style. </p>
          <a href="#" id="hero-cta" className="w-full md:w-fit text-center px-8 md:px-12 lg:px-20 py-2 text-lg font-medium focus:font-semibold bg-black hover:bg-gray-300 hover:text-black focus:bg-gray-300 text-white focus:text-[#333] rounded-3xl translate-y-32 opacity-0 transition-all">Shop Now</a>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center capitalize text-center gap-4 p-4 md:p-0">
            <div className="basis-1/3 flex-grow -translate-x-full opacity-0 hero-stats">
              <h6 className="md:text-lg">200+</h6>
              <p className="text-xs md:text-sm lg:text-base text-[#9A9A9A]">international brands</p>
            </div>
            <div className="basis-1/3 flex-grow -translate-x-full opacity-0 hero-stats">
              <h6 className="md:text-lg">2,000+</h6>
              <p className="text-xs md:text-sm lg:text-base text-[#9A9A9A]">high-quality products</p>
            </div>
            <div className="basis-1/2 md:basis-1/3 -translate-x-full opacity-0 hero-stats">
              <h6 className="md:text-lg">30,000+</h6>
              <p className="text-xs md:text-sm lg:text-base text-[#9A9A9A]">happy customers</p>
            </div>
          </div>
        </div>
        <div>
          <img src={HeroImg} id="hero-img" alt="hero-img" className="block w-full scale-0 opacity-0" />
        </div>
      </section>

      <div ref={boxRef} className="bg-gray-200 w-full opacity-0 py-4 px-2 md:px-8 flex items-center justify-between md:justify-around">
        <img src={youtube} alt="youtube-logo" className="w-7 h-7 lg:w-8 lg:h-8" />
        <img src={skype} alt="skype-logo" className="w-7 h-7 lg:w-8 lg:h-8" />
        <img src={twitch} alt="twitch-logo" className="w-7 h-7 lg:w-8 lg:h-8" />
        <img src={reddit} alt="reddit-logo" className="w-7 h-7 lg:w-8 lg:h-8" />
        <img src={wordpress} alt="wordpress-logo" className="w-7 h-7 lg:w-8 lg:h-8" />
        <img src={medium} alt="medium-logo" className="w-7 h-7 lg:w-8 lg:h-8" />
        <img src={spotify} alt="spotify-logo" className="w-7 h-7 lg:w-8 lg:h-8" />
        <img src={behance} alt="behance-logo" className="w-7 h-7 lg:w-8 lg:h-8" />
      </div>

      <section ref={ref} className="flex justify-between gap-y-8 px-4 py-8 flex-col md:px-8 md:flex-wrap md:flex-row lg:gap-x-8 lg:py-12 lg:flex-nowrap">
        {
          categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))
        }
      </section>

      <HomeSection key={"new_arrivals"} title="New Arrivals">
        {
          data.new_arrivals.map(({ name, price, rating, src, isDiscount, old_price }, index) => (
            <ProductCard key={name} id={(index + 1).toString()} name={name} price={price} rating={rating} img_src={src} isDiscount={isDiscount} oldPrice={old_price} />
          ))
        }
      </HomeSection>

      <HomeSection key={"top_selling"} title="Top Selling">
        {
          data.top_selling.map(({ name, price, rating, src, isDiscount, old_price }, index) => (
            <ProductCard key={name} id={(index + 1).toString()} name={name} price={price} rating={rating} img_src={src} isDiscount={isDiscount} oldPrice={old_price} />
          ))
        }
      </HomeSection>
    </main>
  )
}

export default LandingPage