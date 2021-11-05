export function createRoute(routes, HTMLContainer) {
  let currentRoute = null;

  window.addEventListener('popstate', (event) => {
<<<<<<< HEAD
    console.log(event);
=======
    removePreviousPage();
    if (event.state !== null) {
      removePreviousPage(findRouterById(event.state.id));
    }
>>>>>>> fb3545e31aa0f33fe0aa5890c05103a47d73adef
  });

  function renderRoute(routeObj) {
    currentRoute = routeObj;
    document.title = routeObj.title;
    routeObj.page.render(HTMLContainer);
  }

<<<<<<< HEAD
=======
  function removePreviousPage() {
    if (currentRoute !== null) {
      currentRoute.page.remove();
      currentRoute = null;
    }
  }

>>>>>>> fb3545e31aa0f33fe0aa5890c05103a47d73adef
  function renderRoutehistoryChange(routeObj) {
    renderRoute(routeObj);

    window.history.pushState({ id: routeObj.id }, routeObj.title, routeObj.url);
  }

  function findRouterById(id) {
    return routes.find((route) => route.id === id);
  }

  return {
    go(id) {
<<<<<<< HEAD
=======
      removePreviousPage();
>>>>>>> fb3545e31aa0f33fe0aa5890c05103a47d73adef
      const routeObj = findRouterById(id);
      renderRoutehistoryChange(routeObj);
    },
  };
}
