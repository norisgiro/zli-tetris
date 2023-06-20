import React from "react";

import "./Controls.css";

const Controls = () => {
  return (
    <div className="style">
      <div className="background-item">
        <h2>Steuerung</h2>
        <ul>
          <li>Pfeiltasten links/rechts: Block nach links/rechts bewegen</li>
          <li>Pfeiltaste nach unten: Block schneller fallen lassen</li>
          <li>Pfeiltaste nach oben: Block drehen</li>
          <li>Leertaste: Block direkt auf den Boden fallen lassen</li>
          <li>Q: Spiel beenden</li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Controls);
