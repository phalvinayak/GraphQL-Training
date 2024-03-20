import { gql } from '@apollo/client';

export const MESSAGE_SUBSCRIPTION = gql`
    subscription OperationSubscription {
        operationFinished {
            name
            endDate
        }
    }
`;
