import React from 'react';
import '../App.css';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <br />
        <div className="solarplanets">
          {
            Planets.map((planet) => (<PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
