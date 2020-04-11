var jscc = {
    W18: {
        D05_CC: `Write a Javascript program that removes duplicates from an array.
			For example, if the input array is [1, 2, 2, 3, 4, 5, 6, 6, 7], 
			the output of the program should be [1, 2, 3, 4, 5, 6, 7]
			You can assume that the input array is sorted.
			(If this fact is not mentioned in your interview challenge,
			you can always sort the input array before processing).
			Can you do this in O(n) time?`
    },
    W19: {
        D01_CC: `Write a function to delete a node (except the tail) in a singly linked list,
			given only access to that node.
			Given linked list -- 4->5->1->9->NULL, which looks like following:
			Example 1:
		
		Input: node = 5
		
		Explanation: Your linked list is 4->5->1->9->NULL. You are given the second node with value 5,
		the linked list should become 4 -> 1 -> 9 after calling your function.
		
		Example 2:
		
		Input: node = 1
		
		Explanation: Your linked list is 4->5->1->9->NULL. You are given the third node with value 1,
		the linked list should become 4 -> 5 -> 9 after calling your function.
		
		Note:
		
		The linked list will have at least two elements.
		
		All of the nodes' values will be unique.
		
		The given node will not be the tail and it will always be a valid node of the linked list.`,
        D02_CC: `Find the time complexity of following operation in javascript.
			Show them using examples and explain their complexity.

		indexOf
		
		push
		
		pop
		
		shift
		
		splice
		
		concat`,
        D03_CC: `Reverse a singly linked list.

		Example:
		
		Input: 1->2->3->4->5->NULL
		
		Output: 5->4->3->2->1->NULL
		
		Follow up:
		
		A linked list can be reversed either iteratively or recursively. Could you implement both?`,
        D04_CC: `https://leetcode.com/problems/pascals-triangle/`,
        D05_CC: `https://leetcode.com/problems/valid-anagram/`
    },
    W20: {
        D01_CC: `Determine whether an integer is a palindrome.
			An integer is a palindrome when it reads the same backward as forward.

		Example 1:

		Input: 121

		Output: true

		Example 2:

		Input: -121

		Output: false

		Explanation: From left to right, it reads -121. From right to left,
		it becomes 121-. Therefore it is not a palindrome.

		Example 3:

		Input: 10

		Output: false

		Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

		Follow up:

		Could you solve it without converting the integer to a string?`,
        D02_CC: `Given an array of size n, find the majority element.
			The majority element is the element that appears more than ⌊ n/2 ⌋ times.
			You may assume that the array is non-empty and the majority element always exist in the array.

		Example 1:

		Input: [3,2,3]

		Output: 3

		Example 2:

		Input: [2,2,1,1,1,2,2]

		Output: 2`,
        D03_CC: `https://leetcode.com/problems/unique-paths/`,
        D04_CC: `Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
			return the length of last word (last word means the last appearing word if we loop from left to right) in the string.
			If the last word does not exist, return 0.
			Note: A word is defined as a maximal substring consisting of non-space characters only.
			Example:

		Input: "Hello World"

		Output: 5`,
        D05_CC: `Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order,
			not the kth distinct element. Note: You may assume k is always valid, 1 ≤ k ≤ array's length
			Example 1:

			Input: [3,2,1,5,6,4] and k = 2

			Output: 5

			Example 2:

			Input: [3,2,3,1,2,4,5,5,6] and k = 4

			Output: 4`
    },
	W25: {
		D03: `1. Create a table which should have the following things in two different ways

		- Student ID - Primary key
		- Student Name - Can't be null
		- Student Age - Can't be null
		- Parent Name - Can be null - Foreign key, referencing parent table
		- Parent Phone Number - Can be null
		- Student roll number - Can't be null - Must have default value of 0
		- Student DOB - Can't be null - Must have default value of 01-01-2000
		- Student Class - Can be null - Foreign key, referencing class table

		a. Create the table with the keys while creating
		b. Create the same table again but this time with no columns, 
		then add the columns to the table later on as part of updating the table`
	},
	W27: {
		D01 `https://swapi.co/api/planets/:id/

		1st Exercise -
		1. Hit the following api with the "id" as 2, 6, 9
		2. After you get the result of all 3 planets, go through each, fetch the 
		"residents" for each planet with the following api
		https://swapi.co/api/people/:residentid/
		3. After you get the response for all the residents from all 3 planets, 
		now hit the following api to get all the "films" that 
		you'll get from the response for the residents, and print the names of all the films on an HTML page in a UL

		2nd Exercise -
		1. Hit the planet api with the first id
		2. From it's response, get all the residents for the first planet from the second api (people api)
		3. For each resident's response, hit the films api to get the films for
		the residents, print them on an HTML page in a UL
		4. Repeat the same procedure for the second planet
		5. Repeat the same procedure for the third planet

		You have to finish both the exercises
		Output should be an HTML page with a UL of films names
		Do both the exercises using 2 approaches each
		1. Do it once using the Promises
		2. Do it second time using ASYNC-AWAIT

		Demo responses -
		https://swapi.co/api/planets/2/
		{
			"name": "Alderaan", 
			"rotation_period": "24", 
			"orbital_period": "364", 
			"diameter": "12500", 
			"climate": "temperate", 
			"gravity": "1 standard", 
			"terrain": "grasslands, mountains", 
			"surface_water": "40", 
			"population": "2000000000", 
			"residents": [
				"https://swapi.co/api/people/5/", 
				"https://swapi.co/api/people/68/", 
				"https://swapi.co/api/people/81/"
			], 
			"films": [
				"https://swapi.co/api/films/6/", 
				"https://swapi.co/api/films/1/"
			], 
			"created": "2014-12-10T11:35:48.479000Z", 
			"edited": "2014-12-20T20:58:18.420000Z", 
			"url": "https://swapi.co/api/planets/2/"
		}

		From above response for, hit all apis in the "residents" key
		https://swapi.co/api/people/5/
		{
			"name": "Leia Organa", 
			"height": "150", 
			"mass": "49", 
			"hair_color": "brown", 
			"skin_color": "light", 
			"eye_color": "brown", 
			"birth_year": "19BBY", 
			"gender": "female", 
			"homeworld": "https://swapi.co/api/planets/2/", 
			"films": [
				"https://swapi.co/api/films/2/", 
				"https://swapi.co/api/films/6/", 
				"https://swapi.co/api/films/3/", 
				"https://swapi.co/api/films/1/", 
				"https://swapi.co/api/films/7/"
			], 
			"species": [
				"https://swapi.co/api/species/1/"
			], 
			"vehicles": [
				"https://swapi.co/api/vehicles/30/"
			], 
			"starships": [], 
			"created": "2014-12-10T15:20:09.791000Z", 
			"edited": "2014-12-20T21:17:50.315000Z", 
			"url": "https://swapi.co/api/people/5/"
		}

		From the above response, hit all the "films" apis
		https://swapi.co/api/films/2/
		{
			"title": "The Empire Strikes Back", 
			"episode_id": 5, 
			"opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....", 
			"director": "Irvin Kershner", 
			"producer": "Gary Kurtz, Rick McCallum", 
			"release_date": "1980-05-17", 
			"characters": [
				"https://swapi.co/api/people/1/", 
				"https://swapi.co/api/people/2/", 
				"https://swapi.co/api/people/3/", 
				"https://swapi.co/api/people/4/", 
				"https://swapi.co/api/people/5/", 
				"https://swapi.co/api/people/10/", 
				"https://swapi.co/api/people/13/", 
				"https://swapi.co/api/people/14/", 
				"https://swapi.co/api/people/18/", 
				"https://swapi.co/api/people/20/", 
				"https://swapi.co/api/people/21/", 
				"https://swapi.co/api/people/22/", 
				"https://swapi.co/api/people/23/", 
				"https://swapi.co/api/people/24/", 
				"https://swapi.co/api/people/25/", 
				"https://swapi.co/api/people/26/"
			], 
			"planets": [
				"https://swapi.co/api/planets/4/", 
				"https://swapi.co/api/planets/5/", 
				"https://swapi.co/api/planets/6/", 
				"https://swapi.co/api/planets/27/"
			], 
			"starships": [
				"https://swapi.co/api/starships/15/", 
				"https://swapi.co/api/starships/10/", 
				"https://swapi.co/api/starships/11/", 
				"https://swapi.co/api/starships/12/", 
				"https://swapi.co/api/starships/21/", 
				"https://swapi.co/api/starships/22/", 
				"https://swapi.co/api/starships/23/", 
				"https://swapi.co/api/starships/3/", 
				"https://swapi.co/api/starships/17/"
			], 
			"vehicles": [
				"https://swapi.co/api/vehicles/8/", 
				"https://swapi.co/api/vehicles/14/", 
				"https://swapi.co/api/vehicles/16/", 
				"https://swapi.co/api/vehicles/18/", 
				"https://swapi.co/api/vehicles/19/", 
				"https://swapi.co/api/vehicles/20/"
			], 
			"species": [
				"https://swapi.co/api/species/6/", 
				"https://swapi.co/api/species/7/", 
				"https://swapi.co/api/species/3/", 
				"https://swapi.co/api/species/2/", 
				"https://swapi.co/api/species/1/"
			], 
			"created": "2014-12-12T11:26:24.656000Z", 
			"edited": "2017-04-19T10:57:29.544256Z", 
			"url": "https://swapi.co/api/films/2/"
		}`,
		D03: `Create an HTML page layout similar to the SemanticHTML image in the coding-challenges folder, 
		using all Semantic HTML tags at the right places as mentioned in the image, 
		along with the CSS written in SCSS`
	},
	W28: {
		D02: `1. Write a function which works in the following way

		add(2,3,4,5...) // sum of all numbers
		add(2)(3)(4)(5)(...) // sum of all numbers

		2. Write a funcition to print the following
		var arr = [1,2,3,4,5];
		for this array
		a. Print all at once, but after 5 seconds
		i = 1
		i = 2
		i = 3
		i = 4
		i = 5

		b. Print each one after 5 seconds
		i = 1
		i = 2
		i = 3
		i = 4
		i = 5

		3. Create an html page, paste the following html
		<p id="help">Helpful notes will appear here</p>
		<p>E-mail: <input type="text" id="email" name="email"></p>
		<p>Name: <input type="text" id="name" name="name"></p>
		<p>Age: <input type="text" id="age" name="age"></p>

		And paste this in a script tag
		function showHelp(help) {
		  document.getElementById('help').innerHTML = help;
		}

		function setupHelp() {
		  var helpText = [
			  {'id': 'email', 'help': 'Your e-mail address'},
			  {'id': 'name', 'help': 'Your full name'},
			  {'id': 'age', 'help': 'Your age (you must be over 16)'}
			];

		  for (var i = 0; i < helpText.length; i++) {
			var item = helpText[i];
			document.getElementById(item.id).onfocus = function() {
			  showHelp(item.help);
			}
		  }
		}

		setupHelp();

		-- Now whenever you click on any of the inputs, the corresponding title should be 
		shown in the paragraph tag, but it's not happening, please fix the code`,
		D03: `1. Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

		Examples:
			sumEvenArguments(1,2,3,4) // 6
			sumEvenArguments(1,2,6) // 8
			sumEvenArguments(1,2) // 2

		2. Write a function called addOnlyThreeTimes, which should be called only 3 times, after that it should get maxed out. You should not use an outer counter, everything has to be inside function itself.
		Examples:

			addOnlyThreeTimes(1,2) // 3
			addOnlyThreeTimes(2,2) // 4
			addOnlyThreeTimes(1,2) // 3
			addOnlyThreeTimes(1,2) // "Maxed Out!"
			
		/* 
		Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.

		Examples:

			function add(a,b){
				return a+b
			}

			var addOnce = once(add, this);
			addOnce(2,2) // 4
			addOnce(2,2) // undefined
			addOnce(2,2) // undefined
			
			function doMath(a,b,c){
				return this.firstName + " adds " + (a+b+c)
			}
			
			var instructor = {firstName: "Elie"}
			var doMathOnce = once(doMath, instructor);
			doMathOnce(1,2,3) // "Elie adds 6"
			doMathOnce(1,2,3) // undefined
			

		*/

		// BONUSES! 

		/* 
		Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

		Examples:

			function firstNameFavoriteColor(favoriteColor){
				return this.firstName + "'s favorite color is " + favoriteColor
			}
			
			var person = {
				firstName: 'Elie'
			}
			
			var bindFn = bind(firstNameFavoriteColor, person);
			bindFn('green') // "Elie's favorite color is green"
			
			var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
			bindFn2('green') // "Elie's favorite color is blue" 
			
			function addFourNumbers(a,b,c,d){
				return a+b+c+d;
			}

			bind(addFourNumbers,this,1)(2,3,4) // 10
			bind(addFourNumbers,this,1,2)(3,4) // 10
			bind(addFourNumbers,this,1,2,3)(4) // 10
			bind(addFourNumbers,this,1,2,3,4)() // 10
			bind(addFourNumbers,this)(1,2,3,4) // 10
			bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

		*/

		function bind(fn, thisArg){
		  var outerArgs = [].slice.call(arguments, 2);
		  return function(){
			var innerArgs = [].slice.call(arguments);
			var allArgs = innerArgs.concat(outerArgs);
			return fn.apply(this, allArgs);
		  }
		}


		/* 
		Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure! 

		Examples:

			function personSubtract(a,b,c){
				return this.firstName + " subtracts " + (a-b-c);
			}
			
			var person = {
				firstName: 'Elie'
			}
			
			var flipFn = flip(personSubtract, person);
			flipFn(3,2,1) // "Elie subtracts -4"
			
			var flipFn2 = flip(personSubtract, person, 5,6);
			flipFn2(7,8). // "Elie subtracts -4"
			
			function subtractFourNumbers(a,b,c,d){
				return a-b-c-d;
			}

			flip(subtractFourNumbers,this,1)(2,3,4) // -2
			flip(subtractFourNumbers,this,1,2)(3,4) // -2
			flip(subtractFourNumbers,this,1,2,3)(4) // -2
			flip(subtractFourNumbers,this,1,2,3,4)() // -2
			flip(subtractFourNumbers,this)(1,2,3,4) // -2
			flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
			flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
			flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

		*/


		function flip(fn, thisArg){
		  var outerArgs = [].slice.call(arguments, 2);
			return function(){
			  var innerArgs = [].slice.call(arguments);
			  var allArgs = innerArgs.concat(outerArgs).slice(0, fn.length);
			  return fn.apply(thisArg, allArgs.reverse())
			}
		}`
	}
}