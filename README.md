# Bamazon App

### Week 12 Homework
#### About This Homework

This app is an Amazon-like storefront utilizing MySQL, JS, and a few npm packages, including inquirer, cli-table3, colors, and figlet.

The app will take in orders from customers and deplete stock from the store's inventory.
<br />

#### How it Works

To start, the user uses node and types `node bamazonCustomer.js`. The app then displays a table from the MySQL database that shows items for sale, their price, and their stock. The command line then asks the user the ID of the product they would like to buy.

After the user enters the item, based on the item ID, a second message asks how many units of the product they would like to buy. The user then enters a number and the app gives a total of their purchase while also removing the amount of purchased items from the database. If the database doesn't have enough of the item requested, it prompts insufficient quantity.
<br />

![Working App](/images/bamazon-example.png)
<br />

<sup><sub>Disclaimer: this version does NOT contain a password linking to MySQL for security reasons.</sup></sub>