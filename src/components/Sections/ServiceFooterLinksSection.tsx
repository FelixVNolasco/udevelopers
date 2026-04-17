export default function ServiceFooterLinksSection({
  links,
}: {
  links: {
    title: string;
    externalLink: string;
  }[];
}) {
  return (
    <div className="grid gap-12 bg-[#E9E9EA] p-12">
      <h3 className="text-left text-2xl font-semibold text-[#04375E]">
        Solicite su cotización
      </h3>
      <div className="grid-row-3 grid grid-cols-1 gap-4">
        <ul className="grid list-inside list-disc grid-cols-2 gap-2 marker:text-2xl marker:text-[#00B4E9]">
          {links.map((link, index) => (
            <li className="text-left" key={index}>
              <a
                key={index}
                className="border-b border-b-[#00B4E9] text-lg font-bold text-[#00B4E9]"
                href={link.externalLink}
                target="_blank"
                rel="noreferrer"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
