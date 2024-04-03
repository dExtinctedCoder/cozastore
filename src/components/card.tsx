import { FaStar } from "react-icons/fa"
import { useState, useRef } from "react"
import { currencyFormmatter } from "../utils/constants.ts"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

interface ProductPropsType {
  id: string
  name: string
  price: number
  rating: number
  img_src: string
  isDiscount?: boolean
  oldPrice?: number
}
interface CategoryPropsType {
  category: { id: number, name: string, img_src: string; }
}
export const ProductCard = ({ id, name, price, rating, img_src, ...props }: ProductPropsType) => {
  const formattedCurrentPrice = currencyFormmatter.format(price)
  const formattedOldPrice = props?.isDiscount ? currencyFormmatter.format(props.oldPrice!) : null

  return (
    <a href={`/product/${id}`} className="min-w-48 h-full flex flex-col rounded-md focus:outline-0 focus:bg-slate-300">
      <div className="w-full aspect-[1/1_!important] overflow-y-hidden shadow-lg rounded-md bg-gray-300 flex items-center justify-center">
        <img
          src={img_src}
          alt={name}
          className="h-full w-full"
        />
      </div>
      <div className="basis-1/4 py-4 flex flex-col gap-y-2">
        <p className="text-gray-900 truncate capitalize"><strong>{name}</strong></p>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-1 text-[#FEC532]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-gray-500">
            <span className="text-gray-900 font-medium">{rating.toFixed(1)}/</span>5
          </p>
        </div>
        <div className="flex items-baseline flex-wrap gap-x-2">
          {
            props.isDiscount ? (
              <>
                <h6 className="text-black font-semibold w-full">{formattedCurrentPrice}</h6>
                <h6 className="text-gray-400 font-semibold text-sm line-through">{formattedOldPrice}</h6>
              </>

            ) : (
              <>
                <h6 className="text-black font-semibold">{formattedCurrentPrice}</h6>
              </>
            )
          }
        </div>
      </div>
    </a>
  )
}

export const CategoryCard = ({ category }: CategoryPropsType) => {
  // const year = Number(new Date()).getFullYear
  const [overlay, setOverlay] = useState(false)
  const ref = useRef({} as HTMLDivElement)
  const { name, img_src } = category

  const { contextSafe } = useGSAP(() => {
  }, [])

  const handleOverlay = contextSafe((flag: boolean) => {
    flag ? setOverlay(true) : setOverlay(false)
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" }
    })
    if (overlay) {
      tl.to(".cta-dash", {
        width: "100%",
        duration: 0.25,
      })
      tl.fromTo(".cta-text", {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
      })
    }
    else {
      tl.set(".cta-dash", {
        width: 0,
        ease: "power3.inOut"
      })
    }
  })

  return (
    <div
      ref={ref}
      onMouseOver={() => handleOverlay(true)}
      onMouseLeave={() => handleOverlay(false)}
      className="relative border border-gray-300 h-80 md:basis-[48%] lg:basis-1/3 lg:flex-nowrap"
    >
      {
        !overlay ? (
          <div className="absolute top-8 left-10 flex flex-col gap-y-2">
            <h3 className="text-gray-800 text-3xl font-bold mnt-bold capitalize">{name}</h3>
            <p className="text-light capitalize">spring {2024}</p>
          </div>
        ) : null
      }
      <img
        src={img_src}
        alt={`${name.toUpperCase()}-IMG`}
        className="w-full h-full object-cover object-top"
      />
      {
        overlay ? (
          <a
            href={`#`}
            className="absolute inset-0 px-10 py-8 flex flex-col justify-between text-white bg-[rgba(133,144,222,0.8)] transition-all cursor-pointer"
          >
            <div className="flex flex-col gap-y-2">
              <h3 className="text-3xl font-bold mnt-bold capitalize">{name}</h3>
              <p className="text-light capitalize">New trend</p>
            </div>
            <div className="flex flex-col gap-y-1 items-center uppercase text-xl mnt-regular font-bold tracking-wide w-fit">
              <span className="cta-text">Shop now</span>
              <span className="cta-dash h-1 bg-white w-0 mx-auto"></span>
            </div>
          </a>
        ) : null
      }
    </div>
  )
}