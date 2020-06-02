import React from "react";
import { Switch, Route } from "react-router-dom";

//Pages
//User Pages
import ModelLayoutPage from "./components/pages/modelpage";
import HomePage from "./components/pages/home";
import ProjectsPage from "./components/pages/projects";
//import ProjectsSellPage from "./components/pages/selling";
// import ProjectsRentPage from "./components/pages/renting";
// import ProjectsBuyPage from "./components/pages/buying";
import AboutPage from "./components/pages/about";
import ContactsPage from "./components/pages/contact";
import ClientsPage from "./components/pages/clients";
import ModelPage from "./components/pages/model";
import ServicesPage from "./components/pages/services";
import ListingsPage from "./components/pages/listings";
//Adim pages
import Dashboard from "./admin/dashboard";
//Auth
import AdminLogin from "./admin/auth/login";
//pages
import AdminProjectsPage from "./admin/pages/projects";
import AdminPropertyForm from "./admin/comonents/properties/form";
import AdminCategoriesPage from "./admin/pages/categories";
import AdminPropertiesPage from "./admin/pages/properties";
import AdminModelPage from "./admin/pages/model";
//Admin Projects
import AdminProjectDetail from "./admin/comonents/projects/detail";
import AdminAddProject from "./admin/comonents/projects/add";
import AdminEditProject from "./admin/comonents/projects/edit";
//Categories
//Properties
//Admin
import Admin from "./admin";

const Routes = () => {
  return (
    <Switch>
      {/* User Routes */}
      <Route
        path="/listings/:show/:category/:id"
        exact
        component={ListingsPage}
      />
      <Route path="/projects/:id/detail" exact component={ModelPage} />
      <Route path="/listings/:show" exact component={ListingsPage} />
      <Route path="/model/:id" exact component={ModelPage} />
      {/* <Route path="/buying" exact component={ProjectsBuyPage} />
      <Route path="/renting" exact component={ProjectsRentPage} /> */}
      {/* <Route path="/selling" exact component={ProjectsSellPage} /> */}
      <Route path="/clients" exact component={ClientsPage} />
      <Route path="/contacts" exact component={ContactsPage} />
      <Route path="/finance" exact component={ModelPage} />
      <Route path="/services" exact component={ServicesPage} />
      <Route path="/projects" exact component={ProjectsPage} />

      {/* Admin Routes */}
      <Route
        path="/admin/projects/:id/edit"
        exact
        component={AdminEditProject}
      />
      <Route
        path="/admin/projects/:id/detail"
        exact
        component={AdminProjectDetail}
      />
      <Route
        path="/admin/properties/:id/edit"
        exact
        component={AdminPropertyForm}
      />
      <Route
        path="/admin/projects/:srchstr"
        exact
        component={AdminProjectsPage}
      />

      <Route path="/admin/projects/add" exact component={AdminAddProject} />
      <Route path="/admin/properties" exact component={AdminPropertiesPage} />
      <Route path="/admin/projects" exact component={AdminProjectsPage} />
      <Route path="/admin/model" exact component={AdminModelPage} />
      <Route path="/admin/categories" exact component={AdminCategoriesPage} />
      <Route path="/admin/dashboard" exact component={Dashboard} />
      <Route path="/admin" exact component={Admin} />
      {/* User Pages 2 */}
      <Route path="/about" exact component={AboutPage} />
      <Route path="/modellayout" component={ModelLayoutPage} />
      <Route path="/" exact component={HomePage} />
      {/* Page Not found */}
      <Route
        render={() => (
          <div className="pageNotFound">
            {" "}
            <h3>404 Page not Found</h3>
          </div>
        )}
      />
    </Switch>
  );
};
export default Routes;
