import PocketBase from "https://unpkg.com/pocketbase@0.8.3/dist/pocketbase.es.mjs";
const USERNAME = "moali5@csu.fullerton.edu";
const PASSWORD = "1234567890";
const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null))
);
function App() {
  return /* @__PURE__ */ React.createElement("div", { className: "App" }, /* @__PURE__ */ React.createElement("h2", { class: "text-blue-300" }, "welcome"));
}
