import { GET_PRODUCTS_DATA } from "./ActionType";
import api from "../apis/api";
const getProducts = () => async (dispatch)=>{
    await api.get("/getAllProductsDetailsForReduxApp")
    .then((response) => {
      dispatch({type:GET_PRODUCTS_DATA,payload:response})
  });
  };

export default getProducts;