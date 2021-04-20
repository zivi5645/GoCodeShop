import "./inputField";
function InputField({ onChange, placeholder, required, type, ...props }) {
  return (
    <div className="input-field-container">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      <div className="form__group">
        <input
          onChange={onChange}
          type="text"
          className="form__input"
          id="name"
          placeholder={placeholder}
          required={required}
          type={type}
        />
        <label for="name" className="form__label">
          {placeholder}{" "}
        </label>
      </div>
    </div>
  );
}

export default InputField;
