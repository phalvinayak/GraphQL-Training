import { useMemo } from 'react';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';
import UxButton from '@library/ux-button/UxButton';

function CommentForm({
    initialValues,
    onSubmit,
    isDisabled = false,
    isEdit = false,
}) {
    const { Formik } = formik;

    const schema = useMemo(() => {
        return yup.object().shape({
            id: yup.string().required(),
            postId: yup.string().required(),
            name: yup.string().required(),
            email: yup.string().email().required(),
            body: yup.string().required(),
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
                        <Form.Label>Post ID</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Post ID"
                            value={values.postId}
                            name="postId"
                            onChange={handleChange}
                            isInvalid={touched.postId && !!errors.postId}
                        />
                        <Form.Control.Feedback type="invalid">
                            Post ID is required
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
                        <Form.Label>E-Mail</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="E-Mail"
                            value={values.email}
                            name="email"
                            onChange={handleChange}
                            isInvalid={touched.email && !!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            Email is required
                        </Form.Control.Feedback>
                    </div>
                    <div className="mb-3">
                        <Form.Label>Body</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            placeholder="Body"
                            value={values.body}
                            name="body"
                            onChange={handleChange}
                            isInvalid={touched.body && !!errors.body}
                        />
                        <Form.Control.Feedback type="invalid">
                            Body is required
                        </Form.Control.Feedback>
                    </div>
                    <UxButton type="submit">
                        {isEdit ? 'Update Comment' : 'Create Comment'}
                    </UxButton>
                </Form>
            )}
        </Formik>
    );
}

export default CommentForm;
