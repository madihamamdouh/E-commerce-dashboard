//LOGIN ADMIN
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_START": {
      return { user: null, isFetching: true, error: false };
    }
    case "LOGIN_SUCCESS": {
      return { user: action.payload, isFetching: false, error: false };
    }
    case "LOGIN_FAILURE": {
      return { user: null, isFetching: false, error: true };
    }
    case "USER_LOGOUT": {
      return {};
    }
    default:
      return state;
  }
};

//USERS OPERATIONS
export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "USERS_START": {
      return { users: null, isFetching: true, error: false };
    }
    case "USERS_SUCCESS": {
      return { users: action.payload, isFetching: false, error: false };
    }
    case "USERS_FAILURE": {
      return { users: null, isFetching: false, error: true };
    }
    case "USERS_RESET": {
      return { users: [] };
    }
    default:
      return state;
  }
};
