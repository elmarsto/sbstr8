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
   
