import React from "react";

export function Map(url) {
  return (
    <div>
      <iframe
        title="Map"
        src={url}
        width="400px"
        height="400px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
