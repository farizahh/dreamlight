import React from 'react'
import Img from '../../assets/img/thumbnail.png'

const portfolioItems = [
  { id: 1, name: "Project Name 1", img: Img, description: "We craft virtual environments that reflect your community’s identity.", col: "col-span-1", row: "row-span-1", height: "h-48" },
  { id: 2, name: "Project Name 2", img: Img, description: "We craft virtual environments that reflect your community’s identity.", col: "col-span-1", row: "row-span-2", height: "h-[400px]" },
  { id: 3, name: "Project Name 3", img: Img, description: "We craft virtual environments that reflect your community’s identity.", col: "col-span-2", row: "row-span-1", height: "h-48" },
  { id: 4, name: "Project Name 4", img: Img, description: "We craft virtual environments that reflect your community’s identity.", col: "col-span-1", row: "row-span-1", height: "h-48" },
  { id: 5, name: "Project Name 5", img: Img, description: "We craft virtual environments that reflect your community’s identity.", col: "col-span-1", row: "row-span-1", height: "h-48" },
  { id: 6, name: "Project Name 6", img: Img, description: "We craft virtual environments that reflect your community’s identity.", col: "col-span-1", row: "row-span-1", height: "h-48" },
];

const LpProject2 = () => {
  return (
    <section id='portofolio'>
      <div className='w-full lg:py-16 md:py-8 py-8 lg:px-20 md:px-10 px-5'>
        <div className='text-center'>
          <p className='text-[#00AEEF] text-lg lg:text-xl font-bold mt-10 md:mt-0'>FEATURED WORKS</p>
          <h1 className='font-bold text-base lg:text-lg my-1 text-[#232326]'>Moments We're Proud O</h1>
        </div>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full" />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>

      </div>
    </section>
  )
}

export default LpProject2
