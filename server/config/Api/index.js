const axios =require( "axios");
require ('dotenv').config();

const forGeo='state:*';
const incomeVariable='B19013_001E';// hard coded to get the median income for the state
const year = '2019'// this is the latest data on census

console.log(process.env.APIKEY)
const getMedianIncome= async function(year){

    const tempApi=`https://api.census.gov/data/${year}/acs/acs1?get=NAME,${incomeVariable}&for=${forGeo}&key=${process.env.APIKEY}`
    //console.log (tempApi);
    try {
    const response= await axios.get(tempApi)
    const result=response?.data;
    console.log(result);
    return result;

    }catch (error){
        console.log(error);
        throw new Error(error);
    };
};


module.exports = {getMedianIncome};
