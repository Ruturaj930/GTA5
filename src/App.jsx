import { useState } from 'react'
import './App.css'

const tabs = {
  trio: {
    label: 'The trio', tag: '01 / CHARACTERS', title: ['Three lives.', 'One city.'],
    copy: 'Michael De Santa, Franklin Clinton and Trevor Philips collide in a heist story built around loyalty, ambition and the open road.',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=85',
  },
  city: {
    label: 'Los Santos', tag: '02 / SETTING', title: ['Sunset runs', 'and side deals.'],
    copy: 'A fictional Southern California playground where beaches, hills, freeways and backcountry roads make every route feel like a decision.',
    image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=1200&q=85',
  },
  heists: {
    label: 'The score', tag: '03 / HEISTS', title: ['Plan it.', 'Play it loud.'],
    copy: 'Pick an approach, recruit a crew and turn preparation into payoff. Every big score is a story told through its moving parts.',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1200&q=85',
  },
}

function App() {
  const [activeTab, setActiveTab] = useState('trio')
  const current = tabs[activeTab]

  return (
    <main>
      <nav className="nav-shell">
        <a className="brand" href="#top" aria-label="Los Santos home"><span className="brand-mark">V</span><span>LOS SANTOS<br /><small>FIELD NOTES</small></span></a>
        <div className="nav-links"><a href="#story">Story</a><a href="#world">World</a><a href="#numbers">Numbers</a></div>
        <a className="nav-cta" href="#story">Open dossier <span>+</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" /><div className="hero-image" /><div className="hero-shade" />
        <div className="hero-copy"><p className="eyebrow reveal">ROCKSTAR GAMES / 2013</p><h1 className="reveal reveal-delay">Grand Theft<br /><em>Auto V</em></h1><p className="hero-intro reveal reveal-delay-2">A living archive of Los Santos, its people,<br />and the art of the getaway.</p><a className="scroll-cue reveal reveal-delay-3" href="#story"><span className="scroll-line" /> Scroll to explore</a></div>
        <div className="hero-stamp">LS<br /><strong>05</strong><br /><span>EST. 2013</span></div><div className="hero-meta"><span>34.0522 N</span><span>118.2437 W</span><span>V.01</span></div>
      </section>

      <section className="intro-band" id="story"><div className="section-kicker"><span>01</span><span>THE SETUP</span></div><div className="intro-text"><p className="eyebrow">A CITY OF OPPORTUNITY</p><h2>Everything is<br /><em>on the line.</em></h2></div><div className="intro-description"><p>In Los Santos, status is currency and everyone has a plan. Follow three very different men as they chase the one thing they agree on: a way out.</p><a className="text-link" href="#world">Read the full story <span>-&gt;</span></a></div></section>

      <section className="dossier" id="world"><div className="dossier-nav"><div><p className="eyebrow">THE DOSSIER</p><h2>Choose your<br /><em>angle.</em></h2></div><div className="tab-list">{Object.entries(tabs).map(([key, tab], index) => <button key={key} className={activeTab === key ? 'tab active' : 'tab'} onClick={() => setActiveTab(key)}><span>0{index + 1}</span>{tab.label}<b>+</b></button>)}</div></div><div className="dossier-card"><div className="card-image" style={{ backgroundImage: `url(${current.image})` }} /><div className="card-overlay" /><div className="card-content"><p className="eyebrow">{current.tag}</p><h3>{current.title.map((line) => <span key={line}>{line}<br /></span>)}</h3><p>{current.copy}</p><a className="round-arrow" href="#numbers" aria-label="Continue to numbers">-&gt;</a></div><div className="card-index">{activeTab === 'trio' ? 'A' : activeTab === 'city' ? 'B' : 'C'}<span>/03</span></div></div></section>

      <section className="numbers" id="numbers"><div className="section-kicker"><span>02</span><span>BY THE NUMBERS</span></div><div className="stat-grid"><div className="stat"><strong>3</strong><span>PLAYABLE PROTAGONISTS</span></div><div className="stat"><strong>69</strong><span>STORY MISSIONS</span></div><div className="stat"><strong>48.7</strong><span>SQ MI OF LOS SANTOS</span></div><div className="stat accent"><strong>∞</strong><span>WAYS TO GET LOST</span></div></div></section>
      <footer><span>LOS SANTOS FIELD NOTES</span><span>AN UNOFFICIAL FAN ARCHIVE / 2026</span><a href="#top">BACK TO TOP ^</a></footer>
    </main>
  )
}

export default App
