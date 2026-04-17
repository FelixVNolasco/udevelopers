import Map from "@/assets/maps/Nuestras oficinas.svg";

// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
// } from "react-simple-maps";

// import NorthAmericaMapsJson from "@/assets/maps/custom.geo.json";

// const markers: Array<{
//   name: string;
//   coordinates: [number, number];
//   markerOffset: number;
// }> = [
//   { markerOffset: -15, name: "Toluca", coordinates: [19.28786, -99.65324] },
//   { markerOffset: -15, name: "CDMX", coordinates: [19.42847, -99.12766] },
//   { markerOffset: -15, name: "Mérida", coordinates: [20.97537, -89.61696] },
//   {
//     markerOffset: -15,
//     name: "Houston, TX",
//     coordinates: [29.76328, -95.36327],
//   },
//   {
//     markerOffset: -15,
//     name: "Miami, FL",
//     coordinates: [25.77427, -80.19366],
//   },
//   {
//     markerOffset: -15,
//     name: "New Haven, CT",
//     coordinates: [41.30815, -72.92816],
//   },
// ];

const InteractiveMapOffices = () => {
  return (
    <img id="oficinas" src={Map} className="w-full" />
    // <div className="grid gap-4">
    //   <h3 className="text-center text-2xl font-bold text-[#00B4E9] lg:text-4xl">
    //     Nuestras oficinas
    //   </h3>
    //   <ComposableMap
    //     projection="geoAzimuthalEqualArea"
    //     projectionConfig={{
    //       rotate: [58, 20, 0],

    //       scale: 200,
    //     }}
    //   >
    //     <Geographies geography={NorthAmericaMapsJson}>
    //       {({ geographies }) =>
    //         geographies.map((geo) => (
    //           <Geography
    //             key={geo.rsmKey}
    //             geography={geo}
    //             fill="#d3d3d3"
    //             stroke="#fff"
    //           />
    //         ))
    //       }
    //     </Geographies>
    //     {markers.map(({ name, coordinates, markerOffset }) => (
    //       <Marker key={name} coordinates={coordinates}>
    //         <circle r={10} fill="#0044C1" stroke="#1B6CFF" strokeWidth={2} />
    //         <text
    //           textAnchor="middle"
    //           className="text-sm"
    //           y={markerOffset}
    //           style={{ fill: "#0044C1" }}
    //         >
    //           {name}
    //         </text>
    //       </Marker>
    //     ))}
    //   </ComposableMap>
    // </div>
  );
};

export default InteractiveMapOffices;
