import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, DefaultOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {setContext} from "@apollo/client/link/context";
import {onError} from "@apollo/client/link/error";

const uri = 'http://localhost:5000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const errorLink = onError(({ graphQLErrors, networkError, response }) => {
    // React only on graphql errors
    if (graphQLErrors && graphQLErrors.length > 0) {
      if (
        (graphQLErrors[0] as any)?.statusCode >= 400 &&
        (graphQLErrors[0] as any)?.statusCode < 500
      ) {
        // handle client side error
        console.error(`[Client side error]: ${graphQLErrors[0].message}`);
      } else {
        // handle server side error
        console.error(`[Server side error]: ${graphQLErrors[0].message}`);
      }
    }
    if (networkError) {
      // handle network error
      console.error(`[Network error]: ${networkError.message}`);
    }
  });
  const basicContext = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Accept: 'charset=utf-8',
        authorization: `Bearer random token`,
        'Content-Type': 'application/json',
      },
    };
  });
  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }
// todo fix this first
  const http = httpLink.create({
    uri: uri,
  });

  return {
    link: ApolloLink.from([basicContext,errorLink,(http as unknown) as ApolloLink]),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
