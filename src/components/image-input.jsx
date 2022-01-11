function ImageInput({ onChange, url }) {
  return (
    <div className="image-input">
      <label>
        <img className="perfil" src={url} alt="" />
        <input
          onChange={(event) => onChange(event.target.files[0])}
          type="file"
          className="input"
        />
      </label>
    </div>
  );
}

export default ImageInput;
