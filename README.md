<p align="center">
  <a href="https://github.com/homebridge/homebridge"><img src="https://raw.githubusercontent.com/homebridge/branding/master/logos/homebridge-color-round-stylized.png" height="140"></a>
</p>

<div align="center">

# homebridge-nibe

![](./docs/nibe-logo-small.png)

[![NPM version](https://img.shields.io/npm/v/homebridge-nibe.svg)](https://www.npmjs.com/package/homebridge-nibe)
![Release](https://img.shields.io/github/release/hp-net/homebridge-nibe.svg?logo=github)
[![GitHub license](https://img.shields.io/github/license/hp-net/homebridge-nibe)](https://github.com/hp-net/homebridge-nibe/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/homebridge-nibe.svg)](https://www.npmjs.com/package/homebridge-nibe)



[![Build status](https://github.com/hp-net/homebridge-nibe/actions/workflows/publish-to-npm.yml/badge.svg)](https://github.com/hp-net/homebridge-nibe/actions/workflows/publish-to-npm.yml)

[![NPM](https://nodei.co/npm/homebridge-nibe.png?downloads=true)](https://nodei.co/npm/homebridge-nibe/)
</div>

## Nibeuplink plugin for homebridge

This homebridge plugin retrieves data from a Nibe heat pump from Nibe Uplink.

### Plugin configuration

Whole setup instruction is available on plugin configuration page in homebridge. There is step by step description how to get required parameters.

### Supported devices and accessories

**Devices**
* F1145-10 PC

*If your device is not on the list please install the plugin, configure it and you will see error log in homebridge with details how to create "add new device" issue*

<table>
    <thead>
        <tr>
            <th>Accessory</th>
            <th>Description</th>
            <th>Device</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>outdoor-temperature</td>
            <td>BT1 outdoor temperature</td>
            <td>
                <ul>
                    <li>F1145-10 PC - v0.0.7</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>hot-water</td>
            <td>Hot water temperature with temporary lux on activation</td>
            <td>
                <ul>
                    <li>F1145-10 PC - v0.0.8</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Roadmap

* Add ERS (recuperation) support
* New device: F2120-12, F750 CU 3x400V, VVM 320 E
* Heating/cooling accessory (floor)
* Check if write parameters is enabled

## Sponsorship & support

*If you are using this project please consider sponsoring it's further development & bug fixes*

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/hpruszyn)
