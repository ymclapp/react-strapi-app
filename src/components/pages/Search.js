//Algolia Search
import '@algolia/autocomplete-theme-classic';
import algoliasearch from 'algoliasearch/lite';

import { InstantSearch, SearchBox, Hits, Index } from 'react-instantsearch-dom';


const searchClient = algoliasearch(
    "74W68YLA0N",
    "6849b26b52cd542e3f4e44e985634e9f"
);


export default function Search() {

    return (
        <div className="ais-InstantSearch">
            <InstantSearch
                searchClient={searchClient}
                indexName="dev_ATSStore"
                >
                <SearchBox />
                <p></p>
                <p><strong>dev_ATSStore Results</strong></p>
                <Hits />
                <p></p>
                <Index indexName="dev_Manuals">
                    <p><strong>dev_Manuals Results</strong></p>
                    <Hits />
                </Index>
            </InstantSearch>
        </div>

    )
}