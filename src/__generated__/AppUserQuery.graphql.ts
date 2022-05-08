/**
 * @generated SignedSource<<b8aef927d8c6fe63ab4857a3a2f6c6d3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppUserQuery$variables = {};
export type AppUserQuery$data = {
  readonly user: {
    readonly name: string | null;
    readonly age: number | null;
  } | null;
};
export type AppUserQuery = {
  variables: AppUserQuery$variables;
  response: AppUserQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "age",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a05acdf98f458514fe53b3fa829a5563",
    "id": null,
    "metadata": {},
    "name": "AppUserQuery",
    "operationKind": "query",
    "text": "query AppUserQuery {\n  user {\n    name\n    age\n  }\n}\n"
  }
};
})();

(node as any).hash = "e8ae49907a24a202dd79b9018b6934f1";

export default node;
