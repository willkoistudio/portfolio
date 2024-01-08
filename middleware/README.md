Nuxt provides middleware to run code before navigating to a particular route.
Nuxt provides a customizable route middleware framework you can use throughout your application, ideal for extracting code that you want to run before navigating to a particular route.

There are three kinds of route middleware:
1. Anonymous (or inline) route middleware are defined directly within the page.
2. Named route middleware, placed in the middleware/ and automatically loaded via asynchronous import when used on a page.
3. Global route middleware, placed in the middleware/ with a .global suffix and is run on every route change.

The first two kinds of route middleware can be defined in definePageMeta.