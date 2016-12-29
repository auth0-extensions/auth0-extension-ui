# Auth0 Extension UI

[![npm](https://img.shields.io/npm/dt/https://www.npmjs.com/package/auth0-extension-ui.svg)](https://www.npmjs.com/package/auth0-extension-ui)

This extension is a components library which is used by other extensions. You can find components code inside `src/components`.

Each component has:
- the component itself (index.js)
- the specs file (tests)
- the stories file (which has the examples that appear in storybook)

# Run storybook
`npm run storybook` or go to [auth0-extension-ui github pages](https://auth0-extensions.github.io/auth0-extension-ui/)

# Publish storybook
Run `npm run publish-storybook` to publish a new storybook version to github pages.

# Adding tests to your components
Simply add them to `tests` folder with `specs.js` extension. `npm test` will run them all.

# Additional notes
Auth0 styles were added in [.storybook/head.html](https://github.com/auth0-extensions/auth0-extension-ui/tree/master/.storybook/head.html).

# Components

The list of components can be found in [src/components/index.js](https://github.com/auth0-extensions/auth0-extension-ui/blob/master/src/components/index.js) file.
Components are divided in different categories taking into account their responsibilities.

### Categories
- `Form`: components inside `src/components/Form` are components that should be used in forms and use [redux-form v6](https://redux-form.com). Note that these components may or may not accept `label` property, which is going to render them differently;
- `Header`: contains headers for pages;
- `Messages`: has Alert components (for success, error, etc messages);
- `Modal`: custom components for modals;
- `Page`: this folder has components that do not fit in any other category. For example, a CodeEditor, Pagination or LoadingPanel;
- `Sidebar`: html references on side menus;
- `Tab`: custom auth0 tabs;
- `Table`: custom table components.

For any components, you could have some examples on how to use components looking at `[component].stories.js` and `[component].specs.js` files. In the component definition, the `propTypes` define which properties a component may receive and which ones are required properties.
