import features from "../data/features";

const borderColor = [
  "border-[#44D3D2]",
  "border-[#EA5454]",
  "border-[#FCAE4A]",
  "border-[#549EF2]",
];

export function Features() {
  return (
    <main className="max-w-[70rem] mx-8 lg:mx-auto grid gap-6 lg:gap-7 lg:grid-cols-3 lg:grid-rows-2">
      {features.map((feature, index) => {
        return (
          <article
            className={`h-[13.875rem] flex flex-col bg-white rounded-lg shadow-feature overflow-hidden odd:lg:row-span-2 odd:self-center`}
            key={feature.name}
          >
            <div
              className={`p-7 flex flex-col justify-between grow border-t-[3px] ${borderColor[index]}`}
            >
              <header>
                <h2 className="text-xl font-medium">{feature.name}</h2>
                <p className="text-xs opacity-50 leading-relaxed max-h-14 overflow-hidden">
                  {feature.description}
                </p>
              </header>
              <img
                width="57"
                src={feature.icon_url}
                alt=""
                className="self-end"
              />
            </div>
          </article>
        );
      })}
    </main>
  );
}
