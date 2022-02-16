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

const actions = {
  DARK_MODE: () => {
    document.querySelector('body').classList.toggle('dark');
  },
  DEFAULT:  () => {
    console.log('DEFAULT');
  }
};

//************Algolia Search************
// function Action({ hit }) {
//   // Component to display the items
//   return (
//     <div className="aa-ItemWrapper">
//       <div className="aa-ItemContent">
//         <div className="aa-ItemIcon">{hit.icon}</div>
//         <div className="aa-ItemContentBody">
//           <div className="aa-ItemContentTitle">
//             <span>{hit.highlighted}</span>
//             {hit.enabled && (
//               <code className="aa-ItemContentTitleNote">Enabled</code>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="aa-ItemActions">
//         <button
//           className="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
//           type="button"
//           title="Select"
//         >
//           <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
//             <path d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }

// function getQueryPattern(query, flags = "i") {
//   const pattern = new RegExp(
//     `(${query
//       .trim()
//       .toLowerCase()
//       .split(" ")
//       .map((token) => `^${token}`)
//       .join("|")})`,
//     flags
//   );
//   return pattern;
// }

// function highlight(text, pattern) {
//   const tokens = text.split(pattern);

//   return tokens.map((token) => {
//     if (!pattern.test("") && pattern.test(token)) {
//       return <mark>{token}</mark>;
//     }

//     return token;
//   });
// }

export default function Header() {
  function Action({ hit, components }) {
    return (
      <li className=''>
        <div className='aa-ItemTitle'>
          <h3>
            <components.Highlight attribute='attributes.title' hit={hit} />
          </h3>
        </div>
      </li>
    );
  }

function ProductItem({ hit, components }) {
  return (
    <div className='aa-ItemTitle'>
      {hit.image ? <img src={hit.image} width={300}/> : ''}
      <h3>
        <components.Highlight hit={hit} attribute='attributes.image' />
      </h3>
    </div>
  );
}


  //main header return
  return (
    <div className='header text-center'>
      {/* <h1>React Template Header</h1> */}
      <Autocomplete
        placeholder="Search..."
        openOnFocus={true}
        defaultActiveItemId={0}
        getSources={({ query }) => [
          {
            sourceId: "actions",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "dev_ATSStore",
                    query
                  }
                ]
              });
            },
            onSelect({ item }) {
              actions[item.action] ? actions[item.action]() : actions.DEFAULT();
            },

            templates: {
              header() {
                return <SearchHeader text="Actions" />;
              },
              item({ item, components }) {
                return <Action hit={item} components={components} />;
              }
            }
          },

          //our products
          {
            sourceId: "articles",
            getItemUrl({ item }) {
              return `${item.url}`;
            },
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "dev_ATSStore",
                    query
                  }
                ]
              });
            },
            templates: {
              header() {
                return <SearchHeader text="ATS Store" />;
              },
              item({ item, components }) {
                return <ProductItem hit={item} components={components} />;
            // getItemInputValue({ item }) {
            //   return item.label;
            // },
            // getItems({ state }) {
            //   const pattern = getQueryPattern(query);

            //   return [
            //     {
            //       icon: (
            //         <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            //           <path
            //             strokeLinecap="round"
            //             strokeLinejoin="round"
            //             strokeWidth={2}
            //             d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            //           />
            //         </svg>
            //       ),
            //       label: "/dark",
            //       enabled: state.context.dark,
            //       onSelect({ setContext }) {
            //         document.querySelector("body").classList.add("dark");
            //         setContext({ dark: true });
            //         notify("Dark Mode enabled");
            //       }
            //     },
            //     {
            //       icon: (
            //         <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            //           <path
            //             strokeLinecap="round"
            //             strokeLinejoin="round"
            //             strokeWidth={2}
            //             d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            //           />
            //         </svg>
            //       ),
            //       label: "/light",
            //       enabled: !state.context.dark,
            //       onSelect({ setContext }) {
            //         document.querySelector("body").classList.remove("dark");
            //         setContext({ dark: false });
            //         notify("Light Mode enabled");
            //       }
            //     },
            //     {
            //       icon: (
            //         <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            //           <path
            //             strokeLinecap="round"
            //             strokeLinejoin="round"
            //             strokeWidth={2}
            //             d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            //           />
            //         </svg>
            //       ),
            //       label: "/default",
            //       onSelect() {
            //         notify("Default function fired");
            //       }
            //     }
            //   ]
            //     .filter(({ label }) => pattern.test(label))
            //     .map((action) => ({
            //       ...action,
            //       highlighted: highlight(action.label, pattern)
            //     }));
            // },
            // Run this code when item is selected
            // onSelect(params) {
              // item is the full item data
              // setQuery is a hook to set the query state
            //   const { item, setQuery } = params;

            //   item.onSelect(params);
            //   setQuery("");
            // },
            // Templates for Header of this source and Items in this source
            // templates: {
            //   header() {
            //     return <Header text="Available Actions" />;
            //   },
            //   item({ item }) {
            //     return <Action hit={item} />;
              }
            }
          }
        ]}
        navigate={({ itemUrl }) => {
          console.log(itemUrl);
        }}
      />
    </div>
  );
}

// const notify = (text) => {
//   toast.info(text, {
//     position: "bottom-right"
//   });
// };

