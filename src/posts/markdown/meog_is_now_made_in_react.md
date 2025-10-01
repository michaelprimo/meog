## Meog is now made in React: here's why

Howdy! Welcome to this post!

Lately, Meog has been evolving "behind the scenes." The technologies adopted for this site's realization have changed.

We've seen how a page can be built (here: https://meog.it/how_a_webpage_is_made) and how to give it a visual style (here: https://meog.it/heres_how_we_can_style_a_website),
but this isn't enough to build a modern and efficient website.

Creating an HTML file for every single post meant that all this time:

1.  A new page was loaded with every click on the site's links.
2.  Each article was built as if it were a website within a website.
3.  Every time a change needed to be made to the site, it had to be done for every existing page.

In the long run, this system wasn't sustainable. So, Meog has now introduced **JavaScript**, a programming language that allows us to add **logic** to our pages. An example? The "Back to Home" link now only appears if the user is not on the homepage. With the old system, I would have had to manually modify the homepage by removing the link to itself.

**React** (https://react.dev/) allows Meog to make a quality leap, enabling, for example, the creation of articles using separate text files and the site's division into **components** (like connecting Legos to form the whole thing). Furthermore, when a user lands on meog.it, the entire site is downloaded only once, improving their experience and officially making Meog a **"Single Page Application" (SPA)**.

In the next posts, I'll talk in more detail about all the changes that have been made. In the meantime, I wish you a great day!
See you in the next post!