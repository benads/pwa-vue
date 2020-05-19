module.exports = {
	pwa: {
		name: "Renault 4L",
		themeColor: "#1B7FF3",
		msTileColor: "#000000",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "black",
		manifestOptions: {
			display: "fullscreen",
		},
		iconPaths: {
			favicon32: "img/icons/72x72.png",
			favicon16: "img/icons/72x72.png",
			appleTouchIcon: "img/icons/icon-152x152.png",
			maskIcon: "img/icons/icon-72x72.png",
			msTileImage: "img/icons/144x144.png",
		},
		workboxPluginMode: "InjectManifest",
		workboxOptions: {
			swSrc: "src/service-worker.js",
		},
	},
};
