import { useSubscription } from '@apollo/client';
import { MESSAGE_SUBSCRIPTION } from '@graphQuery/subscription/message.subscription';
import ApiError from '@src/presentation/common/components/api-error/ApiError';
import TableLoader from '@src/presentation/common/components/table-loader/TableLoader';

function SubscriptionPage() {
    const { data, error, loading } = useSubscription(MESSAGE_SUBSCRIPTION, {
        variables: {},
        shouldResubscribe: true,
    });

    return (
        <div>
            <h1>GraphQL Subscription Example</h1>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && (
                <div>
                    <p className="mb-0">
                        Operation Name:{' '}
                        <strong>{data.operationFinished.name}</strong>
                    </p>
                    <p>
                        End Date:{' '}
                        <strong>{data.operationFinished.endDate}</strong>
                    </p>
                </div>
            )}
        </div>
    );
}

export default SubscriptionPage;
