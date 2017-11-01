# Contributing to USACS

Thank you so much!

## How to contribute

1. Fork this repo. [Here's what this means.](https://help.github.com/articles/fork-a-repo/)
1. Do the things.
    2. EDIT THE FILES IN VIEWS DON'T DIRECTLY EDIT THE HTML!!! ITS MUCH EASIER!!! (read BUILDING.md)
    2. Over the course of this, you will have to commit and push.
       At least once for the pull request.
1. Test the things. Run `python3 scripts.py build` to compile the site. (read BUILDING.md a second time)
   Then you can open the files in chrome since everything is static.
   Make sure the expected things are done. Make sure the rest of the page works.
1. Open a pull request. [And here's what that means.](https://help.github.com/articles/about-pull-requests/) Don't forget to compare your fork and USACS, so
   head is the USACS repo and base is your branch. It's called a PR.
1. Wait for me to merge it. I'll request changes if needed.

### Why?

This is how many open-source communities work. So this will give you practice.

**But why do they do this?**

Open source communities do this to allow a measure of control over the code theyhave.
By forcing the PR process, somebody who knows what's going on can test the code
and approve of the style and intent.

## Help and Resources

- Me! (@hemangandhi) The rest of USACS!
- [The GitHub flow.](https://guides.github.com/introduction/flow/)
- [What commiting etc. means.](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
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
