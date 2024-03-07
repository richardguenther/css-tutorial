export default async function (eleventyConfig) {
	// passthrough behavior
	eleventyConfig.setServerPassthroughCopyBehavior("copy");

	// Copy `11ty_css/` to `_site/css`
	eleventyConfig.addPassthroughCopy({ "11ty_css": "/css" });
	// Copy `11ty_js/` to `_site/js`
	eleventyConfig.addPassthroughCopy({ "11ty_js": "/js" });

	eleventyConfig.setServerOptions({
		domDiff: true,
		port: 4321,
		// e.g. `watch: ["_site/**/*.css"]`
		watch: [],
	});

	return {
		dir: {
			input: "11ty_content",
			output: "_site",
			// ⚠️ These values are both relative to your input directory.
			includes: "../11ty_includes",
			layouts: "../11ty_layouts",
		},
	};
}
