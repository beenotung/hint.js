export function isWord(c: string): boolean {
  return ('a' <= c && c <= 'z')
    // || ('A' <= c && c <= 'Z"')
}

export function split_word(s: string, f: (word: string) => string = w => w): string[] {
  let res: string[] = [];
  let n = s.length - 1;
  let acc = '';
  for (let i = 0; i < n; i++) {
    let c = s[i];
    if (isWord(c)) {
      acc += c;
    } else {
      if (acc.length !== 0) {
        res.push(f(acc));
        acc = '';
      }
      res.push(c);
    }
  }
  res.push(acc);
  return res;
}
