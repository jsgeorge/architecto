import React, { useState } from "react";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ProjectContext } from "./context/project-context";
import { CategoryContext } from "./context/category-context";
import { PropertyContext } from "./context/property-context";
import { UserContext } from "./context/user-context";
function App() {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [properties, setProperties] = useState([]);
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <PropertyContext.Provider value={{ properties, setProperties }}>
          <CategoryContext.Provider value={{ categories, setCategories }}>
            <ProjectContext.Provider value={{ projects, setProjects }}>
              <BrowserRouter>
                {/* <Header /> */}
                <div className="container">
                  <Routes />
                </div>
              </BrowserRouter>
            </ProjectContext.Provider>
          </CategoryContext.Provider>
        </PropertyContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
