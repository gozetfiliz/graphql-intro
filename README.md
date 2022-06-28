# GraphQL

[GraphQL](https://graphql.org/) is a query language for APIs and a runtime for fulfilling those queries with your existing data.

### Getting Started

Import [setup](setup/) project into your workspace. Setup project contains the initial template you should start working on.
You can find the completed version of this project in [solution](solution/) folder.

Before starting, run `npm i`, which will download @apollo/client and graphql.


### Apollo Client

Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.

```js
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql/",
  cache: new InMemoryCache(),
});
```

The ApolloProvider component leverages React's Context API to make a configured Apollo Client instance available throughout a React component tree. This component can be imported directly from the @apollo/client package.

```js
<ApolloProvider client={client}>
  <App />
</ApolloProvider>
```

### The Query Type

The Query type is a special object type that defines all of the top-level entry points for queries that clients execute against your server. The Query type defines entry points for read operations.

<table>
<tr>
<td> Server Side </td> <td> Client Side </td> <td> Response </td>
</tr>
<tr>
<td>
    
```graphql
type Query {
  books: [Book]
  book(id: String): Book
}

type Book {
  title: String
  author: Author
}

type Author {
  name: String
  age: Int
}
```
    
</td>
<td>
    
```js
const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author {
        name
      }
    }
  }
`;
```

</td>
<td>
    
```json
{
  "data": {
    "books": [
      {
        "title": "City of Glass",
        "author": {
          "name": "Paul Auster"
        }
      },
      ...
    ]
  }
}
```
    
</td>
</tr>
</table>


### The Mutation Type

The Mutation type is similar in structure and purpose to the Query type. Whereas the Query type defines entry points for read operations, the Mutation type defines entry points for write operations.

<table>
<tr>
<td> Server Side </td> <td> Client Side </td> <td> Response </td>
</tr>
<tr>
<td>
    
```graphql
type Mutation {
  addBook(title: String, authorName: String): Book
}
```
    
</td>
<td>
    
```js
const CREATE_BOOK = gql`
  mutation CreateBook {
    addBook(title: "Fox in Socks", authorName: "Dr. Seuss") {
      title
      author {
        name
      }
    }
  }
`;
```

</td>
<td>
    
```json
{
  "data": {
    "addBook": {
      "title": "Fox in Socks",
      "author": {
        "name": "Dr. Seuss"
      }
    }
  }
}
```
    
</td>
</tr>
</table>

### Fetch Data

### Executing a query

The useQuery React hook is the primary API for executing queries in an Apollo application. To run a query within a React component, call useQuery and pass it a GraphQL query string. When your component renders, useQuery returns an object from Apollo Client that contains loading, error, and data properties you can use to render your UI.

```js
const { loading, error, data, refetch } = useQuery(GET_BOOK, {
    variables: { id: '1' } 
});
```

### Manual execution with useLazyQuery

The useLazyQuery hook is perfect for executing queries in response to events besides component rendering. Unlike with useQuery, when you call useLazyQuery, it does not immediately execute its associated query. Instead, it returns a query function in its result tuple that you call whenever you're ready to execute the query.

```js
const [getBooks, { loading, error, data }] = useLazyQuery(GET_BOOKS);
```

### Executing a mutation

The useMutation React hook is the primary API for executing mutations in an Apollo application.

```js
const [createBook, { data, loading, error }] = useMutation(CREATE_BOOK);
```
