
This DecSoft HTML Compiler sample HTML app shows how we can react when
the user trying to close the app, and then decide what to do. In this
sample we ask the user if he really want to close the app, and close it
if the user confirm it.

Note that the dhc.events.onCloseQuery() are never fired at designtime,
that is, you must compile the sample app and run it alone in order to 
see it working.
