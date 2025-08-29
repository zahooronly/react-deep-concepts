// import { EffectPractice } from "./components/EffectPractice";
// import { StatesPractice } from "./components/StatesPractice";
import { Outlet } from "react-router";
import { Header } from "./components/Header";
// import { MemoPractice } from "./components/MemoPractice";
// import { RefPractice } from "./components/RefPractice";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <StatesPractice /> */}
      {/* <EffectPractice /> */}
      {/* <RefPractice /> */}
      {/* <MemoPractice /> */}
    </>
  );
}
