import { useContext, useEffect } from "react";

import ImageContext from "../contexts/image-context";
import { useBoolean } from "../hooks";
import { ImageInput, Modal } from "../components";

import * as ImageService from "../services/image-service";
import { update } from "../reducers/image-reducer";

function HomeWithFlux() {
  const { state, dispatch } = useContext(ImageContext);
  const { on, off, value: open } = useBoolean();

  useEffect(() => {
    ImageService.find().then((image) => dispatch(update(image)));
  }, []);

  const updateImage = (image) => {
    ImageService.update(image)
      .then(() => dispatch(update(URL.createObjectURL(image))))
      .catch(console.log);
  };

  return (
    <div className="container section flow">
      <button className="button rounded" onClick={on}>
        Abrir Modal
      </button>

      <figure className="box rounded">
        <ImageInput url={state.url} onChange={updateImage} />
        <figcaption>Imagem a ser alterada no modal</figcaption>
      </figure>

      <img src={state.url} className="mx:auto rounded" alt="" />

      <Modal className="section" open={open} onClose={off}>
        <div className="container box rounded flow px:1.5">
          <h1 className="title">Editar imagem</h1>
          <p>Para editar, clique na imagem abaixo: </p>
          <ImageInput url={state.url} onChange={updateImage} />
        </div>
      </Modal>
    </div>
  );
}

export default HomeWithFlux;
