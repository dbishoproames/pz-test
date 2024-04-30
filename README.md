# "Cheeseria"

This is a coding test submission. It is far from what I would consider a "complete" MVP.

There are _many_ things I would have liked to add or improve in terms of both code and features, but I wanted (and needed) to stick to a relatively short development time-frame. Much of that time was spent having to re-learn Angular from scratch as I discovered I'd forgotten much more than I expected to in ~5 years.

## Open API Specification

The API specification is defined in `oas.yaml`. It can best be inspected by loading it in the [latest Swagger Editor](https://editor-next.swagger.io/).

## Build and Run

### Using Docker
Installation, configuration, and a basic working knowledge of Docker is assumed.

#### Build the container images

**API**
```bash
docker build --file ./build/Dockerfile --target 'api-serve' --tag 'api-serve:latest' .
```

**UI**
```bash
docker build --file ./build/Dockerfile --target 'ui-serve' --tag 'ui-serve:latest' .
```

#### Run the containers
The commands to run both API and UI containers below are examples only... users may need to make some modifications to these commands due to differences in system configuration (i.e. networking available to Docker).

**API**
```bash
docker run --rm --name 'api-serve-cont' --network host 'api-serve'
```

**UI**
```bash
docker run --rm --name 'ui-serve-cont' --network host 'ui-serve'
```

### Directly

The commands below assume that the following are already installed:
* Node (and NPM)
* Angular CLI

**API**
```bash
cd ./api
npm install
npm start
```

**UI**
```bash
cd ./ui
npm install
ng serve
```
