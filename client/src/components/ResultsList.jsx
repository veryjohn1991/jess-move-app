function ResultList(props) {
    return (
      <ul className="list-group">
        {props.results.map((result) => (
          <li className="list-group-item" key={result.id}>
            <p>
                
            </p>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ResultList;
  