import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import AboutSection from './pages/AboutSection'
import  Entries  from './pages/Entries'
import Journey from './pages/Journey'
import NewEntryForm from './components/NewEntryForm'
import seedEntries from './data/entries'
import type { Entry, Mood } from './data/entries'


export default function App(){

     const [entries, setEntries] = useState<Entry[]>(seedEntries)

     const navigate = useNavigate()

     function handleAddEntry(title: string, content: string, mood: Mood, tags: string[]) {
    const newEntry: Entry = {
      id: Date.now(),  // Generate unique ID using timestamp
      title,
      summary: content,  // Using content as summary (as per instructions)
      mood,
      tags,
      createdAt: new Date().toISOString(), 
      
    }
    setEntries(prev => [newEntry, ...prev])  // Prepend new entry to array
    navigate('/entries')  // Redirect to entries page after adding
  }

     return(

    <Routes>
      <Route path="/" element={<Home onAddEntry={handleAddEntry}/>} />
      <Route path="/AboutSection" element={<AboutSection />} />
      <Route path="/Entries" element={<Entries entries={entries}/>} />
      <Route path="/entries/new" element={<NewEntryForm onAddEntry={handleAddEntry}/>} />
      <Route path="/Journey" element={<Journey />} />
    </Routes>

  
  )
}

