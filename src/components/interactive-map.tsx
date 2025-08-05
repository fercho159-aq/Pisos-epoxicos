"use client";

import React from "react";

export function InteractiveMap() {
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.3793498844813!2d-99.7643789255243!3d19.525542181745424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d26308077b1029%3A0x4a3fff6541f5344d!2sLEXFOR!5e0!3m2!1ses-419!2smx!4v1721344843916!5m2!1ses-419!2smx";

  return (
    <iframe
      src={embedUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ubicación de LEXFOR S.A DE C.V"
    ></iframe>
  );
}
