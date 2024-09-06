

## Postgraphile Requests

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
