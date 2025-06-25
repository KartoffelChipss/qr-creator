import { useEffect, useRef } from 'preact/hooks';
import L from 'leaflet';

export default function MapPicker({
    coords,
    onSelect,
}: {
    coords?: { lat: number; lng: number };
    onSelect: (coords: { lat: number; lng: number }) => void;
}) {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const onSelectRef = useRef(onSelect);
    onSelectRef.current = onSelect;

    useEffect(() => {
        if (!mapRef.current) return;

        const map = L.map(mapRef.current).setView([0, 0], 2);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        if (coords) map.setView([coords.lat, coords.lng], 6);
        const marker = L.marker(
            coords ? [coords.lat, coords.lng] : [0, 0]
        ).addTo(map);

        map.on('click', function (e) {
            const { lat, lng } = e.latlng;
            marker.setLatLng([lat, lng]);
            onSelect?.({ lat, lng });
            onSelectRef.current({ lat, lng });
        });

        return () => {
            map.remove();
        };
    }, []);

    return (
        <div
            ref={mapRef}
            style={{
                height: '300px',
                width: '100%',
                borderRadius: '8px',
                marginBottom: '20px',
            }}
        />
    );
}
