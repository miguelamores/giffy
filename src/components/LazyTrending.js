import React, { Suspense } from 'react';
import './TrendingSearches.css';
import useNearScreen from 'hooks/useNearScreen';

const TrendingSearches = React.lazy(() => import('./TrendingSearches'));

const LazyTrending = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '50px' });

  return (
    <div ref={fromRef}>
      <Suspense fallback="Cargando...">
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  );
};

export default LazyTrending;
