import './Exp.css';

interface MonsterInfo {
  name: string;
  id: number;
  reason: string;
}

interface ExpSpot {
  level: string;
  monsters: MonsterInfo[];
  location: string;
  type: string;
}

export default function Exp() {
  const expSpots: ExpSpot[] = [
    { 
      level: '10-15', 
      location: 'Prontera West Gate', 
      type: 'Base & Job',
      monsters: [
        { name: 'Rocker', id: 1052, reason: 'High Base EXP for fast early leveling. (AFOB)' },
        { name: 'Mandragora', id: 1020, reason: 'High Job EXP focus. Best for pushing early job advancement.' }
      ]
    },
    { 
      level: '16-25', 
      location: 'Capital Sewer / Mjolnir', 
      type: 'Base & Job',
      monsters: [
        { name: 'Poison Spore', id: 1077, reason: 'Excellent Job EXP; often used for early job rushing.' },
        { name: 'Ambernite', id: 1094, reason: 'High Base EXP; good for pushing Base Level.' }
      ]
    },
    { 
      level: '26-35', 
      location: 'Payon South / Shipwreck', 
      type: 'Base & Job',
      monsters: [
        { name: 'Spore', id: 1014, reason: 'Balanced, but leans toward Job EXP.' },
        { name: 'Roda Frog', id: 1012, reason: 'High Job EXP; drops DEF +120 card.' }
      ]
    },
    { 
      level: '36-45', 
      location: 'Labyrinth / Morroc', 
      type: 'Base',
      monsters: [
        { name: 'Vocal', id: 1088, reason: 'High Base EXP; drops HP +4,800 card.' },
        { name: 'Pecopeco', id: 1019, reason: 'High Base EXP; Large size (good for certain classes).' }
      ]
    },
    { 
      level: '46-55', 
      location: 'Labyrinth / Sograt', 
      type: 'Job & Base',
      monsters: [
        { name: 'Savage', id: 1166, reason: 'High Job EXP; drops M.DEF +120 card.' },
        { name: 'Golem', id: 1040, reason: 'High Base EXP; drops Final ASPD +30% card.' }
      ]
    },
    {
      level: '56-65',
      location: 'Pyramid / Sphinx',
      type: 'Base',
      monsters: [
        { name: 'Mummy', id: 1041, reason: 'High Base EXP; good for Odin burning.' },
        { name: 'Minorous', id: 1149, reason: 'High Base EXP; drops M.ATK +6% card.' }
      ]
    }
  ];

  return (
    <div className="exp-container">
      <h2>Leveling & EXP Guide</h2>
      <p>Detailed spots to maximize your Odin's Blessing, including why each monster is optimal.</p>
      
      <div className="spots-list">
        {expSpots.map((spot, index) => (
          <div key={index} className="spot-card">
            <div className="spot-header">
              <h3>Level {spot.level}</h3>
              <div className="spot-meta">
                <span className="location">📍 {spot.location}</span>
                <span className="focus">🎯 {spot.type}</span>
              </div>
            </div>
            
            <div className="monsters-container">
              {spot.monsters.map((mob, mIndex) => (
                <div key={mIndex} className="monster-card">
                  <div className="monster-image-wrapper">
                    <img 
                      src={`https://db.irowiki.org/image/monster/${mob.id}.png`} 
                      alt={mob.name} 
                      className="monster-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="monster-info">
                    <h4>{mob.name}</h4>
                    <p>{mob.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="notes">
        <h4>Tips for Leveling:</h4>
        <ul>
          <li>Always use Odin's Blessing on monsters that give high job exp if you want to change job faster.</li>
          <li>Target monsters that are within 3 levels of your current level to avoid EXP penalty.</li>
          <li>Party up! You get a bonus to EXP if you are in a full party with different classes.</li>
        </ul>
      </div>
    </div>
  );
}
