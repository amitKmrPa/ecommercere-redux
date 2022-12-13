import { GET_PRODUCTS_DATA } from "./ActionType";
import productApi from "../apis/productApi";
const getProductsToBuy = () => async (dispatch)=>{
    await productApi.get("/getAllProductsDetailsForReduxApp")
    .then((response) => {
      dispatch({type:GET_PRODUCTS_DATA,payload:response})
  });
  };

export default getProductsToBuy;