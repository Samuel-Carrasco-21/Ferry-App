import { Logo } from '../Logo';

export const Card = ({nameItemList,children,urlImg}) => {
  return (
    <section className='inline-block p-2 text-white border-purple-600
    rounded-md border-2 m-2 relative ms-local-card mm-local-card ml-local-card
    mt-local-card t-local-card l-local-card ll-local-card lll-local-card
    max-w-max bg-slate-100 h-[275px]'>
      <h1 className='font-bold ml-2 mt-1 text-black text-lg'>
        {nameItemList}
      </h1>
      <div className='flex flex-row justify-between h-[90%] items-center'>
        <Logo urlImg={urlImg}/>
        <div className="flex flex-col pt-0 text-card-m text-card-ml
        text-card-t justify-center items-center
        content-center w-[50%]">
          {children}
        </div>
      </div>
    </section>
  );
}
