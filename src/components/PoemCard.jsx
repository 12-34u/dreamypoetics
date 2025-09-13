import React, { useMemo } from 'react';
import "./ComponentStyles.css";
import "./PoemCard.css";
import "./PoemView.css";
const PoemCard = ({ poem, onSelect }) => {
  // Gracefully handle cases where the poem prop might be missing or incomplete.
  if (!poem || !poem.content) {
    return null;
  }

  const preview = useMemo(() => {
    return poem.content.split('\n').slice(0, 4).join('\n') + '...';
  }, [poem.content]);

  return (
    <div className="poem-card" onClick={() => onSelect(poem)}>
      <h3 className="poem-card-title">{poem.title}</h3>
      <p className="poem-card-preview">{preview}</p>
    </div>
  );
};

export default PoemCard;

