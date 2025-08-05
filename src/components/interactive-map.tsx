"use client";

import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const locations = [
  { lat: 19.576856, lng: -99.761804, name: "Oficina Corporativa" }, 
];

export function InteractiveMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center text-center p-4">
        <div>
          <p className="font-semibold text-destructive">API Key de Google Maps no encontrada.</p>
          <p className="text-sm text-muted-foreground">
            Por favor, configure la variable de entorno NEXT_PUBLIC_GOOGLE_MAPS_API_KEY para mostrar el mapa.
          </p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={locations[0]}
        defaultZoom={15}
        mapId="stonhard-map"
        className="w-full h-full"
        gestureHandling={'greedy'}
        disableDefaultUI={false}
      >
        {locations.map((loc) => (
          <Marker key={loc.name} position={loc} title={loc.name} />
        ))}
      </Map>
    </APIProvider>
  );
}
