import '../partials/Header.css';
import SearchHeader from './SearchHeader';

//import { toast } from 'react-toastify';

//Algolia Search
import '@algolia/autocomplete-theme-classic';
import algoliasearch from 'algoliasearch/lite';
import { Autocomplete } from './Autocomplete';
import { getAlgoliaResults } from "@algolia/autocomplete-js";


const searchClient = algoliasearch(
  "74W68YLA0N",
  "6849b26b52cd542e3f4e44e985634e9f"
);

