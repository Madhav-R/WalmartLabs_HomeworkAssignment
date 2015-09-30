# WalmartLabs_HomeworkAssignment
Implement an end-to-end transaction on Walmart.com website

Problem Statement:
	Automate an end-to-end user e-commerce transaction flow using any open source tool for www.walmart.com with an existing customer on Chrome or Safari browser.
	Scenario to automate:
	1. Login using existing account
	2. Perform a search on home page from a pool of key words given below
	3. Identify an item from the result set that you can add to cart
	4. Add the item to cart
	5. Validate that item added is present in the cart and is the only item in the cart

Test Data:
	This data is added to properties files that are part of this project and dynamically loaded whenever needed.
	• Account details: username: madhavrupenaguntla@gmail.com
		    password: WalmartLabs
	• Search terms:  tv, socks, dvd, toys, iPhone

Testing tools and Programming language utilized: 
	• Selenium WebDriver using Java - for automating the flow.
	• TestNG framework – for developing and implementing testsuite with various test cases.

Analysis of the problem:
	Each of the five steps listed in the problem have to be converted in to unit transactions.
	Here is the logic followed when automating each of those unit transactions.

	1) Login using existing account: Username and password are hardcoded when trying to do a successful login. Invalid test cases are tested using random data in place of username and password.
	Steps involved:
	• Load webpage with URL https://www.walmart.com/account/.
	• Enter username 
	• Enter password
	• Press ENTER.

	2) Perform a search on home page from a pool of key words given in the search terms:
	Steps involved:
	• Enter the keyword in the search text box and press ENTER.
	• If the keyword is same as an existing search category, set a flag to indicate that the keyword is a search category.
	• Identify an item from the result set that you can add to cart
	• If the searched keyword is an existing category as indicated by the flag, perform a search in the search textbox with the product name.
	• Fetch the products obtained from the keyword search and look for the product with specific words in its name.
	• If the intended product is found, save the productid of the product for later use.
	• If the intended product is not found, end the test.

	3) Add the item to the cart
       Steps involved:
	• Click on the item from the displayed entries in the screen.
	• Click on the ‘Add to Cart’ button to add the product to the cart.

	4) Validate that item added is present in the cart and is the only item in the cart
	• Check if the number of items in the cart is equal to 1.
	• Check if the product in the cart is the one that is added in the earlier step by verifying the productId previously saved.

Project Structure:
src:
	This directory has the following source code files-
	• WalmartLabs_HWAssignment –
		This is a java class file with each of the unit operations required for performing the above tests coded into methods.

	• WalmartLabs_HWAssignment_Tests –
		This file is generated using TestNG framework. The end-to-end scenario mentioned in the problem statement along with a search for each of those keywords is performed in a separate test case.

lib:
	This directory has all the .jar files that are used in the project.

properties:
	This directory has two files.
	loginProperties.properties
	• the username and password values used for logging into the website are listed as pname = value] pairs
	searchProperties.properties
	• various search parameters including the search keywords etc used for logging into the website are listed as pname = value] pairs

test-output
	the results of various test cases executed are saved in this folder

TestSuite
	• TestNG.xml – 
	File for configuring the test cases in WalmartLabs_HWAssignment_Tests as a test suite.

web_browser_drivers
	the executable driver file for chrome browser is in this folder

Scope for improvements
	• Multi-browser support can be added by adding browser driver files to the web_browser_driver folder and can be loaded dynamically by identifying the browser on which the webpage is loaded.
	• The current logic for selecting the product from among the results of the search is based on providing additional data to look for in the product title. This can be changed to include more advanced ways of selecting the product.
	• sorting of results based on different sort criteria from the result set of product searches can be added
