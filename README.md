# assignment-1

## Create new account
- http://localhost:7000/bank/createaccount

#### Example : 
{

    "fullname": "sathya",
    "date": "11/06/76",
    "email": "sathya@gmail.com",
    "password": "1234",
    "confirmpassword": "1234"
}

- If user email already exist then will get response as : "User already exists"
-  If password and confirmpassword are same then response is : "Password don't match."
-   If Register successful then user will get success message and token.



## Login
-  http://localhost:7000/bank/loginaccount

#### Example : 
{
 
    "email": "sathya@gmail.com",
    "password": "1234",
    
}

- If user is not registered then response is : "User doesn't exist."
- If email and password not corect then response : "Invalid Credentials"

## Available services 

 - http://localhost:7000/bank/availableServices
 - http://localhost:7000/bank/availableServices/:id

## Current services

 - http://localhost:7000/bank/currentServices
 - http://localhost:7000/bank/currentServices/:id

## Transaction details

 - http://localhost:7000/details/history
 - http://localhost:7000/details/history/:id

## Summary details

 - http://localhost:7000/bank/summary
 - http://localhost:7000/bank/summary/:id

## Rate the service

 - http://localhost:7000/rating
 - http://localhost:7000/rating/:id








