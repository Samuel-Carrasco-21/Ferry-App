import { ListItemCards } from './ListItemCards'
import { ItemCard } from './ItemCard'

export const LocalPage = () => {
  return (
    <section className='flex felx-col'>
      <div className='
      flex
      flex-row
      w-screen
      justify-around
      bg-orange-400
      items-center
      p-3
      '>
          <input
          placeholder='buscar producto'
          className='w-4/5 rounded-lg p-2 outline-none'/>
      </div>
      <ListItemCards>
          {}
      </ListItemCards>
    </section>
  );
};
