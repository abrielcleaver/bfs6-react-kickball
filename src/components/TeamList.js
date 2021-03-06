import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamList({ teams }) {
  // console.log(teams);
  return (
    <>
      <h1>Teams</h1>
      <div>
        {teams.map((team) => (
          <Link key={team.id} to={`/teams/${team.id}`}>
            {team.name}
          </Link>
        ))}
      </div>
    </>
  );
}
