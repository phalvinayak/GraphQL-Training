import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import { useCallback, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ApiError from '@components/api-error/ApiError';
import { GET_POST, GET_POSTS } from '@graphQuery/queries/post.queries';
import { UPDATE_POST } from '@graphQuery/mutations/post.mutations';
import PostForm from '@src/presentation/pages/posts/components/post-form/PostForm';

function UpdatePostPage() {
    const { id } = useParams();
    const {
        error: loadPostError,
        loading: isPostLoading,
        data,
    } = useQuery(GET_POST, {
        variables: { id },
    });

    const initialValues = useMemo(() => {
        if (!data?.post) {
            return {
                id: '',
                userId: '',
                title: '',
                body: '',
            };
        }
        return {
            id: data.post.id,
            userId: data.post.userId,
            title: data.post.title,
            body: data.post.body,
        };
    }, [data]);

    const [updatePost, { error: updatePostError, loading: updatePostLoading }] =
        useMutation(UPDATE_POST, {
            refetchQueries: [GET_POSTS, 'getAllPosts'],
        });

    const onSubmit = useCallback(
        (postFormData) => {
            updatePost({
                variables: { post: postFormData },
            });
        },
        [updatePost]
    );

    return (
        <div>
            <UxBackLink text="Back to Posts" />
            <h1>Update Post</h1>
            <PostForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isDisabled={isPostLoading || updatePostLoading}
                isEdit
            />
            {loadPostError && <ApiError error={loadPostError} />}
            {updatePostError && <ApiError error={updatePostError} />}
        </div>
    );
}

export default UpdatePostPage;
