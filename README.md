# Copy Once Paste Anywhere - Webapp Repo

## Introduction

We have built a solution for synchronizing the clipboard content (any copied text, or URL) across all the devices a user has logged in. There are two types of applications for users - Android app and [Web app](https://clipboard-sync-angular-app.appspot.com/). The user has to simply login to these devices in order to use our system. Whenever a user copies some text in any of their logged-in devices, it is copied on all of their other devices, ready to be pasted. This makes it much more convenient for users to transfer content from one device to another.

This is the GitHub repository for the webapp of the Clipboard Synchronization project, developed using Angular. If you want to take a quick look at this app, it is already deployed [here](https://clipboard-sync-angular-app.appspot.com/). It requires users to enter the credentials to login!

For a full list of features and architecture description, please refer to this [README.md](https://github.com/OOAD-Semester-Project/android-app/blob/master/README.md) document.

Prerequisites
----
1. [Angular](https://cli.angular.io/)
2. npm

Installation
----
Execute the below command in the project root directory to install all the required dependencies
```
npm install
```


How to run
-----
Execute the following command in the project root directory to run the angular app.
```
ng serve
```
The angular server will be running on the port `4200`.
