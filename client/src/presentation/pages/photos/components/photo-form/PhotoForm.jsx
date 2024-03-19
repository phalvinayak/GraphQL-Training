import { useMemo } from 'react';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';
import UxButton from '@library/ux-button/UxButton';

function PhotoForm({
    initialValues,
    onSubmit,
    isDisabled = false,
    isEdit = false,
}) {
    const { Formik } = formik;

    const schema = useMemo(() => {
        return yup.object().shape({
            id: yup.string().required(),
            albumId: yup.string().required(),
            title: yup.string().required(),
            url: yup.string().url().required(),
            thumbnailUrl: yup.string().url().required(),
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
                        <Form.Label>Album ID</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="User ID"
                            value={values.albumId}
                            name="albumId"
                            onChange={handleChange}
                            isInvalid={touched.albumId && !!errors.albumId}
                        />
                        <Form.Control.Feedback type="invalid">
                            Album ID is required
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
                        <Form.Label>URL</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Url"
                            value={values.url}
                            name="url"
                            onChange={handleChange}
                            isInvalid={touched.url && !!errors.url}
                        />
                        <Form.Control.Feedback type="invalid">
                            Url is required
                        </Form.Control.Feedback>
                    </div>
                    <div className="mb-3">
                        <Form.Label>Thumbnail Url</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Thumbnail Url"
                            value={values.thumbnailUrl}
                            name="thumbnailUrl"
                            onChange={handleChange}
                            isInvalid={
                                touched.thumbnailUrl && !!errors.thumbnailUrl
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            Thumbnail Url is required
                        </Form.Control.Feedback>
                    </div>
                    <UxButton type="submit">
                        {isEdit ? 'Update Photo' : 'Create Photo'}
                    </UxButton>
                </Form>
            )}
        </Formik>
    );
}

export default PhotoForm;
