import { authReducer } from "../../../components/Reducers/authReducer";
import { types } from "../../../components/Type/types";

describe("Test sobre AuthReducer", () => {
  test("Debe retornar el estado por defecto ", () => {
    const state = authReducer({ isLogged: false }, {});
    expect(state).toEqual({ isLogged: false });
  });

  test("Se debe autenticar el usuario ", () => {
    const action = {
      type: types.loginSuccess,
      payload: {
        email: "mail@mail.com",
        password: "123456",
      },
    };
    const state = authReducer({ isLogged: false }, action);
    expect(state).toEqual({
      isLogged: true,
      loading: false,
      userInfo: {
        email: "mail@mail.com",
        password: "123456",
      },
    });
  });
  test("Prueba Logout- Debe volver al estado inicial y borrar los datos del usuario logueado", () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer(
      {
        isLogged: true,
      },
      action
    );
    expect(state).toEqual({});
    console.log(state);
  });
});
