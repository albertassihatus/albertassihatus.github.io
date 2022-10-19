import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="missions">
          <br />
          <br />
          <Title headline="Missões" />
          <br />
          <br />
          <div className="missionDiv">
            {
              missions.map((mission) => (<MissionCard
                key={ mission.name }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Missions;
