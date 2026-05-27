import React from 'react'
import Img from '../../assets/img/thumbnail.png'

const portfolios = [
  {
    id: 1,
    title: "Product Name 1",
    description: "Use audio to have live conversations with other collaborators directly in your Figma and FigJam files.",
    img: Img
  },
  {
    id: 2,
    title: "Product Name 2",
    description: "A different description for the second product.",
    img: Img
  },
  {
    id: 3,
    title: "Product Name 3",
    description: "Another description for the third product.",
    img: Img
  },
]

const PortfolioContent = () => {
  return (
    <section id='portofolio-content'>
      <div className='w-full lg:py-10 md:py-8 py-8 lg:px-20 md:px-10 px-5'>
        <div className='text-center'>
          <p className='text-[#00AEEF] text-base lg:text-lg font-bold mt-5 md:mt-0'>FEATURED WORKS</p>
          <h1 className='font-bold text-xl lg:text-3xl my-1 text-[#232326]'>
            Together with our community, we've created memories that matter — and we're proud of every moment.
          </h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
          {portfolios.map((item) => (
            <div key={item.id} className="card bg-base-100 w-full shadow-sm border-[#E4E4E7] border hover:shadow-lg transition">
              <figure>
                <img src={item.img} className='w-full p-3 rounded-xl' alt={item.title} />
              </figure>
              <div className="card-body text-[#333333] font-sans px-4 py-1">
                <h2 className="card-title font-bold">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioContent
