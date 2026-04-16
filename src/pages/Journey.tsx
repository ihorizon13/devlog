import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

type Tab = 'Leadership' | 'Business' | 'Technology' | 'Career Planning' | 'Wellness'

const TABS: Tab[] = ['Leadership', 'Business', 'Technology', 'Career Planning', 'Wellness']

export default function Journey() {
  const [activeTab, setActiveTab] = useState<Tab>('Leadership')

  return (
    <>
      <Header />

      <Link className="buttons" to="/">Go to Home</Link>
      <Link className="buttons" to="/AboutSection">Go to About Page</Link>
      <Link className="buttons" to="/Entries">Go to Entries Page</Link>

      <h2>My Journey</h2>

      {/* Tab buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1.5rem 2rem 0' }}>
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? 'buttons' : 'tab-inactive'}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{ margin: '2rem' }}>

        {/* ── LEADERSHIP ─────────────────────────────────────────── */}
        {activeTab === 'Leadership' && (
          <section>
            <h2>Leadership</h2>

            <h3>Giving & Receiving Feedback / Planetary Responsibility</h3>
            <p>
              <ul>
                <li>I learned that my planetary responsbility is: to guide...</li>
                <li>It takes a lot of vunerability to ask for help, I learned to give people the time and space to ask for it when THEY are ready to recieve it...</li>
                <li></li>              
              </ul>
            </p>

            <h3>Tea Host Experience</h3>
            <p>[Reflect on your experience serving as a Tea Host — how you prepared and engaged with Tea Guests.]</p>

            <h3>Tea Debriefs</h3>
            <p>[Share key lessons from Tea Debriefs or reflective discussions with your cohort.]</p>

            <h3>Dream Speech</h3>
            <p>[Highlight your Dream Speech — were you recognized as a business, service, or civic leader?]</p>

            <h3>CIVICs Project</h3>
            <p>[What did you learn from your CIVICs Project, and how will you put it to immediate use post-internship?]</p>
          </section>
        )}

        {/* ── BUSINESS ───────────────────────────────────────────── */}
        {activeTab === 'Business' && (
          <section>
            <h2>Business</h2>

            <h3>Client Project Overview</h3>
            <p><strong>Business problem:</strong> [What was the business problem your team addressed?]</p>
            <p><strong>Team approach:</strong> [How did your team approach the solution?]</p>
            <p><strong>Your role:</strong> [What was your individual role and contribution?]</p>

            <h3>Consulting Company</h3>
            <p>[Reflect on forming and working in your Consulting Company.]</p>

            <h3>RFP Proposal Presentation</h3>
            <p>[Share artifacts and takeaways from your proposal presentation in response to the RFP.]</p>

            <h3>Allskates & Tea Guest Highlights</h3>
            <p>[Highlight relevant experiences from Allskates, Tea Guests, or feedback from external guests.]</p>
          </section>
        )}

        {/* ── TECHNOLOGY ─────────────────────────────────────────── */}
        {activeTab === 'Technology' && (
          <section>
            <h2>Technology</h2>

            <h3>Geek Week</h3>
            <p><strong>SQL testing, Excel challenges, Hot Keys:</strong> [Summarize your experience.]</p>
            <p><strong>Timed testing & performance growth:</strong> [How did you improve?]</p>
            <p><strong>Data analysis & coaching insights:</strong> [What did you learn?]</p>

            <h3>Debugging, Testing & Asking Good Questions</h3>
            <p>[Describe your growth in debugging, testing, and learning to ask good technical questions.]</p>

            <h3>GitHub & Version Control</h3>
            <p>[Reflect on collaboration through GitHub, branching, and version control.]</p>

            <h3>Cloud & Business Tools</h3>
            <p>[Describe your use of Office 365, Google Drive, Trello, Teams, Zoom, Outlook, and Windows Explorer.]</p>

            <h3>Typing Speed</h3>
            <p>[Did you hit or surpass 40+ WPM? Share your progress.]</p>

          </section>
        )}

        {/* ── CAREER PLANNING ────────────────────────────────────── */}
        {activeTab === 'Career Planning' && (
          <section>
            <h2>Career Planning</h2>

            <h3>Short- & Long-Term Career Plans</h3>
            <p><strong>Tech roles:</strong> [What tech roles do you want to pursue?]</p>
            <p><strong>Leadership/entrepreneurial goals:</strong> [Where do you see yourself as a leader?]</p>
            <p><strong>Business/consulting aspirations:</strong> [What are your consulting or business goals?]</p>

            <h3>Working with Career Development Director & Program Manager</h3>
            <p>[Reflect on your experience and takeaways from working with them.]</p>

            <h3>Employer Partner Workshops</h3>
            <p>[Share insights from workshops with Accenture, Capital One, Salesforce, and other employer partners.]</p>

            <h3>Resume & Job-Search Preparation</h3>
            <p>[What feedback did you receive on your resume? How are you preparing for the job search?]</p>

            <h3>Personal Professional Brand & Values</h3>
            <p>[Describe your personal professional brand or the core values that guide your career.]</p>

            <h3>Roles I'm Most Interested In</h3>
            <p>[Identify the roles you're most interested in (e.g., Software Developer, Product Manager, Business Analyst, QA Tester) and explain why — what aligns with your interests, skills, and purpose?]</p>
          </section>
        )}

        {/* ── WELLNESS ───────────────────────────────────────────── */}
        {activeTab === 'Wellness' && (
          <section>
            <h2>Wellness</h2>

            <h3>Financial Wellness</h3>
            <p>[List your short- and long-term financial goals.]</p>

            <h3>Emotional Wellness</h3>
            <p>[Reflect on how you've challenged negative self-talk or imposter syndrome.]</p>

            <h3>Mental Wellness</h3>
            <p>[Reflect on how you've handled stress or burnout throughout the program.]</p>

            <h3>Physical Wellness</h3>
            <p>[Share a habit you've improved or started (hydration, sleep, movement, etc.).]</p>
          </section>
        )}

      </div>
    </>
  )
}
