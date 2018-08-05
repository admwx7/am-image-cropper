[![Build Status](https://travis-ci.org/admwx7/am-image-cropper.svg?branch=master)](https://travis-ci.org/admwx7/am-image-cropper)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/admwx7/am-image-cropper)
[![GitHub license](https://img.shields.io/badge/license-Apache2.0-blue.svg)](https://raw.githubusercontent.com/admwx7/am-image-cropper/master/LICENSE)

# &lt;am-image-cropper&gt;

A canvas based Polymer element for generated a new cropped image from a source image

## Browsers Support

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome for Android |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Edge| last 3 versions| last 3 versions| last 3 versions| last 3 versions| last 3 versions| last version

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com)

## Installation

  Build Tools: `npm i -g polymer-cli`

  Dependencies: `polymer install --variants`

  Linting: `npm i && npm run lint`

  Testing: `npm run test`

## Usage

  <!--
  ```
  <custom-element-demo>
    <template>
      <script src="../webcomponentsjs/webcomponents-lite.js"></script>
      <link rel="import" href="am-image-cropper.html">
      <style>
        #container {
          display: inline-block;
          position: relative;
          border: 1px solid #E0374C;
          user-select: none;
          margin-left: auto;
          margin-right: auto;
        }
        #image {
          display: block;
        }
      </style>
      <dom-bind>
        <template>
          <next-code-block></next-code-block>
        </template>
      </dom-bind>
    </template>
  </custom-element-demo>
  ```
  -->
  <!-- Add an example inside of this block -->
  ```html
  <div id="container">
    <img id="image"
      src="https://picsum.photos/200/300"
      draggable="false"
    />
    <am-image-cropper id="cropper"
    ></am-image-cropper>
  </div>
  ```

## Contributing

  1. Fork it!
  2. Create your feature branch: `git checkout -b my-new-feature`
  3. Commit your changes: `git commit -am 'Add some feature'`
  4. Push to the branch: `git push origin my-new-feature`
  5. Submit a pull request :D
