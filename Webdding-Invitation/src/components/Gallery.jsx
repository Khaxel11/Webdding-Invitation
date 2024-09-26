import BentoGrid from "./BentoGrid"


const Gallery = () => 
  (
    <section id="gallery" className="relative w-full h-auto mt-10">
           <div className='mt-1 w-full h-[3px] bg-gold' />
           <div className='mt-1 w-full h-[3px] bg-gold' />
        <div className="w-full text-gold text-center font-signature text-[3rem] sm:text-[8rem] mt-2">Nuestros Momentos</div>
        <BentoGrid/>
    </section>
  )


export default Gallery