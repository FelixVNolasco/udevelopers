import { AboutSectionInterface } from "@/utils/interfaces";
import { NavLink } from "react-router";

export default function HomeAboutSection({
  abousSection,
}: {
  abousSection: AboutSectionInterface;
}) {
  return (
    <div id="nosotros" className="grid gap-6 lg:grid-cols-2 lg:gap-12">
      <img
        src={abousSection.image}
        className="h-full w-full object-cover object-center"
      ></img>
      <div className="flex flex-col items-start justify-center gap-4">
        <h2 className="max-w-md text-left text-2xl font-bold lg:text-4xl">
          {abousSection.title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: abousSection.description }} />
        <div className="grid grid-cols-1 gap-4">
          <h3 className="text-left text-base font-semibold text-blue-600 lg:text-lg">
            Nuestras compañías son:
          </h3>
          <ul className="max-w-lg list-inside list-disc">
            {abousSection.associationCompany.map((company, index) => (
              <>
                {company.path !== "" ? (
                  <li key={index} className="text-left text-base lg:text-lg">
                    {
                      company.path == "/epi" ? (
                        <NavLink
                          to={company.path}
                          className="text-left text-base text-blue-600 underline lg:text-lg"
                        >
                          <span className="font-bold">{company.title}</span>:{" "}
                        </NavLink>
                      ) : (
                        <a
                          href={company.path}
                          target="_blank"
                          rel="noreferrer"
                          key={index}
                          className="text-left text-base text-blue-600 underline lg:text-lg"
                        >
                          <span className="font-bold">{company.title}</span>:{" "}
                        </a>
                      )
                    }
                    {company.description}
                  </li>
                )  : (
                  <li key={index} className="text-left text-base lg:text-lg">
                    <span className="font-bold">{company.title}</span>:{" "}
                    {company.description}
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
