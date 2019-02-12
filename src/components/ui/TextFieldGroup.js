import classnames from 'classnames';
import React from 'react';

const TextFieldGroup = ({
  field,
  value,
  label,
  error,
  type,
  onChange,
  checkUserExists,
}) => {
  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={field}
        className={!error?"form-control":"form-control errField"}
      />
      {error && <span className="err">{error}</span>}
    </div>
  );
};

// TextFieldGroup.propTypes = {
//   // field: React.PropTypes.string.isRequired,
//   // //value: React.PropTypes.string.isRequired,
//   // label: React.PropTypes.string.isRequired,
//   // error: React.PropTypes.string,
//   // type: React.PropTypes.string.isRequired,
//   // onChange: React.PropTypes.func.isRequired,
//   // checkUserExists: React.PropTypes.func
// }

// TextFieldGroup.defaultProps = {
//   //type: 'text'
// }

export default TextFieldGroup;
