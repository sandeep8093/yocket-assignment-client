import React from 'react';
import '../App.css';

const ResultPage = ({ result }) => {
  return (
    <div className="result-page">
      <h2 className="center-text">Result</h2>
      {result.success ? (
        <div className="success">
            
          <p>Capture successful! Cop {result.capturingCop.name} captured the fugitive.</p>
          <img src={result.capturingCop.image} alt={result.capturingCop.name} className="cop-image" />
          <p>Fugitive always get Caught!!</p>
        </div>
      ) : (
        <p className="failure">Capture failed. The fugitive remains at large.</p>
      )}
    </div>
  );
}

export default ResultPage;
