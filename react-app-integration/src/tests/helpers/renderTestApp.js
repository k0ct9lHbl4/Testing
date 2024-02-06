import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { createReduxStore } from "../../store/store";
import { AppRouter } from "../../router/AppRouter";

export const renderTestApp = (component, { initialState, initialRoute } = {}) => {
  const store = createReduxStore(initialState);

  const memoryRouterProps = initialRoute ? { initialEntries: [initialRoute] } : {};

  return render(
    <Provider store={store}>
      <MemoryRouter {...memoryRouterProps}>
        {component}
        <AppRouter />
      </MemoryRouter>
    </Provider>
  );
};
