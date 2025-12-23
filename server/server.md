******Now currently landing page is done******

**backend API for order of user** *to-do*

POST for creating order 
```
POST /orders 
```

CANCEL an order
```
DELETE /orders/:id
```

UPDATE an order
```
PATCH /orders/:id/status
```

GET for showing all current and previous orders of user
```
GET /orders
```

#
**backend API for authentication of user** *done*

Logging in user
```
POST /auth/login
```

Creatting new user
```
POST /auth/signup
```
#

**backend API for Pizza info (for admin)** *to-do*

*Ading new Pizza*
```
POST /admin/pizzas/:id
```

*Updating existing pizza*
```
PATCH /admin/pizzas/:id
```

*Deleting existing pizza*
```
DELETE /admin/pizzas/:id
```

*Showing all existing pizzas*
```
GET /pizzas
```
#

