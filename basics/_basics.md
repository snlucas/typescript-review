### Exercises:

1. **Understanding Behavior in JavaScript**:
   - Write a function `analyzeMessage(message: any): void` that takes a message as input and logs its behavior. For example:
     ```typescript
     analyzeMessage("Hello"); // Log: Can be called
     analyzeMessage(123); // Log: Can't be called
     analyzeMessage({}); // Log: Can be called
     ```

2. **Static Type-Checking**:
   - Write a function `greet(person: string, date: Date): void` that takes a person's name and today's date and logs a greeting message. Ensure that TypeScript type-checks the function correctly.
   - Test the `greet` function with both correct and incorrect arguments to observe TypeScript's behavior.

3. **Understanding Errors**:
   - Write a function `accessProperty(obj: { name: string }): void` that tries to access a property `location` on the input object. Handle TypeScript's error message about the property not existing.

4. **Strictness Flags**:
   - Write a TypeScript program that demonstrates the difference between code behavior with and without the `noImplicitAny` and `strictNullChecks` flags enabled.
   - Use a function or variable declaration where TypeScript would typically infer the `any` type or allow `null` or `undefined`, and observe the differences when the strictness flags are turned on and off.

5. **Tooling Support**:
   - Write a TypeScript program using an editor or IDE with TypeScript support.
   - Observe how the editor provides error messages, code completion, quick fixes, and navigation features as you type.

6. **Compiler Options**:
   - Experiment with different TypeScript compiler options such as `--target` and `--noEmitOnError`.
   - Create a TypeScript file with errors and observe the compiler's behavior with different options enabled.

These exercises should help reinforce the concepts covered in the TypeScript handbook section while providing hands-on experience with TypeScript's behavior, type-checking, error handling, and tooling support.
