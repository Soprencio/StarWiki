import React from 'react';

const FactionIcon = ({ symbol, color = 'currentColor', size = 24, className = '' }) => {
  const icons = {
    rebel: (
      <path d="M12 2C7.03 2 3 6.03 3 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1-11l-2 2h2v4l2-2h-2V7z" />
    ),
    empire: (
      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71zM12 15.5l-4.5 2L12 5.5l4.5 12z" />
    ),
    jedi: (
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    ),
    sith: (
      <path d="M12 3L2 12h3v9h14v-9h3L12 3zm0 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    ),
    mando: (
      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4.07-2.55 7.87-6 8.91-3.45-1.04-6-4.84-6-8.91V6.16l6-2.25 6 2.25v4.93z" />
    )
  };

  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      fill={color} 
      className={className}
    >
      {icons[symbol] || icons.jedi}
    </svg>
  );
};

export default FactionIcon;
