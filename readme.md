# RMJS
### An exercise using the ReachMail API

## Instructions

1. clone the repo
```sh
git clone git@github.com:tiberius-s/rmjs.git
```
2. cd into the cloned directory
```sh
cd rmjs
```
3. in the docker-compose.yml file, replace `{{ADD TOKEN HERE!!!}}` with a valid token.
4. run the following command
```sh
docker-compose up -d
```
5. open browser to [localhost:3000](localhost:3000)
6. to tear it down
```sh
docker-compose down
```

Note: if you prefer a dev environment with live reload, add the token to the docker-compose.dev.yml, and run:
```sh
docker-compose -f docker-compose.dev.yml up -d
```