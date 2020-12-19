import React from "react";
import Header from "./components/Header/Header";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="app">
      <Header color="white" onClick={() => {}} />
    </div>
  );
};

export default App;
