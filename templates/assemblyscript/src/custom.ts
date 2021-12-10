import { run } from "./lib";

// EDIT custom_run TO CHANGE HOW DATA IS TRANSFORMED BEFORE PASSING INTO THE USER'S FUNCTION
// EDIT lib.ts TO CHANGE THE TEMPLATE AND FUNCTION SIGNATURE THAT YOUR USERS WILL SEE

@json
export class AvenueInput {
  title: string;
  messageBody: string;
}

export function custom_run(input: ArrayBuffer): ArrayBuffer {
  const strInput = String.UTF8.decode(input);
  const jsonInput = JSON.parse<AvenueInput>(strInput);

  run(jsonInput);

  return String.UTF8.encode("Ok");
}
