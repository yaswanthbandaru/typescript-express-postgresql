
## Migrations

    npx typeorm migration:create ./src/migration/CreateEntitiesMigration


## REST API requests


### Post Request:
    curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"firstname": "John", "lastname": "Doe", "email": "john@example.com"}'


### GET Request:
    curl -X GET http://localhost:3000/users

### PUT Request:
    curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"firstname": "Joey", "lastname": "Doe", "email": "joeydoe@example.com"}'


### DELETE Request:
    curl -X DELETE http://localhost:3000/users/1 


## POSTGRAPHILE Requests

### URL for postgresql connection looks like this

    "postgres://<your_user>:<your_password>@<your_hostname>/postgres"




### CreateUser by Postgraphile

    mutation MyMutation {
        createUser(
            input: {user: {firstname: "sid", lastname: "raj", email: "sidraj@ai.com"}}
            ) {
                user {
                id
                firstname
                lastname
                email
                }
            }
        }

    
### Read all User

    query MyQuery {
        allUsers{
            nodes{
            id
            firstname
            lastname
            email 
            }
        }
    }

### Update a User:

    mutation MyMutation {
        updateUserById(
            input: {userPatch: {email: "nikjonas@ai.com", firstname: "nik", lastname: "jonas"}, id: 8}
        ) {
            user {
            email
            firstname
            lastname
            id
            }
        }
    }


### Delete a User 

    mutation MyMutation {
        deleteUserById(input: {id: 9}) {
            user {
            email
            firstname
            id
            lastname
            }
        }
    }