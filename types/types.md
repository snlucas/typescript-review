1. **Union Types**:
   - Write a function called `printId` that takes a parameter `id` which can be either a number or a string. If the `id` is a number, it should log "LOG ID: {id}". If the `id` is a string, it should log "Your ID is: {id}".
   - Test the function with various types of input values to ensure it works correctly.

2. **Type Aliases**:
   - Define a type alias called `UserID` that represents a union type of number and string.
   - Use the `UserID` alias to declare a variable `userID` and assign it a value of either a number or a string.
   - Log the value of `userID` to the console.

3. **Interfaces**:
   - Define an interface called `Shape` with properties `width` and `height`, both of type number.
   - Write a function called `printShape` that takes a parameter `shape` of type `Shape` and logs the values of its properties to the console.
   - Create an object representing a shape and pass it to the `printShape` function to ensure it works correctly.

4. **Literal Types**:
   - Write a function called `printDirection` that takes a parameter `direction` which can only be one of three literal values: "left", "right", or "center".
   - Inside the function, log a message indicating the direction passed as an argument.
   - Test the function by calling it with different literal values.

5. **Null and Undefined**:
   - Write a function called `printMessage` that takes an optional parameter `message` of type string.
   - Inside the function, check if the `message` parameter is null or undefined. If it is, log "No message provided". Otherwise, log the message itself.
   - Call the function with different values, including null and undefined, to observe its behavior.
