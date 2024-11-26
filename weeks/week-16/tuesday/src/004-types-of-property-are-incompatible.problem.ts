const routingConfig = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: 12,
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const createRoutes = (config: {
  routes: {
    path: string;
    component: string;
  }[];
}) => { };

createRoutes(routingConfig);

// The trickiest part can sometimes be to understand the actualy error message.
// Sometimes it helps to read the end of the error message first.
// Figure out a way to narrow doen the error and refactor to move the error to show up closer to the root problem.