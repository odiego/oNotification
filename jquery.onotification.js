/**
 * Copyright (C) 2006 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * oNotification - jQuery oNotification Plugin v1.0.0
 * See (https://github.com/odiego/oNotification)
 * 
 * @author - Diego de Souza Nunes
 * @email - odiego@terra.com.br
 * 
 * See the Github ONotification project (https://github.com/odiego/oNotification) for full details.
 * This plugin is just a notification widget to use with twitter boilerplate.
 * @memberOf jQuery.fn
 */
(function($){
	// To call the function, just use:
	// $.oNotification(options);
	$.extend({
		oNotification: function (options) {

			var body = $('body');
			var notificationObj = $('#ajax-notification');
			
			var defaults = { 
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
			};
			
			/* merge defaults and options, without modifying defaults */
			var settings = $.extend({}, defaults, options);
			
			if(!notificationObj || notificationObj.length <= 0){
				createNotificationContainer(settings);
			}
						
			function showNotification(settings){
				setNotificationMessage(settings.notificationMessage);
				setNotificationIcon(settings.notificationIconClass);
				setNotificationType(settings, animateNotification);
				return false;
			};
				
			function createNotificationContainer(settings){
				var notificationHtml = '';
				notificationHtml += '<div id="ajax-notification"';
					notificationHtml += 'style="position: fixed; z-index: 9999;';
						notificationHtml += settings.position + ':' + settings.positionStart + 'px;';
						notificationHtml += 'height: ' + settings.notificationContainerHeight + 'px;';
						notificationHtml += 'line-height: ' + settings.notificationMessageLineHeight + 'px;';
						notificationHtml += 'font-size: ' + settings.notificationMessageFontSize + 'px;';
						notificationHtml += 'margin-bottom: 0;';
						notificationHtml += 'width: 100%;';
						notificationHtml += 'display: none;';
					notificationHtml +='">';
					notificationHtml += '<i id="ajax-icon"></i>';
					notificationHtml += '<span id="ajax-message" style="margin-left: 20px"></span>';
				notificationHtml += '</div>';
				body.append(notificationHtml);
			};
			
			function setNotificationMessage(messageText){
				$('#ajax-message').text(messageText);				
			};
			
			function setNotificationIcon(iconCssClass){
				var notificationIconObj = $('#ajax-icon');
				notificationIconObj.removeClass();				
				notificationIconObj.addClass(iconCssClass);				
			};
			
			function setNotificationType(settings, callback){
				var notificationTypeClass = 'alert alert-' + settings.notificationType;
				var notificationObj = $('#ajax-notification');				
				notificationObj.removeClass();
				notificationObj.addClass(notificationTypeClass);
				
				if (callback)
					callback(settings);
				
			};
			
			function animateNotification(settings){
				//Now we really show the notification
				var notificationObj = $('#ajax-notification');
				if(settings.position == 'top'){
					notificationObj.slideDown('slow', function() {
						if (settings.autoClose == true){
							window.setTimeout(function(){
								notificationObj.slideUp();
							}, settings.timeShow);
						}
					});					
				}else{
					//TODO: animate when is bottom
				}
			};
			
			//Call to show the notification
			showNotification(settings);
		}
	});
	
})(jQuery);