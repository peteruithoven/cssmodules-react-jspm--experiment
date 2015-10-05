bundle-deps:
	jspm bundle 'src/**/* - [src/**/*] - [src/**/*.css!] - [src/**/*.css!npm:jspm-loader-css-modules@1.0.1-beta1]' bundle.js --inject
