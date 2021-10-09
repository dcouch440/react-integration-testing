import React from 'react';
import CardImageThumb from './CardImageThumb';
import CardTitle from './CardTitle';

export default function Card ({
  imageUrl,
  title
}) {
  return (
    <div>
      <CardTitle text={title} />
      <CardImageThumb url={imageUrl} />
    </div>
  );
}
