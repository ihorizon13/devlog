import { Link } from 'react-router-dom'
import Header from '../components/Header'
import NewEntryForm from '../components/NewEntryForm'
import type {Mood} from '../data/entries'

interface HomeProps {
  onAddEntry: (title: string, content:string, mood: Mood, tags: string[]) => void
}

export default function Home({ onAddEntry }: HomeProps) {
  return(
    <>
    <Header />


    <Link className="buttons" to="/AboutSection">Go to About Page</Link>
    <Link className="buttons" to="/Entries">Go to Entries Page</Link>
    
    <div className = "home-heading">hei I am home</div>

    <NewEntryForm onAddEntry={onAddEntry}/>  
    
    

    </>
  )}
 