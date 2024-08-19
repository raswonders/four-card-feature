import features from "./data/features";

function App() {
  const bgStyle = [
    "bg-[#44D3D2]",
    "bg-[#EA5454]",
    "bg-[#FCAE4A]",
    "bg-[#549EF2]",
  ];

  return (
    <>
      <header className="mx-8 my-20 flex flex-col items-center">
        <h1 className="text-2xl font-extralight">
          Reliable, efficient delivery
        </h1>
        <h2 className="mb-4 text-2xl font-semibold">Powered by Technology</h2>
        <p className="text-center text-sm opacity-50">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <section className="mx-8 grid gap-6">
        {features.map((feature, index) => {
          return (
            <article
              className="h-[13.875rem] flex flex-col bg-white rounded-lg shadow-feature overflow-hidden"
              key={feature.name}
            >
              <div className={`h-1 ${bgStyle[index]}`}></div>
              <div className="p-7 flex flex-col justify-between grow">
                <header>
                  <h1 className="text-xl font-medium">{feature.name}</h1>
                  <p className="text-xs opacity-50 leading-relaxed">
                    {feature.description}
                  </p>
                </header>
                <img
                  width="57px"
                  src={feature.icon_url}
                  alt=""
                  className="self-end"
                />
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default App;
