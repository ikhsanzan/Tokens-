import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

register(StyleDictionary, { excludeParentKeys: true });

const sd = new StyleDictionary({
	source: ["style.json"],
	preprocessors: ["tokens-studio"], // <-- since 0.16.0 this must be explicit
	platforms: {
		css: {
			transformGroup: "tokens-studio", // <-- apply the tokens-studio transformGroup to apply all transforms
			buildPath: "src/css/",
			files: [
				{
					destination: "variables.css",
					format: "css/variables",
				},
			],
		},
		js: {
			transformGroup: "tokens-studio",
			buildPath: "build/js/",
			files: [
				{
					destination: "tokens.js",
					format: "javascript/es6",
				},
			],
		},
	},
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
