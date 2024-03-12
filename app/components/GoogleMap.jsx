import React from 'react';

const GoogleMap = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width="488"
          height="355"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=vignana%20bharathi%20institute%20of%20technology&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="Google Map"
        ></iframe>
      </div>
      <br />
      <style>{`
        .mapouter {
          position: relative;
          text-align: right;
          height: 355px;
          width: 488px;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          height: 355px;
          width: 488px;
        }
      `}</style>
    </div>
  );
};

export default GoogleMap;
