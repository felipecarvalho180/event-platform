import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o9h9ok1gnk01z2bg0r9xtf/master",
  cache: new InMemoryCache(),
});
