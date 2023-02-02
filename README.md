# JavaScript CheatSheet

```JavaScript
Copyright (c)2023 Promineo Tech
Promineo Tech Academic Team
```


## Variable Declaration:

```JavaScript
	var x = "value";
	let y = "value";
	const z = "value"; (constant, can not be changed)
```

## Data Types:
	• Number (e.g. 42)
	• String (e.g. "Goodbye World")
	• Boolean ( e.g. true/false)
	• Undefined (e.g. undefined)
	• Null (e.g. null)
	• Object (e.g. {})
	• Array (e.g. [1,2,3,4,5])


## Arrays:
	• Create: 
```JavaScript	
	var arr = [element1, element2, element3];
```	
	• Access: 
```JavaScript	
	arr[index];
```	
	• Update: 
```JavaScript	
	arr[index] = newElement;
```
	• Methods: 
	
```JavaScript	
		• arr.push(element)
		• arr.pop()
		• arr.shift()
		• arr.unshift(element)
		• arr.slice(start, end)
		• arr.splice(index, deleteCount, element)
```

## Operators:
	• Arithmetic: +, •, *, /, % (modulo)
	• Assignment: =, +=, •=, *=, /=, %=
	• Comparison: ==, ===, !=, !==, >, <, >=, <=
	• Logical: &&, ||, !


## Control Flow: 

### if•else: 
```JavaScript
	if (condition) { 
		statements; 
	} else {
		statements;
	}
```

### switch:
```JavaScript
	switch (expression) { 
		case x: statements; 
		        break; 
		case y: statements; 
		        break; 
		default: statements; 
	}
```

### for loop:
```JavaScript
	for (var i = 0; i < 10; i++) { 
		statements; 
	}
```

### while loop:
```JavaScript
	while (condition) {
		statements;
	}
```

### do•while loop:
```JavaScript
	do {
		statements;	
	} while (condition);
```

## Functions:
	• Define: 
```JavaScript
	function name(param1, param2) { statements; }
```
	• Call: 
```JavaScript
	name(arg1, arg2);
```
	• Arrow function: 
```JavaScript
	(param1, param2) => { statements; }
```

## Objects
	• Create: 
```JavaScript
	var obj = { key1: value1, key2: value2 };
```
	• Access: 
```JavaScript
	obj.key1 or obj["key1"]
```
	• Update: 
```JavaScript
	obj.key1 = newValue;
```
	
## Event Handling:
	• element.addEventListener("eventType", function() { statements; });
```JavaScript	
	button.addEventListener("click", function() { alert("Button clicked!"); });
```



## DOM Manipulation
	• Get element: 
```JavaScript
	document.getElementById("id"), document.querySelector("css selector")
```
	• Change content: 
```JavaScript
	element.innerHTML = "new content";
```
	• Change style: 
```JavaScript
	element.style.property = "new value";
```



## String Methods
	• length: 
```JavaScript	
	str.length
```
	• concatenate: 
```JavaScript	
	str1 + str2
```	
	• indexOf: 
```JavaScript	
	str.indexOf("substring")
```
	• slice: 
```JavaScript	
	str.slice(start, end)
```	
	• replace: 
```JavaScript	
	str.replace("old", "new")
```
