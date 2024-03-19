import Button from 'react-bootstrap/Button';

function UxButton({ children, ...props }) {
    return <Button {...props}>{children}</Button>;
}

export default UxButton;
