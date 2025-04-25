# test-hono-archi

A repo to test an archi with Hono

## Start

```bash
deno task start:api
```

## Project structure

> - `/apps`: Entry layers
>   - `/[name]`
>     - `/controllers`

> - `/domains`: Business layers
>   - `/[name]`
>     - `/commands`: Business logic that changes the state of the system
>     - `/queries`: Business logic that retrieves data from the system
>     - `/services`: Reusables related to business
>     - `/utils`: Generic reusables

> - `/libs`: Data layers
>   - `/[name]`
>     - `/services`: Reusables
>     - `/utils`: Generic reusables

Each layer can call any element from the same layer and some elements from the layer direclty below.

The `apps` controllers can only call /domains/[name]/commands and /domains/[name]/queries.

A `domains` query & command can call another `domains` query & command.  
The `domains` services can only call /libs/[name]/services.

```mermaid
graph
    subgraph "/apps/[name]"
        AppControllers["/controllers"]
    end

    subgraph "/domains"
        subgraph "/[name]"
            DomainCommands1["/commands"]
            DomainQueries1["/queries"]
            DomainServices1["/services"]
            DomainUtils1["/utils"]
        end
    end

    subgraph "/libs/[name]"
        LibServices["/services"]
        LibUtils["/utils"]
    end

    AppControllers --> DomainCommands1
    AppControllers --> DomainQueries1

    DomainServices1 --> LibServices
