import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.css";

const el = document.getElementById("app") as HTMLDivElement;
const root = createRoot(el);

root.render(<App />);
