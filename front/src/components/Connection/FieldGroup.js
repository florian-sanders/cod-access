import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

const FieldGroup = ({
  id,
  value,
  label,
  changeValue,
}) => (
  <div className="header-wrapper__connection__toggle-area__form__group">
    <label htmlFor={id}>
      {label}
    </label>
    <input id={id} value={value} onChange={(evt) => changeValue(evt.target.value)} />
  </div>
);

FieldGroup.propTypes = {
  id: Proptypes.string.isRequired,
  value: Proptypes.string,
  label: Proptypes.string.isRequired,
  changeValue: Proptypes.func,
};

FieldGroup.defaultProps = {
  value: '',
  changeValue: () => { },
};

export default FieldGroup;
