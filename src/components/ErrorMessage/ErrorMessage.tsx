import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css["errorMessage"]}>
      <p className={css["text"]}>There was an error, please try again...</p>
    </div>
  );
};

export default ErrorMessage;
