# 2023-04-05

## Problems:

 1. Current RSS generation is janky, it generates the RSS, Atom etc. as public files
   - That’s no damn good.
     - First, it’s weird. RSS and Atom and friends should be generated as routes, under `pages`.
     - Secondly, it means that the .mdx for the blog is parsed in a context where it doesn’t have access to the components! That means I’m effectively limited to .md style posts, which was the whole thing I was trying to avoid.
 2. Similarly, current [slug] route is generating the pages as static content (**and only static content**) which means that when they are parsed, there’s no client-side action at all! And again, because the parsing mechanism is next-mdx-remote, again, the mdx has no access to client-time rendering loop, which in turn means that I’m limited to .md type content. There’s no point to .mdx under this scenario, other than maybe the opportunity to render custom links, etc.

## Solutions:

 1. Generate feeds as route under `/pages` comme il faut. It should access routing information passed into `getStaticProps()` or `getServerSideProps()`.
 2. `/pages/post/` should be where posts live, as regular pages. It should be possible to access the list of pages under a particular directory at either build time or serve time.

# 2023-04-08

1. Moved to apps structure (https://beta.nextjs.org/docs/routing)
2. Tried to fix RSS but TBH it’s cutting against the grain to try to make arbitrary xml with React/Next. TODO: go back to `npm i feed`
3. Make an API endpoint for returning a list of posts.
4. Call this endpoint from home and also from the rss page
5. Use route handlers https://beta.nextjs.org/docs/routing/route-handlers for returning the rss
6

# 2023-04-16

 - Major progress, too much to recount. In brief, we’ve got a full graphql endpoint and a lot of other nice stuff. Oh also we use BabylonJS, Framer Motion, and Tailwind/Headless for the stack, instead of Three/three-fiber, React-spring, and Chakra. Psych!
 - TODO: unit testing for resolvers

# 2023-04-17

 - Graphql *almost* working. Both client-side pulls and server-side pulls run into CORS problems. I need to figure out how to set the CORS headers (on the request? on the response? both?) This will mean refreshing myself about CORS.

