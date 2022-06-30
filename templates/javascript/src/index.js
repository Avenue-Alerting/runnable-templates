import "fastestsmallesttextencoderdecoder-encodeinto/EncoderDecoderTogether.min.js";
import { processRow } from "./lib";

import { setup, runnable } from "@suborbital/runnable";

const decoder = new TextDecoder();

export function run_e(payload, ident) {
  // Imports will be injected by the runtime
  setup(this.imports, ident);

  const input = decoder.decode(payload);
  const parsedInput = JSON.parse(input);

  // TODO: Fail if parsedInput is not a list
  const result = parsedInput.map((row) => processRow(row)).filter((row) => row !== null && row !== undefined);

  // Return stringified results
  const stringifiedResult = JSON.stringify(result);
  runnable.returnResult(stringifiedResult);
}
