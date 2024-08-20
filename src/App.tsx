import { Features } from "./components/Features";

function App() {
  return (
    <>
      <header className="mx-8 mb-16 mt-20 flex flex-col items-center">
        <h1 className="text-2xl lg:text-4xl font-extralight">
          Reliable, efficient delivery
        </h1>
        <h2 className="mb-4 text-2xl lg:text-4xl font-semibold">
          Powered by Technology
        </h2>
        <p className="max-w-[50ch] text-center text-sm opacity-50">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <Features />
    </>
  );
}

export default App;
