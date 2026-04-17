import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// Metadata array
const metaDataList = [
  {
    path: "/",
    title: "EPI Group | Ingeniería, Construcción y Proyectos a Nivel Global",
    description:
      "EPI Group conecta tecnología, construcción y operación con más de 25 años de experiencia en proyectos inmobiliarios e industriales. Líder en EPCM, energías renovables, ingeniería industrial, obra civil y desarrollo inmobiliario en América, África y más de 8 países.",
  },
  {
    path: "/epi",
    title: "EPI Equipos | Ingeniería, Construcción y Proyectos a Nivel Global",
    description:
      "Proveedora de Ingeniería, Diseño y Construcción de plantas industriales.",
  },
  {
    path: "/blog",
    title: "EPI Group | Blog",
    description: "Blog de EPI Group",
  },
  {
    path: "/servicios",
    title: "EPI Equipos | Servicios",
    description:
      "EPI Equipos | Ingeniería, Construcción y Proyectos a Nivel Global.",
  },
];

const DynamicMeta = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Find metadata based on current path

  // Sort metadata array by descending path length so that more specific routes match first
  const metaData = [...metaDataList]
    .sort((a, b) => b.path.length - a.path.length)
    .find((meta) => currentPath.startsWith(meta.path)) || {
    title: "Default Title",
    description: "Default description.",
  };

  return (
    <Helmet>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
    </Helmet>
  );
};

export default DynamicMeta;
