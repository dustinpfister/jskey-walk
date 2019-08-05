## 1.0.x - jskey-crypt
  * Added Built in forFile methods that can make use of jskey-crypt if available
  * Can create an encrypted folder from an unencrypted one and the reverse as well via new crypt command
  
## 0.2.x - Alpha III - Option Object access and path control
  * A forFile method now has access to the options object
  * path relative option for walk command and for file scripts that can be used to set where a dir option should be relative from. 
  * path relative option is current working dir if no dir property is given
  * path relative option is for file script relative if dir prop is given
  * path relative option should always be an absolute path.
  
## 0.1.16 - Alpha II - Plain Object format for forFile script
  * (done) fixed a bug when steping file index
  * (done) a forFile script can just be a plan old object
  * (done) dir property of a forFile Object can be used in place of the t option when using the walk command
  * (done) The forFile Object can have a forFile method of course
  * (done) The forFile Object can have an onDone method
  * (done) The forFile Object can have a beforeWalk method that will fire before walking begins

## 0.0.15 - Alpha I - first release

  * (done) Can be installed globaly
  * (done) Can crawl a path for files
  * (done) Can load and use an external script that exports a custom forFile method that will be called for each file 
