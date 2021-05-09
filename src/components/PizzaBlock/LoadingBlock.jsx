import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="135" cy="125" r="118" />
      <rect x="1" y="301" rx="6" ry="6" width="280" height="70" />
      <rect x="0" y="260" rx="6" ry="6" width="280" height="26" />
      <rect x="1" y="385" rx="6" ry="6" width="76" height="31" />
      <rect x="147" y="385" rx="20" ry="20" width="133" height="50" />
    </ContentLoader>
  );
}

export default LoadingBlock;
