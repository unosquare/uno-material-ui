const createData = (name: any, description: any, type: any, defaultValue: any) => {
    return { name, description, type, defaultValue };
};

const ButtonWithLoading = [
    createData('isFetching',
        'It controls if the component displays the button or the loading icon', 'boolean', 'false'),
    createData('ButtonProps', 'You can use any prop available on Material-UI\'s button: https://material-ui.com/api/button/', 'Object', ''),
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

const FormModal = [
    createData('actions', 'JSX Element displayed at the bottom of the dialog.', 'JSX Element', ''),
    createData('onSubmit', 'Function called when the form is submitted', 'Function', ''),
    createData('title', 'Dialog\'s title', 'string', ''),
    createData('DialogProps', 'You can use any prop available on Material-UI\'s dialog: https://material-ui.com/api/dialog/#dialog-api', 'Object', ''),
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

const IndeterminatedLoading = [
    createData('isLoading', 'If true, the component will block the UI until it become false', 'boolean', ''),
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
    createData('fullName', 'The tooltip content.', 'string', ''),
    createData('imgSrc', 'The image path.', 'string', ''),
    createData('placement',
     'Tooltip position: "left" | "top" | "right" | "bottom", each of them with X-start and X-end variant, like: top-start', 'string', '"bottom"'),
];

const Title = [
    createData('prefix', 'The document title prefix', 'string', ''),
    createData('suffix', 'The document title suffix', 'string', ''),
    createData('value', 'The document title, also the component text', 'string', ''),
    createData('titleClass', 'The component style', 'Object', ''),
];

const Apis = {ButtonWithLoading, ConfirmationDialog, FixedLinearProgress, FormModal, FormSwitch,
    IndeterminatedLoading, LoadingIcon, TextValidator, ThumbnailPhoto, Title};

export default Apis;
