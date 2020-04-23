var mysql = require("mysql");
var inquirer = require("inquirer");
var colors = require('colors');
var figlet = require('figlet');
var Table = require('cli-table3');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
});

function bamazonTitle() {
figlet.text('Bamazon', {
  font: 'Isometric1',
  horizontalLayout: 'default',
  verticalLayout: 'default'
}, function(err, data) {
  if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
  }
  console.log(data);
  });
}

var tableChart = function() {
    var table = new Table({
        head: ['ID', 'Product Name', 'Department Name', 'Price', 'Stock'],
        colWidths: [7, 30, 20, 10, 7],
        style: {
            head: ["magenta"],
        }
    });
     
    var query = "SELECT * FROM products";
      connection.query(query, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; ++i) {
            table.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            )};
      
        console.log(table.toString());
        startApp();
    });
}

bamazonTitle();
tableChart();

var startApp = function () {
  inquirer
    .prompt({
        name: "item_id",
        type: "input",
        message: "What is the ID of the product you would like to buy?"
    })
    .then(function(answer) {
        var query = `SELECT * FROM products WHERE item_id = ${answer.item_id}`;
      connection.query(query, { item_id: answer.item_id }, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          console.log("\nITEM ID: " + res[i].item_id + " || ITEM NAME: " + res[i].product_name + " || ITEM PRICE: " + res[i].price + " || ITEM QUANTITY: " + res[i].stock_quantity + "\n");
        }
        checking();
        function checking() {
        if (res.length === 0) {
            console.log("\nThis item doesn't exist, sorry!\n".red)
            startApp();
        }
        else {
          inquirer
          .prompt({
              name: "quantity",
              type: "input",
              message: "How many units of the product you would like to buy?"
          })
          .then(function(answer2) {
              var quantity = answer2.quantity;
              if (quantity > res[0].stock_quantity) {
                  console.log("\nSorry, not enough stock!\n".red);
              startApp();
            }
            else {
                console.log("\n" + quantity + " " + res[0].product_name + " purchased for " + res[0].price + " each.");
                console.log("Your total is: " + quantity * res[0].price);
                var newQuantity = res[0].stock_quantity - quantity;
                connection.query(`UPDATE products SET stock_quantity = ${newQuantity} WHERE item_id = ${res[0].item_id}`, function(err, res) {
                    if (err) throw err;
                    console.log("\nYour Order has been Processed!".green)
                    console.log("Thank you for using Bamazon!".magenta)

                    // bamazonTitle();
                    // tableChart();
                })
              }
            });
        }
      }
    })
  });
}