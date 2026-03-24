export type Mood = 'happy' | 'curious' | 'frustrated' | 'neutral'


export interface Entry{
    id: number
    title: string
    summary: string
    mood: Mood
    tags: string []
    createdAt: string //full ISO timestamp
    
}

const seedEntries: Entry [] = [

{
    id: 1,
    title: 'Jonathan teaches us how to make entries',
    summary: 'JV first taught us how to use keys and values, and showed us how to create an entry',
    mood: 'happy', 
    tags: ['vite','react','typescript'],
    createdAt: '2026-03-06T09:00:000Z'
},
{
    id: 2,
    title: 'This is my second entry...',
    summary: 'I am testing with this entry!',
    mood: 'happy', 
    tags: ['vite','react','typescript'],
    createdAt: '2026-03-06T09:00:000Z'
},
{
    id: 3,
    title: 'High Tea Guest',
    summary: 'Had a wonderful tea guest today!',
    mood: 'happy', 
    tags: ['vite','react','typescript'],
    createdAt: '2026-03-06T09:00:000Z'
},
{
    id: 4,
    title: 'I am working on this again',
    summary: 'This is test entry #4...',
    mood: 'happy', 
    tags: ['vite','react','typescript'],
    createdAt: '2026-03-06T09:00:000Z'
}


] 

export default seedEntries