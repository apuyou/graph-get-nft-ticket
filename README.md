# graph-get-nft-ticket

Create a subgraph of NFT Tickets using GET Protocol (https://get-protocol.io).

Subgraph Explorer: https://thegraph.com/legacy-explorer/subgraph/apuyou/get-nft-ticket

## Available queries

```graphql
{
  tickets(first: 5) {
    id
    owner
    event {
      id
    }
  }
  events(first: 5) {
    id
    name
    tickets {
      id
    }
  }
}
```

## Frontend

Code: https://github.com/apuyou/graph-get-nft-ticket-frontend

Demo: https://nft-tickets.apuyou.io/

<img width="1792" alt="events-list" src="https://user-images.githubusercontent.com/520053/126897409-fe12b309-38c3-4ce3-9ffa-b177f239772e.png">

<img width="1792" alt="tickets-list" src="https://user-images.githubusercontent.com/520053/126897485-0ba58ef4-0fc0-48e9-9a6d-a135cf0bb50a.png">
