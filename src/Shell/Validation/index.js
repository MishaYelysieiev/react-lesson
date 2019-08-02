export const requiredInput = input =>
    !input && `Требуется ввод`;

export const correctInput = input =>
    input !== 'Юрчик' && 'Неправильное имя пользователя';

export const matchInput = (input, allInputs) =>
    input === allInputs.password && 'Пароль не совпадает';