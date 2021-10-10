export const booleanCase = (input, optionName, optionConfigs, errors) => {
    const isBoolean =
        typeof input[optionName] === 'boolean' || input[optionName] instanceof Boolean;

    if (!isBoolean) {
        errors[optionName] =
            optionConfigs.typeErrorMessage || `${optionName} should be a boolean (true or false)`;
        return false;
    }
};
