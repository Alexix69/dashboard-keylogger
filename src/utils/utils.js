import Report from "../api/report";

const Utils = {
  dateTransformation: (date) => {
    const dateElements = date.split("-");
    return `${dateElements[2]}/${dateElements[1]}/${dateElements[0]}`;
  },

  dateReverseTrans: (date) => {
    const dateElements = date.split("/");
    return `${dateElements[0]}-${dateElements[1]}-${dateElements[2]}`;
  },

  markAsArchived: async (index) => {
    try {
      await Report.handleArchivedStatus(index);
      //     .then(() => {
      //   console.log("SE TERMINO ARCHIVACION");
      //   // confirmRequestUpdate();
      // });
    } catch (e) {
      console.log("Error Mark as archived", e);
    }
  },

  removeFromTheList: async (index) => {
    try {
      await Report.handleArchivedStatus(index);
      // console.log("SE QUITÓ DE LA LISTA");
    } catch (e) {
      console.log("Error Mark as archived", e);
    }
  },
};

export default Utils;
