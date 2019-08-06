import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { useStateForModel, ValidatorForm } from 'uno-react';
import { TextValidator } from '../../src/';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
    },
});

export default (props: any) => {
    const classes = useStyles(props);
    const [data, handleChange] = useStateForModel({ name: '' });

    const sendData = () => handleChange({ name: '' });

    return (
        <ValidatorForm onSubmit={sendData} className={classes.form}>
            <TextValidator
                id='name'
                label='Name'
                name='name'
                onChange={handleChange}
                value={data.name}
                validators={['required']}
                errorMessages={[
                    'This field is required',
                ]}
            />
            <Button type='submit'>Submit</Button>
        </ValidatorForm>
    );
};
