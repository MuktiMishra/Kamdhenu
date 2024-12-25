## How to Get Postgres Running locally 

- First, install docker on your machine. 
- Then run this command on powershell or cmd "docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres"
- After that, it should be running, to check on local, first come on CMD or powershell and run "psql -h localhost -p 5432 -U postgres -W" and when prompted for password: enter "mysecretpassword"
- Then you should be in a terminal which says "postgres=#~" and then you can run the '\dt' command to see the tables of fthe current DB or you can run '\l' to list all the Databases

## To run prisma and our server
- Once you have done the above steps, go ahead and go into the prisma folder through your terminal
- once in there first run "npx prisma migrate dev" to apply the changes to the database 
- then finally do a "npx prisma generate" 
- and there you've got it