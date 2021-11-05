export function createRoute(routes, HTMLContainer) {
  let currentRoute = null;

  window.addEventListener('popstate', (event) => {
    removePreviousPage();
    if (event.state !== null) {
      removePreviousPage(findRouterById(event.state.id));
    }
  });

  function renderRoute(routeObj) {
    currentRoute = routeObj;
    document.title = routeObj.title;
    routeObj.page.render(HTMLContainer);
  }

  function removePreviousPage() {
    if (currentRoute !== null) {
      currentRoute.page.remove();
      currentRoute = null;
    }
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
      removePreviousPage();
      const routeObj = findRouterById(id);
      renderRoutehistoryChange(routeObj);
    },
  };
}
