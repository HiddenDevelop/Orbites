import { ThinkingFood } from "./components/ThinkingFood";

function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#111",
      }}
    >
      <ThinkingFood food="strawberry" state="thinking" size={140} />
    </main>
  );
}

export default App;
