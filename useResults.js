import {useEffect,useState} from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, SetErrorMessage] = useState('');
  
  
    const searchApi = async searchTerm => { //Make request Api Async() is used for permission, yelp.get get is http request '/search' basically Api baseurl
        
      try {
      
            const response = await yelp.get('/search', {    // helper function, Assign the respons to response variable
               params: {  // keyvalue that append directly to '/search' baseUrl
               limit: 50,
               term: searchTerm,  // term:term
               location: 'san jose'
              }
            });
  
            setResults(response.data.businesses);     // response.data is a response properties that have json data back from API,
          } catch(err){
            SetErrorMessage ('Something Went Wrong');
          }   
    };                                      // Businesses is array of object that we want to store
  
    useEffect(() => {   // useEffect() Hook function is used to when we want to run one time 
  
      searchApi('pasta');
  
    }, []);  // Or want to run code many time depanding on 2 argument array
  
    return [searchApi,results,errorMessage];
};