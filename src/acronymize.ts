import { append, id, initial, isValidWord, repeat, toUpperCase, unWords, words} from "./utillity_function";
import { compose, map, filter } from "ramda";

var toCharAcrom = (separator = "", pluralize = true, capitalize = false) =>
    compose(
        append(separator),
        (pluralize) ? repeat(2) : repeat(1),
        (capitalize) ? toUpperCase : id,
        initial,
    );

var acronymize = (phrase: string, separator = "", pluralize = false, capitalize = true): string =>
    compose(
        unWords,
        map(toCharAcrom(separator, pluralize, capitalize)),
        filter(isValidWord),
        //@ts-ignore
        words
    )(phrase);

export default acronymize;

/*
* No funcionan porque no están currificadas:
* import map from "./map"; 
* import filter from "./filter";
*
* Por defecto la función tendrá esos parámetros, si le pasas otros valores cambian su valor.
* (phrase: string, separator = "", pluralize = false, capitalize = true)
*/