import { logInfo, httpPost } from "@suborbital/suborbital";
import type { AvenueInput } from "./custom";

@json
class WebhookPayload {
  title: string;
  payloadMessage: string;
}

const URL = "http://httpbin.org/post";

export function run(input: AvenueInput): void {
  const payload: WebhookPayload = {
    title: input.title,
    payloadMessage: input.messageBody,
  };

  const strPayload = JSON.stringify(payload);
  const arrPayload = String.UTF8.encode(strPayload);

  httpPost(URL, arrPayload, null);
}
