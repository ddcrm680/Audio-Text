"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  type TileLayerProps,
  useMap,
} from "react-leaflet";
import { LatLngBounds } from "leaflet";
import { useEffect } from "react";

const locations = [
  {
    position: [28.581898, 77.315238] as [number, number],
    title: "CORP. OFFICE",
    address: "D-50, Sector 2, Noida, Uttar Pradesh - 201301 INDIA",
  },
  {
    position: [1.2808, 103.8488] as [number, number],
    title: "HEAD OFFICE",
    address: "2 Venture Drive #11-15 Vision Exchange, Singapore 608526",
  },
];

function FitBounds() {
  const map = useMap();

  useEffect(() => {
    const bounds = new LatLngBounds(locations.map((x) => x.position));
    map.fitBounds(bounds, { padding: [80, 80] });
    map.scrollWheelZoom?.disable();
  }, [map]);

  return null;
}

export default function Map() {
  const tileLayerProps: TileLayerProps & { attribution?: string } = {
    attribution: "© OpenStreetMap contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  };

  return (
    <MapContainer className="h-[180px] w-full rounded-lg md:h-[500px]">
      <FitBounds />

      <TileLayer {...tileLayerProps} />

      {locations.map((office) => (
        <Marker key={office.title} position={office.position}>
          <Popup>
            <strong>{office.title}</strong>
            <br />
            {office.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
