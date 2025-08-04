import React from 'react';

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        massage: 'Preeencha um e-mail valido',
    },
    password: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
        massage: 'Preencher uma senha valida com pelo menos uma letra maiuscula, um digito númerico e um caracter especial',
    }
}

const useForm = (type) => {
    const[value, setValue] = React.useState('');
    const[error, setError] = React.useState(null);

    function validate(value) {
        if(type === false) return true;
        if(value.length === 0) {
            setError("Preencha um valor.");
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].massage);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({target}) {
        if(error) validate(target.value);
        setValue(target.value);
    }
 
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;