/* eslint-disable no-shadow */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
export default function seriaLizeArray(form) {
  const seriaLizeArray = [];
  const inputFields = [
    'file',
    'reset',
    'submit',
    'text',
    'checkbox',
    'radio',
    'email',
    'password',
    'range',
    'select-one',
    'textarea',
  ];

  for (let i = 0; i < form.elements.length; i++) {
    const field = form.elements[i];

    if (field.type === 'select-one') {
      seriaLizeArray.push({
        name: field.name,
        value: field.value,
      });
    }

    if (
      field.name &&
      !field.disabled &&
      inputFields.indexOf(field.type) === -1
    ) {
      if (field.type === 'select-multiple') {
        for (let j = 0; j < field.options.length; j++) {
          if (field.options[j].selected) {
            seriaLizeArray.push({
              name: field.name,
              value: field.options[j].value,
            });
          }
        }
      }
    } else if (field.type === 'select-one') {
      seriaLizeArray.push({
        name: field.name,
        value: field.value,
      });
    } else {
      seriaLizeArray.push({
        name: field.name,
        value: field.value === 'on' ? field.checked : field.value,
      });
    }
  }

  return seriaLizeArray.reduce(
    (accumulator, currentValue) => ({
      ...accumulator,
      [currentValue.name]: currentValue.value,
    }),
    {}
  );
}
