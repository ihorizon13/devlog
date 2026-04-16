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

            <h3><strong>Giving & Receiving Feedback / Planetary Responsibility</strong></h3>
            <ul>
              <li>I learned that my planetary responsbility is: to guide...</li>
              <li>It takes a lot of vunerability to ask for help, I learned to give people the time and space to ask for it when THEY are ready to recieve it...</li>
            </ul>

            <h3><strong>Tea Host Experience</strong></h3>
            <p>As someone who can be nervous at times, being a Tea Host helped me build my social skills tremendously! I can carry out a conversation with ease and not lose the flow, ensuring my guests felt heard and at home at i.c.stars!</p>

            <h3><strong>Tea Debriefs</strong></h3>
            <p>What I learned: There is never a dumb question to ask, seek and lean on your team, and communication is always key!</p>

            <h3><strong>Dream Speech</strong></h3>
            <p>For my dream speech, I was recognized for being a global tech leader and advocate for women in the tech field by creating an organization called Las Innovadoras...</p>

            <h3>CIVICs Project</h3>
            <p>I learned how almost every issue share similar root causes, making it seem like it is hard to tackle the issues our society deals with. But that is not enough of a reason to give up. Change can't happen unless we do our civic duties!</p>
          </section>
        )}

        {/* ── BUSINESS ───────────────────────────────────────────── */}
        {activeTab === 'Business' && (
          <section>
            <h2>Business</h2>

            <h3><strong>Client Project Overview</strong></h3>
            <p>Business problem: HR Department Job Description Process Being Held-Up / Long JD Life-cycle...</p>
            <p>Team approach: Job Description Generating Tool using AI </p>
            <p>Your role: UI/UX lead and helped with backend creation/connection.</p>

            <h3>Consulting Company</h3>
            <p>Our group was "OrangeCoeur", we wanted to take a different approach with our values and mission. We wanted to create a connection and be more personable, ensuring our client felt like they are being <strong>heard</strong>.</p>

            <h3>RFP Proposal Presentation</h3>
            <p>Our client wanted a AI tool that was easy to navigate, quick to generate JDs, and track all JD versions.</p>

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

            <h3><strong>Short- & Long-Term Career Plans</strong></h3>
            <p>Tech roles:Project Coodinator/Assitant</p>
            <p>Leadership/entrepreneurial goals: Want to be able to manage temas and create a collaborative enviornment. Each person is a piece of a puzzle that fits perfectly...</p>
            <p>Business/consulting aspirations: Being able to see client satisfaction, that the service I provided is what they needed are are content!</p>

            <h3><strong>Resume & Job-Search Preparation</strong></h3>
            <p>I should highlight the more relevant tech experience I have but during interviews, make mentions of my administrative work. </p>

            <h3><strong>Personal Professional Brand & Values</strong></h3>
            <p>Core Values: Reliability, Adaptibility, Service, Ethics, & Wisdom...</p>
            <p>Brand: I want to be someone that if people need help, they think of me. That they can trust in me when it comes to providing a solutions to your needs and will do all that I can to ensure you feel seen & understood...</p>

            <h3>Roles I'm Most Interested In</h3>
            <p>Project Manager: I like to be organized, help the flow of processes, and being highly detailed. I can see what each persons' strengths and weaknesses are and what tasks might be best for them to focus or challenge theirselves with.</p>
          </section>
        )}

        {/* ── WELLNESS ───────────────────────────────────────────── */}
        {activeTab === 'Wellness' && (
          <section>
            <h2>Wellness</h2>

            <h3>Financial Wellness</h3>
            <ul>
              <li>Short-Term Goal: Save Around $1,000 to have in case of emergencies</li>
              <li>Long-Term Goal: Pay Off Credit Cards and maintain good credit score</li>
            </ul>

            <h3>Emotional Wellness</h3>
            <p>When I start to feel off or the negative talk are overtaking my thoughts, I remind myself of what others have said about me. Their encouragement and the trust they have placed in me...</p>

            <h3>Mental Wellness</h3>
            <p>To avoid burnout, I would take breaks when working from home. A minute to step away and refresh my brain. Also adapted self-care habits into my weekly routine, pampering myself with facials, treats, etc...</p>

            <h3>Physical Wellness</h3>
            <p>I have started a habit involving movement! Everyday, I go on a 5-10 minute walk after having lunch to put in my steps. Every week I add on 5 minutes more to make it more exciting!</p>
          </section>
        )}

      </div>
    </>
  )
}
