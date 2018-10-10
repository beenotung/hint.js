import {Random} from "@beenotung/tslib/random";
import {split_word} from "./split";

export function mess_word(s: string): string {
  const n = s.length;
  const ss = s.split('');
  for (let _i = 0; _i < n; _i++) {
    const a = Random.nextInt(n, 0);
    const b = Random.nextInt(n, 0);
    [ss[a], ss[b]] = [ss[b], ss[a]];
  }
  return ss.join('');
}

export function mess(s: string): string {
  return split_word(s, mess_word).join('');
}
