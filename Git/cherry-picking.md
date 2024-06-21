#### Scenario:

There is a PR in release branch that has a bug.  
The bugfix was recently merged in master branch.

I need to add the commit of the bugfix to the release PR so that the bug will be resolved as the release PR is merged.

#### Solution:

We can add the bugfix commit by doing cherry-picking.  
Here's how to do it:

1. checkout to master branch
2. git pull
3. find the hash of the commit of bugfix then copy it
4. checkout to the production-release branch. `git checkout deploy/20231204-190347
5. cherry-pick the commit of the bugfix. Use the commit-hash that was copied. `git cherry-pick <commit-hash>`
6. if successful, you may push the commit immediately.
7. Otherwise, if conflicts emerge, you have to resolve them. Then `git add .` and `git cherry-pick --continue`
8. Finally, do `git push`. Do not force-push.