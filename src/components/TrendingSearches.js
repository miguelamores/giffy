import React, { useState, useEffect } from 'react';
import './TrendingSearches.css';
import getTrendingTerms from 'services/getTrendingTermsService';
import useNearScreen from 'hooks/useNearScreen';

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

const LazyTranding = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '50px' });

  return <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>;
};

export default LazyTranding;
