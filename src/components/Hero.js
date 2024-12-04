import HEROIMG from'../components/assets/hero.avif';
import { AiOutlineGithub  ,AiOutlineWhatsApp ,AiOutlineInstagram} from 'react-icons/ai';

export default function Hero() {
  const config ={
    subtitle: 'Im a Full-stack devoloper',
    social:{
    github:"https://http://github.com/2303pavi/",
    whatsapp:"https://wa.me/8248710066/",
    instagram:"https://www.instagram.com/yogi_ganapathy_/"
    } 
   
  }

    return <section className='flex flex-col  md:flex-row px-5 py-32  bg-secondary justify-center ' id='hero'>
        <div className=' md:  w-1/2 flex flex-col'>
            <h1 className=' text-white text-4xl font hero-font '>Hi,<br/> iam Pavithradevi
        <p className='text-2xl'>{config.subtitle}</p>
       </h1> 
       <div className='flex py-10'>
           <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={60}/></a>
           <a href={config.social.whatsapp} className='pr-5 hover:text-white'>< AiOutlineWhatsApp size={60}/></a>
           <a href={config.social.instagram} className='hover:text-white'>< AiOutlineInstagram size={60}/></a>
       </div>
        </div>
       
        < img className=' md:w-1/3' src={HEROIMG} alt='the girl of img' />
    </section>
} 