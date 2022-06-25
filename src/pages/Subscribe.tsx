import { gql, useMutation } from "@apollo/client";
import { useState , FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscriber($name: String!, $email: String!){
        createSubscriber(data: {name: $name, email: $email}){
            id
        }
    }
`

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, {loading}] = useMutation(CREATE_SUBSCRIBER_MUTATION)

 async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })
      navigate('/event')
  }

  return(
    <div 
    className="flex justify-between min-h-screen bg-blur bg-cover bg-no-repeat flex-col items-center before:content-[''] before:absolute before:w-full before:h-[100vh] before:bg-no-repeat before:bg-top before:bg-react before:mt-2.5">
      <div 
      className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto lg:flex-col">
        <div 
        className="max-w-[640px] lg:flex flex-col items-center lg:text-center px-6">
          <div 
          className="w-full max-w-[250px]">
          <Logo />
          </div>

          <h1 
          className="mt-8 text-[2.5rem] leading-tight text-white">
            Plataforma feita para<strong className="text-blue-500"> assistir</strong> videos, feita com <strong className="text-blue-500">React</strong>
          </h1>

          <p 
          className="mt-4 text-white leading-relaxed">
            Alguns videos antigo do meu joguinho de infância que eu tanto amava e gastava horas e horas.
          </p>
        </div>

        <div 
        className="p-8 bg-transparent border border-gray-500 rounded lg:w-full max-w-3xl mt-8 z-10">
          <strong 
          className="text-2xl mb-6 block text-white ">
            Inscreva-se Gratuitamente
          </strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
            className="bg-gray-900 rounded px-5 h-14 outline-none focus:border border-violet-300 outline-1 focus:placeholder:text-transparent"
            type="text" 
            placeholder="Seu nome completo"
            onChange={event => setName(event.target.value)}
            />
            <input 
            className="bg-gray-900 rounded px-5 h-14 outline-none focus:border border-violet-300 outline-1 focus:placeholder:text-transparent"
            type="text" 
            placeholder="Digite seu e-mail"
            onChange={event => setEmail(event.target.value)}
            />
            <button type="submit"
            disabled={loading}
            className="mt-4 bg-gc2-100 uppercase py-4 rounded font-bold text-sm hover:bg-gc-100 transition-colors disabled:opacity-50 text-white disabled:cursor-not-allowed"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>

      </div>
      <img src="/src/assets/code-mockup.png" className="lg:px-1.2" alt="" />

    </div>
  );
}