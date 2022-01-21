import { Provider } from "react-redux";
import { AppRouter } from "../../routes/AppRouter";

describe("Prueba sobre el funcionamiento del Router", () => {
  test('Se debe llevar al "login" si el usuario no esta autenticado ', () => {
    const initState = {
      auth: {
        isLogged: false,
        userInfo: null,
      },
    };
    const store = mockStore(initState);
    const wrapper = mount(
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
    expect(wrapper.find(".loginContainer").exist().toBe(true));
  });
});
