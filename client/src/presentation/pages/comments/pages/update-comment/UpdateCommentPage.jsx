import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import { useCallback, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ApiError from '@components/api-error/ApiError';
import {
    GET_COMMENT,
    GET_COMMENTS,
} from '@src/application/graph-query/queries/comment.queries';
import { UPDATE_COMMENT } from '@src/application/graph-query/mutations/comment.mutations';
import CommentForm from '@pages/comments/components/comment-form/CommentForm';

function UpdateCommentPage() {
    const { id } = useParams();
    const {
        error: loadCommentError,
        loading: commentsLoading,
        data,
    } = useQuery(GET_COMMENT, {
        variables: { id },
    });

    const initialValues = useMemo(() => {
        if (!data?.comment) {
            return {
                id: '',
                postId: '',
                name: '',
                email: '',
                body: '',
            };
        }
        return {
            id: data.comment.id,
            postId: data.comment.postId,
            name: data.comment.name,
            email: data.comment.email,
            body: data.comment.body,
        };
    }, [data]);

    const [
        updateComment,
        { error: updateCommentError, loading: updateCommentLoading },
    ] = useMutation(UPDATE_COMMENT, {
        refetchQueries: [GET_COMMENTS, 'getAllComments'],
    });

    const onSubmit = useCallback(
        (commentFormData) => {
            updateComment({
                variables: { comment: commentFormData },
            });
        },
        [updateComment]
    );

    return (
        <div>
            <UxBackLink text="Back to Comments" />
            <h1>Update Comment</h1>
            <CommentForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isDisabled={commentsLoading || updateCommentLoading}
                isEdit
            />
            {loadCommentError && <ApiError error={loadCommentError} />}
            {updateCommentError && <ApiError error={updateCommentError} />}
        </div>
    );
}

export default UpdateCommentPage;
