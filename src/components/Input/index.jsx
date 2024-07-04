import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(
  (
    {
      className = '',
      name = '',
      placeholder = '',
      type = 'text',
      children,
      label = '',
      prefix,
      suffix,
      onChange,
      ...restProps
    },
    ref
  ) => {
    return (
      <label className={`${className} text-white`}>
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          className={`bg-transparent text-black-a700`}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  onChange: PropTypes.func,
};

export { Input };
