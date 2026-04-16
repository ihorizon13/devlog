import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Mood } from '../data/entries'



interface NewEntryFormProps {
  onAddEntry: (title: string, content: string, mood: Mood, tags: string[]) => void
}


function NewEntryForm({ onAddEntry }: NewEntryFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mood, setMood] = useState<Mood>('neutral');
  const [tagsInput, setTagsInput] = useState('');

  const titleError = title.trim() === '' ? 'Title is required.' : '';
  const contentError = content.trim() === '' ? 'Content is required.' : '';
  const isValid = titleError === '' && contentError === '';
  
    const tags = tagsInput
            .split(',')
            .map(t => t.trim().toLowerCase())
            .filter(t => t !=='')

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setSubmitted(true);

  if (!isValid) return;

  onAddEntry(title.trim(), content.trim(), mood, tags );

  setTitle('');
  setContent('');
  setMood('neutral');
  setTagsInput('');
  setSubmitted(false);
}

  return (
    <>
      <form className="entry-form" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="entry-title">Title</label>
          <br />
          <input
            id="entry-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {submitted && titleError && (
        <strong id="title-error" role="alert">{titleError}</strong>
)}
        </p>

        <select value ={mood} onChange={e => setMood(e.target.value as Mood)}>
          <option value = "happy">happy</option>
          <option value = "curious">curious</option>
          <option value = "frustrated">frustrated</option>
          <option value = "neutral">neutral</option>
        </select>

        <p>
          <label htmlFor="entry-tags">Tags (comma-separated)</label>
          <br />
          <input
            id="entry-tags"
            type="text"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder="e.g., work, ideas, reflection"
          />
        </p>

        <p>
          <label htmlFor="entry-content">Content</label>
          <br />
          <textarea
            id="entry-content"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {submitted && contentError && (
  <strong id="content-error" role="alert">{contentError}</strong>
)}
        </p>

        <button className="save-entry-btn" type="submit" disabled={submitted && !isValid}>Save Entry</button>
      </form>
    </> 
  );
}

export default NewEntryForm;