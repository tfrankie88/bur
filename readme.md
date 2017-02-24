# Favorite Beers!

![Beers](https://i.giphy.com/l41m2gkhznSN3xlDO.gif)

## Learning Objectives
* User Auth
* Many to many relationships
* Beer

## Completion
* Create and Read functionality for users
* Create and Read functionality for beers
* Create, Read, and DELETE functionality for favorite_beers
* Users should be able to look at a list of all beers and save individual beers to their favorites
* Users should be able to delete beers from their favorites
* Users should have a dashboard view that displays all the beers that have been saved

## Submission
Homework is due Sunday night by **11pm**.

## Assignment
Create a CRUD app for beers! Users should be able to create accounts, log in to their account, add beers to the database, and then save favorite beers to their personal accounts. This app will require three tables:
* **users**
* **beers**
* **favorite_beers**

The `users` table is just like every other users tables we have created so far. The `beers` table is going to represent a table of any beer that a user decides to add to the database. The key is that users should be able to look at this list of beers and **save** them to their own account.

Think about the relationship of `users` to `beers`. Is this a one to one relationship? One to many? Many to many?

If you guessed many to many, you're right! A user can have many beers, but similarly, a single beer can be associated to many users.

**With SQL type databases, you need a third table in order to model a many to many relationship.**

What would this third table look like?

**favorite_beers**

| id | user_id | beer_id |
|----|---------|---------|
| 1 | 10 | 3 |
| 2 | 10 | 2 |
| 3 | 3 | 4 |
| 4 | 6 | 4 |
| 5 | 8 | 9 |

So if we wanted to see a single user's favorite beers, what would this SQL query look like? Hint: You will need to do a big JOIN!

## Bonus

#### Administrator Accounts
Modify the users table to distinguish between regular users and admins.

Regular Users **can**:
* See a list of all beers
* Save beers to their dashboard
* Delete beers from their dashboard
* See their dashboard

Regular Users **cannot**:
* Add to the list of beers
* See any other user dashboards

Admin Users **can**:
* See a list of all users
* See all user's dashboards
* Delete users
* Add new beers to beers table

To get some admin accounts in your `users` table, you can just add them manually in the terminal with `psql`.
