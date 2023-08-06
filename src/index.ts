import { add } from "./add";

const el = document.createElement("h1");
el.textContent = `12 + 13 = ${add(12, 13)}`;
document.body.appendChild(el);
