import { React } from 'react'
const Input = () => {

    let { forwardedRef, ...otherProps } = this.props;
    return <input {...otherProps} ref={forwardedRef} />;
}


const TextInput = forwardRef((props, ref) => {
    return <Input {...props} forwardedRef={ref} />
});

const FocusableInput = () => {

    ref = React.createRef()
    return <TextInput ref={this.ref} />;

    // When the focused prop is changed from false to true, 
    // and the input is not focused, it should receive focus.
    // If focused prop is true, the input should receive the focus.
    // Implement your solution below:
    componentDidUpdate(prevProps) { };

    componentDidMount() {  }
}

FocusableInput.defaultProps = {
    focused: false
};

export const Input = (props) => { <FocusableInput focused={props.focused} /> };
