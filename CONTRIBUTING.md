# Contributing to USACS

Thank you so much!

## How to contribute

1. Fork this repo. [Here's what this means.](https://help.github.com/articles/fork-a-repo/)
2. Read and have on hand the Jekyll reference: https://jekyllrb.com/docs/quickstart/
3. Read and have on hand the Shopify liquid templating reference: https://help.shopify.com/en/themes/liquid
4. Please use bootstrap for everything! https://getbootstrap.com/
5. Create a dev config file:
   ```bash
   $ cp _config.yml  _config.dev.yml
   ```
6. Run a local instance of Jekyll with file watch in dev:
    ```bash
    $ bundle exec jekyll serve --watch JEKYLL_ENV=development --config _config.dev.yml
    ```
7. Open http://localhost:4000/ in your browser to view.
8. Pages can be edited by finding their name.html in the pages directory.
9.  Page parts (templates) can be edited by going to _includes or _layouts and editing the HTML.
10. Fork the repo and commit your changes then create a pull request.
11. Test the things. 
   Make sure the expected things are done. Make sure the rest of the page works.
11. Open a pull request. [And here's what that means.](https://help.github.com/articles/about-pull-requests/) Don't forget to compare your fork and USACS, so
   head is the USACS repo and base is your branch. It's called a PR.
12. Wait for use to merge it. We'll request changes if needed.

### Why?

This is how many open-source communities work. So this will give you practice.

**But why do they do this?**

Open source communities do this to allow a measure of control over the code they have.
By forcing the PR process, somebody who knows what's going on can test the code
and approve of the style and intent.

## Help and Resources

- @agoodkind
- @hemangandhi 
- The rest of USACS!
- [The GitHub flow.](https://guides.github.com/introduction/flow/)
- [What committing etc. means.](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
- [This is what pushing means.](https://help.github.com/articles/pushing-to-a-remote/)
- [This is what merging, branching, etc. is about.](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

We'll talk about the relevant details when they come up.

Here are the git commands:
```bash
# fork the repository on GitHub.
git clone <gitHub gives this clone URL>
# make the changes to the files.
git add <the files you changed or ones you added or removed>
git commit -m "A descriptive string describing the changes."
git push
# go to the USACS repository on GitHub and click "new pull request"
# fill up the details and create the pull request
# if you have to fix issues, I'll tell you.
```
