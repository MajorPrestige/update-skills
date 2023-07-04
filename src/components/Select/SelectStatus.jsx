import Select from 'react-select';

import s from './SelectStatus.module.scss';

const SelectStatus = ({ handleInputChange, options, value }) => {
  return (
    <Select
      options={options}
      className={s.select}
      // defaultValue={options[0]}
      onChange={handleInputChange}
      value={value()}
      // classNamePrefix={'react-select'}
    />
  );
};

export default SelectStatus;
