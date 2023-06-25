import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const Loading = () => {
  return (
    <section className="fixed top-0 right-0 bottom-0 left-0 bg-slate-900
    bg-opacity-30 flex justify-center items-center z-10 animate-pulse">
      <section className="bg-white rounded-lg p-4 m-2 font-semibold
      flex flex-row justify-center items-center w-max h-max">
        <figure className="bg-transparent text-lg text-grary-900 animate-spin
        h-5 w-5 mr-3" viewBox="0 0 24 24">
          <AiOutlineLoading3Quarters/>
        </figure>
        <h1 className="text-2xl text-gray-900">CARGANDO</h1>
      </section>
    </section>
  );
};
