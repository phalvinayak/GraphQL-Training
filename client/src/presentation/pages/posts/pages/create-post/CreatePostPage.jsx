import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import { useCallback, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import PostForm from '@src/presentation/pages/posts/components/post-form/PostForm';
import { CREATE_POST } from '@graphQuery/mutations/post.mutations';
import { GET_POSTS } from '@graphQuery/queries/post.queries';
import ApiError from '@src/presentation/common/components/api-error/ApiError';

function CreatePostPage() {
    const initialValues = useMemo(() => {
        return {
            id: '',
            userId: '',
            title: '',
            body: '',
        };
    }, []);

    const [createPost, { error, loading }] = useMutation(CREATE_POST, {
        refetchQueries: [GET_POSTS, 'getAllPosts'],
    });

    const onSubmit = useCallback(
        (postFormData) => {
            createPost({
                variables: { post: postFormData },
            });
        },
        [createPost]
    );
    console.log(error);

    return (
        <div>
            <UxBackLink text="Back to Posts" />
            <h1>Create Post</h1>
            <PostForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isDisabled={loading}
            />
            {error && <ApiError error={error} />}
        </div>
    );
}

export default CreatePostPage;
