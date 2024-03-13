import React from 'react';

const GoogleMap = () => {
  return (
      <div className="overflow-hidden bg-transparent">
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=vignana%20bharathi%20institute%20of%20technology&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="Google Map"
        ></iframe>
        <a href="https://www.embedgooglemap.net" className="hidden">Embed Google Map</a>
      </div>
  );
};

export default GoogleMap;
