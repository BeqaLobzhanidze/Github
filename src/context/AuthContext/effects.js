import { ParseToken } from "../../utils/jwt";
import { Initialize } from "./Actions";

function authorizedEffect(dispatch) {
  try {
    const accessToken = localStorage.getItem("accesToken");
    const { valid, payload } = ParseToken(accessToken);
    if (valid && accessToken) {
      dispatch(Initialize(true, payload));
    } else {
      dispatch(Initialize(false, null));
    }
  } catch (error) {
    dispatch(Initialize(false, null));
  }
}

export default authorizedEffect;
