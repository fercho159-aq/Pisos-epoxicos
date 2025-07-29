"use client";

import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const locations = [
  { lat: 19.4878, lng: -99.1837, name: "Oficina CDMX" }, // Azcapotzalco
  { lat: 25.6866, lng: -100.3161, name: "Rep. Monterrey" },
  { lat: 20.6597, lng: -103.3496, name: "Rep. Guadalajara" },
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
        defaultCenter={{ lat: 19.4326, lng: -99.1332 }}
        defaultZoom={5}
        mapId="stonhard-map"
        className="w-full h-full"
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        {locations.map((loc) => (
          <Marker key={loc.name} position={loc} title={loc.name} />
        ))}
      </Map>
    </APIProvider>
  );
}
