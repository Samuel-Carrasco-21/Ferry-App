import Select from 'react-select';

export const SelectZone = () => {

  return (
    <Select
    className='font-semibold w-32 active:outline-none'
    defaultValue={{label:'1',value:'1'}}
    options={[{label:'1',value:'1'},{label:'2',value:'2'},{label:'3',value:'3'}]}
    />
  );
};
