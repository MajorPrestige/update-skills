import Select from 'react-select';

import s from './SelectStatus.module.scss';

const SelectStatus = ({ handleInputChange, options, value }) => {
  return (
    <Select
      options={options}
      className={s.select}
      onChange={handleInputChange}
      value={value()}
    />
  );
};

export default SelectStatus;
