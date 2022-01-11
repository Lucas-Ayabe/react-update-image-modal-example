import { useEffect, useState } from "react";

import { useBoolean } from "../hooks";
import { ImageInput, Modal } from "../components";

import * as ImageService from "../services/image-service";

function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const { on, off, value: open } = useBoolean();

  useEffect(() => {
    ImageService.find().then(setImageUrl);
  }, []);

  const updateImage = async (image) => {
    await ImageService.update(image).catch(console.log);
    setImageUrl(URL.createObjectURL(image));
  };

  return (
    <div className="container section flow">
      <button className="button" onClick={on}>
        Open Modal
      </button>

      <figure className="box">
        <ImageInput url={imageUrl} onChange={updateImage} />
        <figcaption>Imagem a ser alterada no modal</figcaption>
      </figure>

      <img src={imageUrl} className="mx:auto" alt="" />

      <Modal className="section" open={open} onClose={off}>
        <div className="container box flow px:1.5">
          <h1 className="title">Edit image</h1>
          <p>To edit, click in the image bellow: </p>
          <ImageInput url={imageUrl} onChange={updateImage} />
        </div>
      </Modal>
    </div>
  );
}

export default Home;
