import jwtDecode from "jwt-decode";

function ToggleToken(accesToken) {
  if (accesToken) {
    localStorage.setItem("accesToken", accesToken);
  } else {
    localStorage.removeItem("accesToken");
  }
}
function ParseToken(accesToken) {
  if (!accesToken) {
    return { valid: false, payload: null };
  }
  const decoded = jwtDecode(accesToken);
  const currentTime = Date.now() / 1000;

  return { valid: decoded.exp > currentTime, payload: decoded.payload };
}

export { ToggleToken, ParseToken };
