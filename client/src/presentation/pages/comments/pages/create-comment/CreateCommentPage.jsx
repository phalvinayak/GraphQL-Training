import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import { useCallback, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import ApiError from '@src/presentation/common/components/api-error/ApiError';
import { CREATE_COMMENT } from '@graphQuery/mutations/comment.mutations';
import { GET_COMMENTS } from '@graphQuery/queries/comment.queries';
import CommentForm from '@pages/comments/components/comment-form/CommentForm';

function CreateCommentPage() {
    const initialValues = useMemo(() => {
        return {
            id: '',
            postId: '',
            name: '',
            email: '',
            body: '',
        };
    }, []);

    const [createComment, { error, loading }] = useMutation(CREATE_COMMENT, {
        refetchQueries: [GET_COMMENTS, 'getAllComments'],
    });

    const onSubmit = useCallback(
        (commentFormData) => {
            createComment({
                variables: { comment: commentFormData },
            });
        },
        [createComment]
    );

    return (
        <div>
            <UxBackLink text="Back to Comments" />
            <h1>Create Comment</h1>
            <CommentForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isDisabled={loading}
            />
            {error && <ApiError error={error} />}
        </div>
    );
}

export default CreateCommentPage;
