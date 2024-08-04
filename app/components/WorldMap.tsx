import Image from "next/image";


export function WorldMap() {
  return (
    <div className="global-map-container">
        <h2>Global map</h2>
        <div className="map-container">
            <Image src="/world-map-dark.avif"
                width={950}
                height={200}
                className="world-map"
                alt="global-map"
            />
        </div>
    </div>
  )
}
