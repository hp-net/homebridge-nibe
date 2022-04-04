# homebridge-nibe

[![NPM version](https://img.shields.io/npm/v/homebridge-nibe.svg)](https://www.npmjs.com/package/homebridge-nibe)
[![Downloads](https://img.shields.io/npm/dm/homebridge-nibe.svg)](https://www.npmjs.com/package/homebridge-nibe)
[![Build status](https://github.com/hp-net/homebridge-nibe/actions/workflows/publish-to-npm.yml/badge.svg)](https://github.com/hp-net/homebridge-nibe/actions/workflows/publish-to-npm.yml)


[![NPM](https://nodei.co/npm/homebridge-nibe.png?downloads=true)](https://nodei.co/npm/homebridge-nibe/)

## Nibeuplink plugin for homebridge

This homebridge plugin data from a Nibe heat pump from Nibe Uplink.

## Sponsorship & support

*If you are using this project please consider sponsoring it's further development & bug fixes*

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/hpruszyn)

## Supported accessories

| Accessory | Description | Nibe parameter id | From version |
| --- | --- | --- | --- |
| Outdoor temperature | BT1 outdoor temperature | 40004 | 0.0.3 |

More information about Nibe API parameters can be found here: 
https://api.nibeuplink.com/docs/v1/Parameters

## Changelog

### 0.0.4 - 2022-04-04

- Initial release, with configuration via ui and outdoor temperature accessory.

## License

MIT License

Copyright (c) 2022 Hubert Pruszyński <hubert.pruszynski@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
