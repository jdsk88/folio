import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Axios from 'axios';
import { API_URL } from '../../config/constants';

const ColorBox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export const CheckBOX = (props) => {
    const [state, setState] = React.useState({});
    const LABEL = props.label;
    const ID = props.id;
    const VALUE = props.value;
    const CHECKED = props.CHECKED;
    const ONCLICK = props.ONCLICK;

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        console.log(`${event.target.name} is ${event.target.checked} and its id: ${event.target.id}`)
        Axios.put(`${API_URL}filters/${event.target.id}`,
            {
                name: event.target.name,
                type: event.target.type,
                link: event.target.link,
                onClick: event.target.onClick,
                onTouch: event.target.onTouch,
                value: event.target.checked,
                info: event.target.info
            }
        )
    };

    return (
        // <FormGroup row>
        <FormControlLabel
            control={<ColorBox
                checked={state.LABEL}
                onChange={handleChange}
                id={ID} />}
            label={LABEL}
            name={LABEL}
            value={VALUE}
            onClick={ONCLICK}
        />
        // </FormGroup>
    );
}
