#!/usr/bin/env node
import {mess} from "./mess";

let input: string = '';
if (process.argv.length === 3) {
  input = process.argv[2];
  console.log(mess(input));
} else {
  process.stdin.on('data', x => input += x);
  process.stdin.on('end', () => {
    console.log(mess(input));
  })
}
