module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
    // 其他 presets
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
