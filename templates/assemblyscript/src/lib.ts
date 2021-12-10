import { logInfo, httpPost } from "@suborbital/suborbital";
import { JSON } from "json-as";

@json
export class AvenueInput {
  title: string;
  messageBody: string;
}

@json
class WebhookPayload {
  title: string;
  payloadMessage: string;
}

const URL = "http://httpbin.org/post";

export function run(input: AvenueInput): ArrayBuffer {
  const payload: WebhookPayload = {
    title: input.title,
    payloadMessage: input.messageBody,
  };

  const strPayload = JSON.stringify(payload);
  const arrPayload = String.UTF8.encode(strPayload);

  return httpPost(URL, arrPayload, null);
}
