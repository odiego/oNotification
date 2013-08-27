oNotification
=============

A notification message to use with twitter bootstrap css class.

----------------------------------------------------------------

How to use:

To call the function, just use:
$.oNotification(options);

options = {
          notificationMessage: "Default Message",// Message to be show
					notificationIconClass: "icon-ok-sign", // Check the full list here: http://twitter.github.io/bootstrap/base-css.html#images
					notificationType: "success", 		   // (success, error, info, block) - Message type;
					timeShow: 5000,						   // How long the message will be visible in milliseconds.
					position: 'top',					   // (top, bottom) - position where the notification will be
					positionStart: 0,					   // if need to use a different value
					notificationContainerHeight: 30,	   // Notification container height
					notificationMessageFontSize: 17,       // Defines the font-size
					notificationMessageLineHeight: 33,     // Define the line-height
					clickToClose: false,                   // (true, false) - it shows an button to close the notification.
					autoClose: true,					   // (true, false) - it autoClose the notification after timeShow param.
}
