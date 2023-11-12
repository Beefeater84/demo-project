import {RuleSetRule} from "webpack";

export default function buildRules(): RuleSetRule[] {

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }


    // The order of loaders is important. This structure will help us to see the order of loaders.
    return [
        typeScriptLoader,
    ]
}