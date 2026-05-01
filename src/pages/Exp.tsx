import './Exp.css';

export default function Exp() {
  // Static mock data. We can easily update this manually!
  const expSpots = [
    { level: '1-10', monster: 'Poring, Lunatic', location: 'Prontera South Gate', type: 'Base & Job' },
    { level: '10-25', monster: 'Rocker, Poison Spore', location: 'Prontera West Gate', type: 'Base & Job' },
    { level: '25-40', monster: 'Thief Bug, Tarou', location: 'Sewer', type: 'High Job' },
    { level: '40-50', monster: 'Skeleton Worker', location: 'Mjolnir Dead Pit', type: 'Balanced' },
    { level: '50-60', monster: 'Magnolia, Desert Wolf', location: 'Morroc', type: 'High Base' },
  ];

  return (
    <div className="exp-container">
      <h2>Leveling & EXP Guide</h2>
      <p>Data manually sourced. Best spots to maximize your Odin's Blessing.</p>
      
      <div className="table-wrapper">
        <table className="exp-table">
          <thead>
            <tr>
              <th>Level Range</th>
              <th>Monster(s)</th>
              <th>Location</th>
              <th>Focus</th>
            </tr>
          </thead>
          <tbody>
            {expSpots.map((spot, index) => (
              <tr key={index}>
                <td>{spot.level}</td>
                <td>{spot.monster}</td>
                <td>{spot.location}</td>
                <td>{spot.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
