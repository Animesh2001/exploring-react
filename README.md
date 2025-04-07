# Namaste React

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling
- Diagnostic
- Error Handling
- Can host on HTTPs also instead of HTTP
- Tree Shaking
- Different Dev and Prod builds


**Import/Export :-** 
 

There are two types of import and two types of export.

1. default export/import  
    export default Component;
    import Component from "path";
2. named export/import
    export const Component;
    import { Component } from "path";

The named import/export are used generally when from a single file we have to export multiple things.

**In one file we can only have one default export.**

If you have to export multiple things, then we have to use something called as named export.

**How to use named export ?**

Ans. :- Simple just add export in front of variable or method.

this is how we can export multiple things from a file.

**How to import using named import ?**
Ans :- Its simple wherever we had named export, you have to write curly braces { } and then whatever need to import.

The thing which we exported is a js variable , so if we want to use it inside jsx we have to write it inside curly braces.


# React Hooks
(Normal JS  utility function written by facebook )
