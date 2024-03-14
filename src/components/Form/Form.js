import Input from "../Input/Input";

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
      <Input type="text" required placeholder="Insira seu nome"/>
      <Input type="email" required placeholder="Insira seu e-mail"/>
      <button type="submit" className="hover:animate-pulse hover:shadow-sm hover:shadow-gray-500 hover:dark:shadow-black py-1 px-5 bg-alura-100 dark:bg-dark-200 rounded-full uppercase text-gray-200 w-full max-w-sm">Seguir</button>
    </form>
  );
};

export default Form;
