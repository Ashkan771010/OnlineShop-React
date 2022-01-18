import { Route, Routes } from 'react-router-dom';

function Router(props) {
  const { routes } = props;
 

  const renderComponent = (route) => {
    document.title = route.title
  };

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          render={() => renderComponent(route)}
          element={route.element}
        />
      ))}
    </Routes>
  );
}

export default Router;
