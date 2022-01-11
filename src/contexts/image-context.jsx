import { createContext, useReducer } from "react";
import { imageReducer } from "../reducers";

const initial = { state: { url: "" }, dispatch: (action) => null };
const ImageContext = createContext(initial);

export function ImageContextProvider({ children }) {
  const [state, dispatch] = useReducer(imageReducer, { url: "" });

  return (
    <ImageContext.Provider value={{ state, dispatch }}>
      {children}
    </ImageContext.Provider>
  );
}

export default ImageContext;
