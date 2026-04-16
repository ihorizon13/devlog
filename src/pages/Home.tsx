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
    <Link className="buttons" to="/Journey">Read Through My Journey</Link>
    
    <div className = "home-heading">Welcome to my Digital Portfolio! Have a look around...</div>

    <NewEntryForm onAddEntry={onAddEntry}/>  
    
    

    </>
  )}
 