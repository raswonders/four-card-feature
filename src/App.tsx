import features from "./data/features";

function App() {
  return (
    <>
      <header>
        <h1 className="">Reliable, efficient delivery</h1>
        <h2 className="">Powered by Technology</h2>
        <p className="">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <section className="">
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
