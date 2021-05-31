import React, { useState, useEffect } from 'react';
import './TrendingSearches.css';
import getTrendingTerms from 'services/getTrendingTermsService';

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return (
    <div className="trending-searches">
      {trends.map(trend => (
        <p key={trend}>
          <a href={`/search/${trend}`}>{trend}</a>
        </p>
      ))}
    </div>
  );
};

export default TrendingSearches;
