import * as Tabs from '@radix-ui/react-tabs'

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

export default function DossierTabs() {
  return <Tabs.Root className="dossier-tabs" defaultValue="trio">
    <Tabs.List className="tab-list" aria-label="Dossier angles">
      {Object.entries(tabs).map(([key, tab], index) => <Tabs.Trigger key={key} className="tab" value={key}><span>0{index + 1}</span>{tab.label}<b>+</b></Tabs.Trigger>)}
    </Tabs.List>
    {Object.entries(tabs).map(([key, tab]) => <Tabs.Content key={key} className="dossier-card" value={key}>
      <div className="card-image" style={{ backgroundImage: `url(${tab.image})` }} />
      <div className="card-overlay" />
      <div className="card-content"><p className="eyebrow">{tab.tag}</p><h3>{tab.title.map((line) => <span key={line}>{line}<br /></span>)}</h3><p>{tab.copy}</p><a className="round-arrow" href="#numbers" aria-label="Continue to numbers">-&gt;</a></div>
      <div className="card-index">{key === 'trio' ? 'A' : key === 'city' ? 'B' : 'C'}<span>/03</span></div>
    </Tabs.Content>)}
  </Tabs.Root>
}
