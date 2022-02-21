const translateMessage = (message) => {
  const messages = {
    invalid_credentials: "La combinación de usuario y clave es incorrecta.",
  };

  return messages.invalid_credentials;
};
export default translateMessage;
