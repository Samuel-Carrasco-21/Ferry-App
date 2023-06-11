import { Logo } from '../Logo';

export const Card = (props) => {

  const nombreItemList = props.nombreItemList;
  const children = props.children;

  return (
    <section className="inline-block p-2 text-white border-orange-600
    rounded-md border-2 m-2 relative ms-local-card mm-local-card ml-local-card
    mt-local-card t-local-card l-local-card ll-local-card lll-local-card
    max-w-max bg-card-blue">
      <h1 className='font-bold'>
        {nombreItemList}
      </h1>
      <Logo/>
      <div className="flex flex-row items-center pt-0 text-card-m text-card-ml
      text-card-t text-card-tl text-card-l justify-between">
        {children}
      </div>
    </section>
  );
}
