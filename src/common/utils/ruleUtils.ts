

export const required = (value: any) => !!value || "Obligatorio";

export const email = (value: string) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value) || "Correo electrónico no válido";
};

export const minLength = (min: number) => {
  return (value: string) => {
    return value.length >= min || `Mínimo ${min} caracteres`;
  };
};

export const maxLength = (max: number) => {
  return (value: string) => {
    return value.length <= max || `Máximo ${max} caracteres`;
  };
};

export const isNumber = (value: any) => {
  return !isNaN(value) || "Debe ser un número";
};

export const dni = (value: string) => {
  const dniPattern = /^[0-9]{8}$/; // 8 dígitos numéricos
  return dniPattern.test(value) || "DNI no válido";
};

export const onlyLetters = (value: string) => {
  const pattern = /^[a-zA-Z]+$/;
  return pattern.test(value) || "Solo se permiten letras";
};

export const matchField = (field: string, fieldName: string) => {
  return (value: any, allValues: any) => {
    return value === allValues[field] || `${fieldName} no coincide`;
  };
};

export const atLeastOneRequired = (otherField: any) => {
  return (value: any) => {
    return (
      !!value ||
      !!otherField ||
      "Al menos un apellido (Paterno o Materno) es obligatorio"
    );
  };
};
