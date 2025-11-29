function Body() {
  let items = [
    "Library, Not a Framework: React is a JavaScript library for building user interfaces",
    "Virtual DOM: React utilizes a Virtual DOM,",
    "Component-Based Architecture: React promotes a component-based approach",
    "SX (JavaScript XML): React uses JSX, a syntax extension that allows developers to write HTML-like code directly within JavaScript. ",
    "One-Way Data Binding: React employs one-way data binding, meaning data flows in a single direction",
    "Declarative Programming: React is declarative, meaning developers describe what the UI should look like for a given state",
  ];
  return (
    <div className="">
      <h1 className="text-center mt-10 text-2xl mb-2">Fan facts about react</h1>
      <ul>
        {/* for (let i = 0; i < items; i++) {
            <li className="ml-10 ">item -1</li>

        } */}

        {items.map((item, inex) => (
          <li className="ml-10 list-disc text-cyan-400 p-2">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Body;
