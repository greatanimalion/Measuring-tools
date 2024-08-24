chrome.runtime.onMessage.addListener( (message) => {
    if (message.action === 'fromPopup') {
      chrome.notifications.create(
        {
          type: "basic",
          title: "Notifications Title",
          message: "Notifications message to display",
          iconUrl: "../icons/icon.png"
        },
        (notificationId) => {
          console.log('notificationId-->', notificationId)
        }
      );
    }
    return undefined
  });