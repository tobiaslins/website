import { Effect, Schedule, Console } from "effect"
import { effect } from "./fake"

const policy = Schedule.addDelay(
  Schedule.recurs(2), // Retry for a maximum of 2 times
  () => "100 millis" // Add a delay of 100 milliseconds between retries
)

// Create a new effect that retries the effect with the specified policy,
// and provides a fallback effect if all retries fail
const repeated = Effect.retryOrElse(effect, policy, () =>
  Console.log("orElse").pipe(Effect.as("default value"))
)

Effect.runPromise(repeated).then(console.log)
/*
Output:
failure
failure
failure
orElse
default value
*/
