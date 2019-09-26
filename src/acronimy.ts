import compose from "ramda/es/compose";
import map from "ramda";
import { append, repeat, toUpperCase, capitalize, split } from "./utillity_function";
//, separator?: string, capitalize?: boolean, pluralize?: boolean)

export default function acronimy(xs: string): string[] {
    compose(
        map(append(".")),
        map(repeat(2)),
        map(toUpperCase),
        map(capitalize),
        split(xs)
    )

}