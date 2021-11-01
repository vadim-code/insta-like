export function formInputConstructor(inputProperties, className) {
  const input = document.createElement('input');

  Object.keys(inputProperties).forEach((propertyName) => {
    input[propertyName] = inputProperties[propertyName];
  });

  input.classList.add(className);

  return input;
}
