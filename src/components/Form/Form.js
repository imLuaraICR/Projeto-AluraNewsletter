const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const name = event.target[0].value;
    const email = event.target[1].value;

    onSubmit({ name, email });
  };

  return (
    <form className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5" onSubmit={safeSubmit}>
      <input type="text" required placeholder="Insira seu nome" className="alura-input"/>
      <input type="email" required placeholder="Insira seu e-mail" className="alura-input"/>
      <button type="submit" className="alura-btn">Seguir</button>
    </form>
  );
};

export default Form;
