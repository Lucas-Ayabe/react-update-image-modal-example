import { ImageContextProvider } from "./contexts/image-context";
import * as Pages from "./pages";

function App() {
  return (
    <ImageContextProvider>
      <Pages.HomeWithFlux />
    </ImageContextProvider>
  );
}

export default App;
