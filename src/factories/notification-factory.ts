import { MailTransport } from "../mail";
import { NotificationTransport } from "../types/notification-types";
//SOME CHANGE
const transports: NotificationTransport[] = [];

export const createNotificationTransport = (
  type: "mail" | "sms",
): NotificationTransport => {
  switch (type) {
    case "mail": {
      const requiredTransportCache = transports.find(
        (transport) => transport instanceof MailTransport,
      );
      if (requiredTransportCache) return requiredTransportCache;
      const instance = new MailTransport();
      transports.push(instance);
      return instance;
    }

    case "sms":
      throw new Error("sms notification not supported .");
    default:
      throw new Error(`${type}Notification provider not supported`);
  }
};
