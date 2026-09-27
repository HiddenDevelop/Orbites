import { ThinkingFood } from "./components/ThinkingFood";

function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "48px",
        background: "#111",
      }}
    >
      <ThinkingFood food="strawberry" state="thinking" size={140} />

      <ThinkingFood food="donut" state="thinking" size={140} />
    </main>
  );
}

export default App;
