import features from "./data/features";

function App() {
  return (
    <>
      <header className="mx-8 my-20 flex flex-col items-center">
        <h1 className="text-2xl font-extralight">Reliable, efficient delivery</h1>
        <h2 className="mb-4 text-2xl font-semibold">Powered by Technology</h2>
        <p className="text-center text-sm opacity-50">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <section className="mx-8">
        {features.map((feature) => {
          return (
            <article className="" key={feature.name}>
              <h1 className="">{feature.name}</h1>
              <p className="">{feature.description}</p>
              <img src={feature.icon_url} alt="" className="" />
            </article>
          );
        })}
      </section>
    </>
  );
}

export default App;
