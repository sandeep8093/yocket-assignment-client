import React from 'react';

const GameDescription = () => {
  return (
    <div className="game-description">
      <div className="description-content">
        <div className="text">
          <h2 className="center-text">Game Description</h2>
          <p>
            A notorious criminal escape artist has vanished again, leaving law enforcement agencies scrambling to capture the fugitive. In this thrilling game of strategy and pursuit, you take on the role of a police commander overseeing the capture operation.
          </p>
          <p>
            Your task is to deploy a team of elite officers to track down the fugitive in various cities across the country. Using cutting-edge technology and real-time data, you must strategically assign resources and coordinate efforts to apprehend the elusive criminal before they vanish into thin air.
          </p>
          <p>
            Each cop under your command must carefully select their city of operation based on intelligence reports and geographical clues. Once the city is chosen, the cop must then select an electric vehicle suitable for the mission, considering factors such as range, speed, and availability.
          </p>
          <p>
            As the operation unfolds, tension mounts, and every decision becomes critical. Will your team successfully locate and apprehend the fugitive, or will they slip through your fingers once again? The fate of the mission rests in your hands.
          </p>
        </div>
        <div className="image">
          <img src="https://i.ibb.co/4T9jX0s/8.jpg" alt="Fugitive" />
        </div>
      </div>
    </div>
  );
};

export default GameDescription;
