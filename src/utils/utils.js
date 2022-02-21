const Utils = {
  dateTransformation: (date) => {
    const dateElements = date.split("-");
    return `${dateElements[2]}/${dateElements[1]}/${dateElements[0]}`;
  },

  dateReverseTrans: (date) => {
    const dateElements = date.split("/");
    return `${dateElements[0]}-${dateElements[1]}-${dateElements[2]}`;
  },
};

export default Utils;
