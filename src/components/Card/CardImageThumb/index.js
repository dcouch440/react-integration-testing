import React from 'react';

export default function CardImageThumb ({
  url
}) {
  return (
    <div>
      <img
        alt='a broken url'
        src={url}
      />
    </div>
  );
}
