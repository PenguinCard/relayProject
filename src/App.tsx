import * as React from 'react';
import { useRelayEnvironment, usePreloadedQuery, loadQuery, graphql } from "react-relay/hooks";
// import graphql from 'babel-plugin-relay/macro';

function App() {

    const env = useRelayEnvironment();

    const UserQuery = graphql`
        query AppUserQuery {
            user {
                name
                age
            }
        }
    `
    const preloadQuery = loadQuery(env, UserQuery, {})
    const data = usePreloadedQuery(UserQuery, preloadQuery);

    // const preloadedQuery = loadQuery(RelayEnvironment, UserQuery,{});
    // const data = usePreloadedQuery(UserQuery, preloadedQuery);

    return(
        <div>
            {JSON.stringify(data)}
        </div>
    )
}
export default App
