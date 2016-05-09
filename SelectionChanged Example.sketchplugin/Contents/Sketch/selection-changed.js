// This example plugin illustrates how to listen for the SelectionChanged action, and to
// do something whenever the user changes the selection.
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

var onSelectionChanged = function(context) {
  log("Selection changed to: " + context['actionContext']['newSelection']);
};
