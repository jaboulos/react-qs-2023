import React, { useState, useEffect } from 'react';
import { prompt1text } from '../prompt-text-1';
import axios from 'axios';

export const Solution1a = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  const handleTogglePrompt = () => {
    setShowPrompt((prevState) => !prevState);
  };
  return (
    <div>
      <div>
        <p>Problem Description</p>
        <button onClick={handleTogglePrompt}>
          <div>{showPrompt ? `Hide Prompt` : `Show Prompt`}</div>
        </button>
        <p>{showPrompt ? prompt1text : null}</p>
      </div>
    </div>
  );
};
