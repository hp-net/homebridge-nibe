# homebridge-nibe

![](./docs/nibe-logo-small.png)

[![NPM version](https://img.shields.io/npm/v/homebridge-nibe.svg)](https://www.npmjs.com/package/homebridge-nibe)
[![Downloads](https://img.shields.io/npm/dm/homebridge-nibe.svg)](https://www.npmjs.com/package/homebridge-nibe)
[![Build status](https://github.com/hp-net/homebridge-nibe/actions/workflows/publish-to-npm.yml/badge.svg)](https://github.com/hp-net/homebridge-nibe/actions/workflows/publish-to-npm.yml)

[![NPM](https://nodei.co/npm/homebridge-nibe.png?downloads=true)](https://nodei.co/npm/homebridge-nibe/)

## Nibeuplink plugin for homebridge

This homebridge plugin retrieves data from a Nibe heat pump from Nibe Uplink.

### Plugin configuration

Whole setup instruction is available on plugin configuration page in homebridge. There is step by step description how to get required parameters.

### Supported accessories

| Accessory | Description | Nibe parameter id | From version |
| --- | --- | --- | --- |
| Outdoor temperature | BT1 outdoor temperature | 40004 | 0.0.3 |

More information about Nibe API parameters can be found here: 
https://api.nibeuplink.com/docs/v1/Parameters

## Sponsorship & support

*If you are using this project please consider sponsoring it's further development & bug fixes*

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/hpruszyn)

## Changelog

### 0.0.6 - 2022-04-05

- Fix for first configuration after installation when no form was shown.
### 0.0.5 - 2022-04-04

- Initial release, with configuration via ui and outdoor temperature accessory.
