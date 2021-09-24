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

- If user email already exist then will get response as "user already exist"
-  If password and confirmpassword are same then response is "Password and confirm password not matching"
-   If Register successful then user will get success message and token.



## Login
-  http://localhost:7000/bank/loginaccount

#### Example : 
{
 
    "email": "sathya@gmail.com",
    "password": "1234",
    
}

- If email and password not corect then response : "username or password in incorrect"
