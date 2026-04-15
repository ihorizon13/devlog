import banner from '../assets/banner.png'
import oldPic from '../assets/oldPic.png'

export default function Header() {
  return (
    <>

<header className = "hero min-h-[50vh] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${banner})`}}>

<img className= "w-32 rounded" src ={oldPic} alt = "Izzy's Selfie"></img>

            <h1 className='name'><a href= "https://www.linkedin.com/in/isisel-badillo-matiaz-49b735201/">Isisel 
            Badillo-Matiaz</a></h1>
    </header>
    </>
    )
    }
  


