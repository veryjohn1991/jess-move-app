//import { QueryClient, QueryClientProvider } from "react-query";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');

  // return the headers to the context so httpLink can read them
  //const queryClient = new QueryClient({
   // defaultOptions: {
      //queries: {
       // refetchOnWindowFocus: false, // Disable automatic refetching on focus
       // refetchInterval: 60000, // Refetch queries every 60 seconds
     // },
   // },
 // });

 //These three lines go inside the App()function!
 //<QueryClientProvider client={queryClient}>
 //<ExchangeRate />
// </QueryClientProvider>  

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div>
      <ApolloProvider client={client}>
      <Header />
      <div className="container">
     
      <Outlet />
      </div>
      <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;
