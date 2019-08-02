export const requiredInput = input =>
    !input && `Вимагається ввід`;

export const correctInput = input =>
    input !== 'Орест' && 'Неправильне ім\'я користувача';

export const matchInput = (input, allInputs) =>
    input === allInputs.password && 'Пароль співпадає';