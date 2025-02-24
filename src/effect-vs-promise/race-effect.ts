import { Effect } from "effect"

const task1 = Effect.gen(function* (_) {
  console.log("Executing task1...")
  yield* _(Effect.sleep("100 millis"))
  console.log("task1 done")
  return yield* _(Effect.fail("Something went wrong!"))
})

const task2 = Effect.gen(function* (_) {
  console.log("Executing task2...")
  yield* _(Effect.sleep("200 millis"))
  console.log("task2 done")
  return yield* _(Effect.fail("Uh oh!"))
})

const task3 = Effect.gen(function* (_) {
  console.log("Executing task3...")
  yield* _(Effect.sleep("300 millis"))
  console.log("task3 done")
  return 3
})

export const program = Effect.raceAll([task1, task2, task3].map(Effect.either)) // or Effect.exit

Effect.runPromise(program).then(console.log, console.error)
/*
Output:
Executing task1...
Executing task2...
Executing task3...
task1 done
{
  _id: "Either",
  _tag: "Left",
  left: "Something went wrong!"
}
*/
