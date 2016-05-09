// This example plugin illustrates how to listen for the SelectionChanged action, and to
// do something whenever the user changes the selection.
//
// ## Layout
//
// The first thing to do when making a plugin is to setup the folder structure, which should
// look something like this:
//
// ```
//    MyPlugin.sketchplugin/
//      Contents/
//        Sketch/
//          manifest.json
//          script.js
// ```
//
// ## Manifest
//
// The plugin needs a manifest.json file. This tells Sketch which commands your plugin supplies,
// as well as giving some general information about the plugin such as its name, author, and so on.
//
// For each command, the manifest lists the menu entry we want (if any), and the actions that it
// listens for. In our case, we don't want to add a menu item, but we do want to list for
// one action: `SelectionChanged`.
//
//  ```
// {
//   "name" : "SelectionChanged Example",
//   "description" : "Example plugin which illustrates how to handle the SelectionChanged action.",
//   "version" : "1.0",
//   "identifier" : "com.bohemiancoding.examples.selection-changed",
//   "author" : "Sam Deane",
//   "authorEmail" : "sam@bohemiancoding.com",
//   "commands" : [
//     {
//       "script" : "script.js",
//       "handlers" : {
//         "actions" : {
//            "SelectionChanged.finish" : "onSelectionChanged",
//            }
//           },
//     }
//   ],
//   "menu" : {
//     "items" : [
//     ],
//   },
// }
// ```

// ## Code
//
// In the manifest, we told Sketch that every time the SelectionChanged action finishes, we want it
// to run the onSelectionChanged handler in our selection-changed.js script file.
//
// So we need to define that handler, and put some code in it to do something...

var onSelectionChanged = function(context) {

    // Whenever sketch calls a handler in one of our plugins, it passes in a single context argument.
    // This dictionary is our connection with Sketch itself, and contains all the information that
    // we need to work out which document was open, perform whatever task we want to on it, and so on.
    //
    // When we're being called in response to an action occurring, the context will contain
    // an actionContext property with additional information about the action, so that's the first
    // thing that we want to retrieve:

    action = context.actionContext;
    document = action.document;
    selection = action.newSelection;

    count = selection.count();
    if (count == 0) {
        document.hideMessage();
        message = ""
    } else {
        if (count == 1) {
            message = "1 layer selected."
        } else {
            message = count + " layers selected."
        }
        document.showMessage(message);
    } 

};
