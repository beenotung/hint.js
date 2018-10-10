import {sample} from "./data";
import {split_word} from "../src/split";

console.log(split_word(sample, w => `>${w}<`));
