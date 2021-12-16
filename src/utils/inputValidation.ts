export enum FORM_FIELDS {
  LOGIN = 'login',
  PASSWORD = 'password',
  FIRST_NAME = 'first_name',
  SECOND_NAME = 'second_name',
  PHONE = 'phone',
  EMAIL = 'email',
  USER_NAME = 'user_name',
  MESSAGE = 'message',
}

const isInput = (element: any): element is HTMLInputElement =>
  element.nodeName === 'INPUT';

export const isFormFieldType = (name: string): name is FORM_FIELDS => {
  const isCorrectFieldName = Object.values(FORM_FIELDS).some(
    (field) => field === name
  );

  if (!isCorrectFieldName) {
    throw new Error('Incorrect field name for validation');
  } else {
    return true;
  }
};

function getErrorTextOnValidationMessage(value: string) {
  return value ? '' : 'Enter some text';
}

function getErrorTextOnValidationUserName(value: string) {
  return value ? '' : 'Enter some text';
}

function getErrorTextOnValidationName(value: string) {
  const firstCapitalLetterRegExp = /^[A-Z]|[А-ЯЁ]/;
  const hasSpaceRegExp = /\s/;
  const hasNumberRegExp = /\d/;
  const hasSymbolRegExp = /[$&+,:;=?@#|'<>\\.^*()%!_]/;

  if (!firstCapitalLetterRegExp.test(value)) {
    return 'Capitalize the first letter';
  }

  if (hasSpaceRegExp.test(value)) {
    return 'Spaces are not allowed';
  }

  if (hasNumberRegExp.test(value)) {
    return 'Numbers are not allowed';
  }

  if (hasSymbolRegExp.test(value)) {
    return 'Symbols not allowed';
  }

  return '';
}

function getErrorTextOnValidationLogin(value: string) {
  const hasLettersRegExp = /[a-zA-Z]+/;
  const hasSpaceRegExp = /\s/;
  const hasSymbolRegExp = /[$&+,:;=?@#|'<>\\.^*()%!]/;
  const correctLengthRegExp = /\w{3,20}/;

  if (!hasLettersRegExp.test(value)) {
    return 'Enter at least one letter, only Latin is allowed';
  }

  if (hasSpaceRegExp.test(value)) {
    return 'Spaces are not allowed';
  }

  if (hasSymbolRegExp.test(value)) {
    return 'Symbols not allowed';
  }

  if (!correctLengthRegExp.test(value)) {
    return 'Length must be between 3 and 20 characters';
  }

  return '';
}

function getErrorTextOnValidationPassword(value: string) {
  const hasCapitalLetterRegExp = /[A-Z]/;
  const hasNumberRegExp = /[0-9]/;
  const correctLengthRegExp = /.{8,40}/;

  if (!hasCapitalLetterRegExp.test(value)) {
    return 'Enter at least one capital letter';
  }

  if (!hasNumberRegExp.test(value)) {
    return 'Enter at least one number';
  }

  if (!correctLengthRegExp.test(value)) {
    return 'Length must be between 8 and 40 characters';
  }

  return '';
}

function getErrorTextOnValidationPhone(value: string) {
  const correctLengthRegExp = /^\+?\d{10,15}$/;
  // TODO: добавить сообщение про только цифры

  if (!correctLengthRegExp.test(value)) {
    return 'Length must be between 10 and 15 characters';
  }

  return '';
}

function getErrorTextOnValidationEmail(value: string) {
  const isCorrectRegExp =
    // eslint-disable-next-line
    /[^.][A-Za-z0-9!#$%&'*+-\/\.=?^_`{|}~]+[^.]@[A-Za-z]+\.[A-Za-z]+/;
  if (!isCorrectRegExp.test(value)) {
    return 'Enter valid email';
  }

  return '';
}

export const VALIDATION_FUNC_FOR_FIELDS = {
  [FORM_FIELDS.LOGIN]: getErrorTextOnValidationLogin,
  [FORM_FIELDS.PASSWORD]: getErrorTextOnValidationPassword,
  [FORM_FIELDS.FIRST_NAME]: getErrorTextOnValidationName,
  [FORM_FIELDS.SECOND_NAME]: getErrorTextOnValidationName,
  [FORM_FIELDS.PHONE]: getErrorTextOnValidationPhone,
  [FORM_FIELDS.EMAIL]: getErrorTextOnValidationEmail,
  [FORM_FIELDS.MESSAGE]: getErrorTextOnValidationMessage,
  [FORM_FIELDS.USER_NAME]: getErrorTextOnValidationUserName,
};

export const getErrorTextOnValidationInput =
  (fieldName: FORM_FIELDS) => (value: string) => {
    const isFieldHasValidationFunc = Object.keys(
      VALIDATION_FUNC_FOR_FIELDS
    ).some((field) => field === fieldName);

    if (!isFieldHasValidationFunc) {
      throw new Error(
        `Does not have validation function for this field name: ${fieldName} `
      );
    } else {
      return VALIDATION_FUNC_FOR_FIELDS[fieldName](value);
    }
  };

export const isFormValid = (formComponent: HTMLFormElement) => {
  const formElements = [...formComponent.elements];
  const formInputs: HTMLInputElement[] = [];
  formElements.forEach((element) => {
    if (isInput(element)) {
      formInputs.push(element);
    }
  });

  // Console.log all fields value (will be removed in 3d sprind)
  formInputs.forEach(({ name, value }) => {
    console.log('formField:', name, ', formFieldValue:', value);
  });

  const isInvalid = formInputs.some(({ name, value }) => {
    if (isFormFieldType(name)) {
      const error = getErrorTextOnValidationInput(name)(value);
      return !!error;
    }
    return false;
  });

  return !isInvalid;
};
