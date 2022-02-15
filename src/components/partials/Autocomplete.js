import React, { createElement, Fragment, useEffect, useRef } from "react";
import { render } from "react-dom";
import { autocomplete } from "@algolia/autocomplete-js";

// Creates an Autcomplete component from the JS library
// https://www.algolia.com/doc/ui-libraries/autocomplete/guides/using-react/
export function Autocomplete(props) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    // Initialize autocomplete on the newly created container
    const search = autocomplete({
      container: containerRef.current,
      renderer: { createElement, Fragment },
      // Autocomplete render()
      // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/#param-render
      render({ children }, root) {
        // react-dom render
        // https://reactjs.org/docs/react-dom.html#render
        render(children, root);
      },
      ...props
    });

    // Destroy the search instance in cleanup
    return () => {
      search.destroy();
    };
  }, [props]);

  return <div ref={containerRef} />;
}