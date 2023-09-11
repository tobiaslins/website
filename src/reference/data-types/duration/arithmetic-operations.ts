import { Duration } from "effect"

const duration1 = Duration.seconds(30)
const duration2 = Duration.minutes(1)

console.log(String(Duration.sum(duration1, duration2)))
/*
Output:
{
  "_id": "Duration",
  "_tag": "Millis",
  "millis": 90000
}
*/

console.log(String(Duration.times(duration1, 2))) // Output: Duration("60000 millis")
/*
Output:
{
  "_id": "Duration",
  "_tag": "Millis",
  "millis": 60000
}
*/
