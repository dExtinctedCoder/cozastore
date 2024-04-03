import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all"

interface PropsType {
  title: string
  children: React.ReactNode
  className?: string
}

gsap.registerPlugin(ScrollTrigger)
export const HomeSection = ({ title, children, className }: PropsType) => {
  const ref = useRef({} as HTMLDivElement)
  useGSAP(() => {
    gsap.fromTo(".card", {
      x: -150,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ref.current.children,
        start: "bottom bottom"
      },
      ease: "power2.inOut"
    })
  })

  return (
    <section className={`flex flex-col gap-y-6 py-8 w-full ${className}`}>
      <h3 className="text-center mnt-bold font-semibold text-2xl">{title}</h3>
      <div className="overflow-x-hidden w-[calc(100vw_-_12px)]">
        <div ref={ref} className="w-full overflow-x-scroll no-scrollbar px-4 lg:px-8 flex items-stretch justify-between gap-x-6">
          {children}
        </div>
      </div>
    </section>
  )
}
