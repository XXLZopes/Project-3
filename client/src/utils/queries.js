import gql from 'graphql-tag';

export const GET_ME = gql`
    query {
        me {
            _id
            username
            email
            savedStats {
                makes
                misses
                points
                shotType
                x
                y
                courtLocation
            }
        }
    }
`;