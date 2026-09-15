Read this after writing inheritance code. 

- The error you’re seeing — *“duplicate identifier not allowed”* — happens because of the way **modules** work in TypeScript.

### Why duplication occurs without `export`
- When you **don’t use `export`**, TypeScript treats your file as a **script** rather than a **module**.
- In script mode, all top-level declarations (like `class Item` or `class Bicycle`) are placed in the **global scope**.
- If you have multiple files with the same class names (e.g., another file also defines `class Item`), TypeScript sees them as duplicates in the global namespace and throws the error.
- By contrast, when you use **`export`**, the file becomes a **module**, and its declarations are scoped to that module. They won’t clash with classes of the same name in other files unless you explicitly import them.

---

### Example to illustrate

```ts
// file1.ts
class Item { }   // No export → goes to global scope
```

```ts
// file2.ts
class Item { }   // No export → duplicate identifier error
```

But if you write:

```ts
// file1.ts
export class Item { }
```

```ts
// file2.ts
export class Item { }
```

No error occurs, because each `Item` is scoped to its own module. You can import whichever one you need.

---

### Key takeaway
- **Without `export`** → file is a script, declarations leak into global scope, causing duplication errors.  
- **With `export`** → file is a module, declarations are private to that file unless imported, avoiding conflicts.

---

So in your code, the `export` keyword isn’t just about sharing classes with other files — it also **prevents global namespace pollution** and the duplication errors you ran into.

Would you like me to show you how to restructure your project so that each file cleanly exports its own class (like `Item.ts` and `Bicycle.ts`) and then imports them into a main file? That way you’ll see the “real-world” modular setup.