# RMJS
### An exercise using the ReachMail API

## Instructions

1. clone the repo
```sh
git clone https://github.com/tiberius-s/rmjs.git
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

Run `docker exec -ti rmjs-api sh` to look at the stdout. 

### if you prefer a dev environment with live reload:
1. cd into each, site and server, and run `npm install` 
2. add the same token to the docker-compose.dev.yml: `docker-compose -f docker-compose.dev.yml up -d`
