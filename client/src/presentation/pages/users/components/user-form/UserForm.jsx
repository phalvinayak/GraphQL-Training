import { useMemo } from 'react';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';
import UxButton from '@library/ux-button/UxButton';

function UserForm({
    initialValues,
    onSubmit,
    isDisabled = false,
    isEdit = false,
}) {
    const { Formik } = formik;

    const schema = useMemo(() => {
        return yup.object().shape({
            id: yup.number().required().positive().integer(),
            name: yup.string().required(),
            username: yup.string().required(),
        });
    }, []);

    return (
        <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={initialValues}
            enableReinitialize
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit} disabled={isDisabled}>
                    <div className="mb-3">
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="#ID"
                            value={values.id}
                            name="id"
                            onChange={handleChange}
                            isInvalid={touched.id && !!errors.id}
                            disabled={isEdit}
                        />
                        <Form.Control.Feedback type="invalid">
                            ID is required
                        </Form.Control.Feedback>
                    </div>
                    <div className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            value={values.name}
                            name="name"
                            onChange={handleChange}
                            isInvalid={touched.name && !!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            Name is required
                        </Form.Control.Feedback>
                    </div>
                    <div className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Username"
                            value={values.username}
                            name="username"
                            onChange={handleChange}
                            isInvalid={touched.username && !!errors.username}
                        />
                        <Form.Control.Feedback type="invalid">
                            Username is required
                        </Form.Control.Feedback>
                    </div>
                    <UxButton type="submit">
                        {isEdit ? 'Update User' : 'Create User'}
                    </UxButton>
                </Form>
            )}
        </Formik>
    );
}

export default UserForm;
