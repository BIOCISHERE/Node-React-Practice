import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: ["test"],
    },
    actions: {
      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await axios.get("http://localhost:8080/api");
          setStore({ message: resp.data.fruits });
          // don't forget to return something, that is how the async resolves
          return resp;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
    },
  };
};

export default getState;
