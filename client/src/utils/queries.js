import {gql} from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
user(username: $username) {
    username
     
  } 
}
`;
export const QUERY_STATEINCOME=gql`
query stateincome ($stateName: String!){
  stateincome(stateName: $stateName){
    stateName
    medianIncome
  }
}
`