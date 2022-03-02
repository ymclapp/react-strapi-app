//Algolia Search
// import '@algolia/autocomplete-theme-classic';
import algoliasearch from 'algoliasearch/lite';

import { InstantSearch, SearchBox, Hits, Index, Highlight } from 'react-instantsearch-dom';
import { Card } from 'react-bootstrap';

import '../../style.css';  //you can CSS the results here


const searchClient = algoliasearch(
    "74W68YLA0N",
    "6849b26b52cd542e3f4e44e985634e9f"
);
const Hit = ({ hit }) => (
    <p>
        <Highlight attribute='attributes.title' hit={hit} tagName='mark' />
    </p>
);

const Hit2 = ({ hit }) => (
    <p>
        <Highlight attribute = 'title' hit={hit} tagName='mark' />
    </p>
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
                <p className='results__location'>Algolia Index:  dev_ATSStore Results</p>
                <Hits hitComponent={Hit} />
                <p></p>
                <Index indexName="dev_Manuals">
                    <p className='results__location'>Algolia Index:  dev_Manuals Results</p>
                    <Hits  hitComponent={Hit2} />
                </Index>
            </InstantSearch>
        </div>

    )
}