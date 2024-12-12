import React from 'react';
import { deliveryBoys } from '../data/sampleData';

const Leaderboard = () => {
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {deliveryBoys.map((boy, index) => (
          <li key={index}>
            {index + 1}. {boy.name} - Rating: {boy.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
