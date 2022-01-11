import createAction from "./create-action";
import { match } from "../shared";

const actions = {
  UPDATE: "UPDATE",
};

export const update = createAction(actions.UPDATE);

const imageReducer = (state, action) => {
  return match({
    [actions.UPDATE]: { ...state, url: action.payload },
    _default: { url: "eror" },
  })(action.type);
};

export default imageReducer;
