import { useMemo } from 'react';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';
import UxButton from '@library/ux-button/UxButton';

function PostForm({
    initialValues,
    onSubmit,
    isDisabled = false,
    isEdit = false,
}) {
    const { Formik } = formik;

    const schema = useMemo(() => {
        return yup.object().shape({
            id: yup.string().required(),
            userId: yup.string().required(),
            title: yup.string().required(),
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
                        <Form.Label>User ID</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="User ID"
                            value={values.userId}
                            name="userId"
                            onChange={handleChange}
                            isInvalid={touched.userId && !!errors.userId}
                        />
                        <Form.Control.Feedback type="invalid">
                            User ID is required
                        </Form.Control.Feedback>
                    </div>
                    <div className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Title"
                            value={values.title}
                            name="title"
                            onChange={handleChange}
                            isInvalid={touched.title && !!errors.title}
                        />
                        <Form.Control.Feedback type="invalid">
                            Title is required
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
                        {isEdit ? 'Update Post' : 'Create Post'}
                    </UxButton>
                </Form>
            )}
        </Formik>
    );
}

export default PostForm;
