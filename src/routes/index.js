export function createRoute(routes, HTMLContainer) {
  let currentRoute = null;

  window.addEventListener('popstate', (event) => {
    console.log(event);
  });

  function renderRoute(routeObj) {
    currentRoute = routeObj;
    document.title = routeObj.title;
    routeObj.page.render(HTMLContainer);
  }

  function renderRoutehistoryChange(routeObj) {
    renderRoute(routeObj);

    window.history.pushState({ id: routeObj.id }, routeObj.title, routeObj.url);
  }

  function findRouterById(id) {
    return routes.find((route) => route.id === id);
  }

  return {
    go(id) {
      const routeObj = findRouterById(id);
      renderRoutehistoryChange(routeObj);
    },
  };
}
