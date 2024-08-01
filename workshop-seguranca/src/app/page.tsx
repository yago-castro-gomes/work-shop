import '../app/styles/PrimeiraTela.css';
import BinaryRain from './components/BinaryRain';

export default function Home() {
  return (
    <>
       <div className='flex items-center justify-center gap-10 h-screen ml-0 md:ml-12'>
        <div className='flex flex-col gap-10 md:gap-20'>
          <div>
            <p className="text-white text-3xl sm:text-4xl lg:text-5xl uppercase">Você está convidado <br/> para o workshop</p>
            <p className="gradient-text text-3xl sm:text-4xl lg:text-5xl uppercase">Segurança <br/> corporativa</p>
          </div>
          <div className='flex flex-col gap-y-9'>
            <input
              className='md:w-9/12 h-12 p-5 bg-white font-montserrat rounded-md'
              type="text"
              placeholder='Nome:'
              />
              <input
              className='md:w-9/12 h-12 p-5 bg-white font-montserrat rounded-md'
              type="password"
              placeholder='Senha(padrão):'
              />
              <button className="w-40 h-10 p-2 text-xs font-bold bg-gradient-button text-white font-montserrat uppercase rounded-full">Acessar</button>
          </div>
        </div>
        <div className='hidden md:flex md:shrink-0 relative image-container'>
          <img className='w-full' src="./img/cabeca.svg" alt="Cabeça" />
          <BinaryRain />
        </div>
      </div>
    </>
  );
}
