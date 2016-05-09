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

    // The context information for each action will be different. For the SelectionChanged action,
    // we are passed three interesting values: which document the selection has changed in,
    // what the old selection was, what the new selection is (or will be).

    // For our purposes, we can ignore the old selection, but we need the other two values.

    document = action.document;
    selection = action.newSelection;

    // Now for the meat of the plugin. What we want it to do is to show a small message at the bottom
    // of the canvas, showing how many items the user has selected. If there are no items, the message
    // area should be hidden.

    // So first let's get the selection count.
    count = selection.count();
    if (count == 0) {

        // Nothing is selected, so hide any previous message.
        document.hideMessage();

    } else {

        // One or more items are selected. We check for a single item so that we
        // can get the wording correct.

        if (count == 1) {
            message = "1 layer selected."
        } else {
            message = count + " layers selected."
        }

        // This is intended to be a simple example, so we're going to make use of an existing
        // facility that is really intended for flashing up temporary messages for the user.
        //
        // (arguably there would be better ways of displaying the information, but that would result
        //  in a much more complicated example -- so let's worry about one thing at a time!)

        document.showMessage(message);
    }

};
