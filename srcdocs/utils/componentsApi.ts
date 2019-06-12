const createData = (name: any, description: any, type: any, defaultValue: any) => {
    return { name, description, type, defaultValue };
};

const ButtonWithLoading = [
    createData('isFetching',
        'It controls if the component displays the button or the loading icon', 'boolean', 'false'),
    createData('text', 'Text to be displayed on the button', 'string', '"Save"'),
    createData('className', 'The components style', 'Object', ''),
];

const ConfirmationDialog = [
    createData('contentText', 'The text in the dialog', 'string', ''),
    createData('title', 'The dialog title', 'string', ''),
    createData('onAgreeAction', 'The function to call when the agree button is clicked', 'Function', ''),
    createData('onClose', 'The function to call when the cancel button is clicked', 'Function', ''),
    createData('open', 'It controls if the component is displayed or not', 'boolean', ''),
    createData('agree', 'The text in the agree button', 'string', '"Agree"'),
    createData('disagree', 'The text in the disagree button', 'string', '"Disagree"'),
    createData('textColor',
        'The color of the text, it can be: "textSecondary" | "inherit" | "primary" | "secondary" | "textPrimary" | "initial" | "error"',
        'string', '"textSecondary"'),
];

const FixedLinearProgress = [
    createData('isLoading', 'It controls if the component is displayed or not', 'boolean', 'false'),
];

const FormSwitch = [
    createData('checked', 'It controls if the switch is active', 'boolean', 'false'),
    createData('className', 'The components style', 'Object', ''),
    createData('disabled', 'It controls if the component is disabled', 'boolean', 'false'),
    createData('label', 'The switch label', 'string', ''),
    createData('labelClassName', 'The label style', 'Object', ''),
    createData('labelPlacement', 'The label position', 'string', '"end"'),
    createData('name', 'The component name', 'string', ''),
    createData('onChange', 'The function to call when the switch changes', 'Function', ''),
];

const GlobalSnackBar = [
    createData('message',
        'An object with 2 props, messageText, the text to be displayed and messageType, that it can be: "info" | "warning" | "error" | "success"', 'Object', ''),
    createData('seconds', 'How many miliseconds until the snackbar disappear', 'number', '2500'),
    createData('mobile', 'It displays the mobile version, a centered and bigger variant', 'boolean', 'false'),
];

const LoadingIcon = [
    createData('color', 'The color of the icon: "primary" | "secondary" | "inherit"', 'string', 'primary'),
];

const TextValidator = [
    createData('errorMessages', 'An error message for each validator', 'Array of strings', '[]'),
    createData('validators', 'Functions to validate the input', 'Array of functions', '[]'),
    createData('helperText', 'Text to explain the input', 'string', ''),
    createData('label', 'The input label', 'string', ''),
    createData('id', 'The input id, if there is not label, the id is the label too', 'string', ''),
];

const ThumbnailPhoto = [
    createData('fullName', 'An error message for each validator', 'Array of strings', '[]'),
    createData('imgSrc', 'Functions to validate the input', 'Array of functions', '[]'),
    createData('placement',
     'Tooltip position: "left" | "top" | "right" | "bottom", each of them with X-start and X-end variant, like: top-start', 'string', '"bottom"'),
];

const Title = [
    createData('prefix', 'The document title prefix', 'string', ''),
    createData('suffix', 'The document title suffix', 'string', ''),
    createData('value', 'The document title, also the component text', 'string', ''),
    createData('titleClass', 'The component style', 'Object', ''),
];

const Apis = {ButtonWithLoading, ConfirmationDialog, FixedLinearProgress, FormSwitch,
     GlobalSnackBar, LoadingIcon, TextValidator, ThumbnailPhoto, Title};

export default Apis;
