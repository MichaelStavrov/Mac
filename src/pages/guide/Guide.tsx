import React from 'react';

import { ReleaseCard } from "./ReleaseCard/ReleaseCard";
import image from "./img/macbook-air-470.png";

export const Guide: React.FC = () => {
  return (
    <div>
      <h1>Byeyer's Guide</h1>
      <ReleaseCard 
        image={image}
        title="MacBook Air" 
        productBuyStatus="Buy Now" 
        statusCell="Just Updated" 
        descripton="description"/>
    </div>
  )
}