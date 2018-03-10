## Cleanup for Linux/Unix

> This is a fork of [cleanup](https://github.com/MiniGunnR/cleanup) by [MiniGunnR](https://github.com/MiniGunnR/), I just added a Node script that does the same thing, and added a section in the bottom of this README

### Python version
- Purpose:
  I created this script to clean up my Desktop or Downloads folder after it got cluttered with lots of files. This script groups files of same extensions in folders of the extension name and finally puts all those folders inside a folder called **cleanup**

  For example: All the .docx files go inside a *docx* folder, all the .jpg files go inside a *jpg* folder, etc. Files without an extension go into the *others* folder. All these folders with extension names go inside the *cleanup* folder.

- Usage:
  - copy and paste the *cleanup.py* file onto the folder (e.g. Desktop, Downloads) where you want to organize the files.
  - go into the folder with your terminal
  - run the cleanup python script with the following command:
    - python cleanup.py

- **Note:** Please edit the code accordingly if the script doesn't work. Also try both Python2 and Python3 to run the script if it doesn't work. There was one instance on a Windows machine where I needed to change a little bit for it to work.

### Javascript version
It does the same thing, but uses Node (requires v8.5.0 or newer) instead of Python.

#### Usage
- Copy and paste the `cleanup.js` file onto the folder you want to organize
- Navigate to the folder you want to organize, on your terminal
- Run the script using `node cleanup.js`