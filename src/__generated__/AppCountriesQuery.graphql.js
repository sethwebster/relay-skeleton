/**
 * @flow
 * @relayHash 6c8142269e6627847ea9f9358bdee9fe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppCountriesQueryVariables = {||};
export type AppCountriesQueryResponse = {|
  +countries: ?$ReadOnlyArray<?{|
    +name: ?string
  |}>
|};
export type AppCountriesQuery = {|
  variables: AppCountriesQueryVariables,
  response: AppCountriesQueryResponse,
|};
*/


/*
query AppCountriesQuery {
  countries {
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "countries",
    "storageKey": null,
    "args": null,
    "concreteType": "Country",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppCountriesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppCountriesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppCountriesQuery",
    "id": null,
    "text": "query AppCountriesQuery {\n  countries {\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f6331e1078a75233ad29a4581b4e4f0f';

module.exports = node;
