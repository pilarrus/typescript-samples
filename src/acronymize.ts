import { append, initial, isValidWord, repeat, toUpperCase, unWords, words} from "./utillity_function";
import { compose, map, filter } from "ramda";
/* No funcionan porque no están currificadas
import map from "./map"; 
import filter from "./filter";*/

var toCharAcrom = () =>
    compose(
        append("."),
        repeat(2),
        toUpperCase,
        initial,
    );

var acronymize = (phrase: string): string =>
    compose(
        unWords,
        map(toCharAcrom()),
        filter(isValidWord),
        //@ts-ignore
        words
    )(phrase);

export default acronymize;
/*export default function acronymize(xs: string): string {
    var resultArray;
    resultArray = words(xs);
    resultArray = filter(isValidWord, resultArray)
    resultArray = map(toUpperCase, resultArray);
    resultArray = map(initial, resultArray);
    resultArray = map(repeat(2), resultArray);
    resultArray = map(append("."), resultArray);
    resultArray = unWords(resultArray);
    return resultArray;
};*/

/*import compose from "ramda/es/compose";
import map from "ramda";
import { append, repeat, toUpperCase, capitalize, split } from "./utillity_function";
import filter from './filter';
//, separator?: string, capitalize?: boolean, pluralize?: boolean)

export default function acronimy(xs: string): string[] {
    compose(
        map(append(".")),
        map(repeat(2)),
        map(toUpperCase),
        map(capitalize),
        words(xs)
    )

}*/