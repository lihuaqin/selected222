var onAction = function(context) {
  log("I got told about an event: " + context['action'])
  log("Context: " + context['actionContext']);
};

var onExport = function(context) {
  log("I got told about an export: " + context['action'])
  log("Context: " + context['actionContext']);
};

var onSelectionChanged = function(context) {
  log("Selection changed to: " + context['actionContext']['newSelection']);
};
