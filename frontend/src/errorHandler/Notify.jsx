import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

export const pushNotify = (status, title, textMsg) => {
  let notifyType;

  // Handle status code and map it to notification types
  switch (status) {
    case 200:
    case 201:
      notifyType = "success"; // 2xx codes - success
      break;
    case 400:
    case 404:
      notifyType = "error"; // 4xx codes - client errors
      break;
    case 500:
      notifyType = "error"; // 5xx codes - server errors
      break;
    default:
      notifyType = "warning"; // Any other status - warning
      break;
  }

  // Only trigger notification if title or textMsg is provided
  if (title || textMsg) {
    new Notify({
      status: notifyType, // Use the resolved type (success, error, etc.)
      title: title || "Notification", // Default title if not provided
      text: textMsg || "Something happened!", // Default message if not provided
      effect: "fade",
      speed: 300,
      customClass: null,
      customIcon: null,
      showIcon: true,
      showCloseButton: true,
      autoclose: true,
      autotimeout: 3000,
      gap: 20,
      distance: 20,
      type: "outline", // or 'filled', 'outline', etc.
      position: "right top",
    });
  } else {
    console.warn("No title or text provided for notification.");
  }
};
