import React, { useEffect, useState } from "react";
import { SignUp } from "../../api/Auth";
import Input from "./Input";
import styles from "./SignUpForm.module.css";
import { useHistory } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const signUpForm = [
  { id: 1, value: "username", type: "text" },
  { id: 2, value: "firstName", type: "text" },
  { id: 3, value: "lastName", type: "text" },
  { id: 4, value: "email", type: "email" },
  { id: 5, value: "birthDate", type: "date" },
  { id: 6, value: "password", type: "password" },
];

function SignUpForm() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [effect, setEffect] = useState(-1);

  const History = useHistory();

  function HandleClick(e) {
    e.preventDefault();
    setEffect(effect + 1);
  }

  useEffect(() => {
    if (effect != -1) {
      setLoading(true);
      SignUp(user)
        .then(() => History.push("/", { success: true }))
        .catch((error) => setError(error.response.data.message))
        .finally(() => setLoading(false));
    }
  }, [effect]);
  return (
    <main className={styles.container}>
<form className={styles.form}>
      {error && <h4 style={{ color: "red" , width: "300px" }}>{error}</h4>}
      {loading ? (
        <HashLoader color={"green"} size={50} />
      ) : (
        <>
          {signUpForm.map((item) => (
            <Input
              key={item.id}
              value={item.value}
              type={item.type}
              setUser={setUser}
              user={user}
            />
          ))}
          <button
            type="submit"
            className={styles.SignUp}
            onClick={(e) => HandleClick(e)}
          >
            Sign Up
          </button>
        </>
      )}
    </form>
    </main>
    
  );
}

export default SignUpForm;
