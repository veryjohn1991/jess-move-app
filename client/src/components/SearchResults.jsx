import { useState, useEffect } from 'react';
import ResultList from './ResultList';

// Import our search method
import search from '../utils/API';

const SearchResults = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const searchCensusData = async (query) => {
    const { data } = await search(query);
    setResults(data.data);
  };

  // We want to run this method when the component first loads so that we have census data to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => {
    searchCensusData('housing, emploment, education');
  }, []);

  return (
    <div>
      {/* Pass our results to the ResultsList component to map over */}
      <ResultList results={results} />
    </div>
  );
};

export default SearchResults;
