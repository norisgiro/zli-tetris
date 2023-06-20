import React from "react";

import "./GameStats.css";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <div className="background">
      <ul className="GameStats GameStats__right">
        <li className="stats-item">
          Level:
          <span className="value">{level}</span>
        </li>
        <li className="stats-item">
          Lines to level:
          <span className="value">{linesToLevel}</span>
        </li>
        <li className="stats-item">
          Points:
          <span className="value">{points}</span>
        </li>
      </ul>
    </div>
  );
};
export default React.memo(GameStats);
