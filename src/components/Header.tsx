import banner from '../assets/banner.png'
import oldPic from '../assets/oldPic.png'

export default function Header() {
  return (
    <>

<header className = "hero-content flex-col lg:flex-row" style={{backgroundImage: `url(${banner})`}}>

<img className= "max-w-sm rounded-lg shadow-2xl" src ={oldPic} alt = "Izzy's Selfie"></img>

            <h1 className='name'><a href= "https://www.linkedin.com/in/isisel-badillo-matiaz-49b735201/">Isisel 
            Badillo-Matiaz</a></h1>
    </header>
    </>
    )
    }
  


