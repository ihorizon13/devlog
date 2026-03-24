import type { Entry } from '../data/entries'

function  EntryCard({ entry }: { entry: Entry}) {
    return (
        <article>

            <h3>{entry.title}</h3>
            <time dateTime={entry.createdAt}>{entry.createdAt}
                {new Date(entry.createdAt).toLocaleDateString()}
            </time>

            {entry.tags.map(tag => (
                <span key ={tag}> #{tag}</span>
            ))}

            <p>{entry.summary}</p>

        </article>
    )
}

export default EntryCard 