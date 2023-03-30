import useForm from "../Hooks/useForm";

const FormWitchCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

  return (
    <>
      <h1>Form with custom hook</h1>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="user Name"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="user email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className="btn - btn-primary mt-2">
        Borrar{" "}
      </button>
    </>
  );
};

export default FormWitchCustomHook;
