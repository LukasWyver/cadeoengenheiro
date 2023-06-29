import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export function Map() {
  const position = [-23.30378991360685, -51.162481966032225];

  return (
    <section>
      <MapContainer center={position} zoom={18} style={{height: 320, width: '100vw'}} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Web2midia<br /> Agência digital.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Map;
