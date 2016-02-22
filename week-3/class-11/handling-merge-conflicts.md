# Handling Merge Conflicts
### Issue
* Some one on your project has merged a **_Pull Request_** into `master`
* You push your code to your `branch_name` and open a **_Pull Request_**
* _GitHub_ informs you your code can not automaticly merge into `master`

### Step by Step Solution
1. Navigate to your project in your shell (*the command line*).
  * `$ cd /path/to/your/project`
2. Make sure you have notthing to commit. If you have un commited changes, commit them.
 * `$ git status`  
  _nothing to commit, working directory clean_
3. Switch to `master` branch.
 * `$ git checkout master`  
  _Switched to branch 'master'_
4. Sync local `local/master` with `origin/master`.
  * `$ git pull origin master`  
5. Switch to your `branch name`.
  * `$ git checkout <branch_name>`  
    *Switched to branch 'branch_name'*
6. Merge `master` into your `branch_name`.
  * `$ git merge master`  
   *git will tell you what files have failed to automaticly merge* 
7. Open the files with conflicts in your _text editor_.
8. In each file with conflict delete the code that is unwanted.
  * Delete the lines that say `<<< HEAD`, `====`, or `>>> master`
  * Delete lines from `master` or your `branch_name` that are unwatned.
  ```javascript
 <<<<<<<<<<< HEAD 
   this is were the conflicting code from your branch is
 ===========
   this is were the conflicting code from the master branch is
 >>>>>>>>>>> master 
``` 
9. **_RUN YOUR CODE_**.
 * **This is possibly the most important step!**
 * **Just becuse you "handled" your merge conflict does not mean your haven't broken your app.**
10. Add your changes and commit.
  * `$ git add .`
  * `$ git commit -m  "handled merge conflict from master"`
11. Push to your `branch_name` on origin.
  * `$ git push origin <branch_name>`
12. **Your _Pull Request_ should be able to merge!**
 
