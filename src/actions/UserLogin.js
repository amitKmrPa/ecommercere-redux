import { USER_LOGIN } from "./ActionType";
import api from "../apis/api";
import axios from "axios";
// const userLogin = (userId,userPassword) => async (dispatch)=>{
//     await api.post("/userLoginForReact/"+userId+"/"+userPassword)
//     .then((response) => {
//       dispatch({type:USER_LOGIN,payload:response})
//   });
//   };
const userLogin = (userId,userPassword) =>(dispatch)=>{
  var data="";
  let formData = new FormData();
  formData.set('userId', userId);
  formData.set('userPassword', userPassword);
   api.post("/userLoginForReact/",formData).then(res => {
    data = res.data;
    if (data !=="") {
      return dispatch({type:USER_LOGIN,payload:data}) 
    }
  })
   

}
export default userLogin;