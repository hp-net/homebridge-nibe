<p align="center">
  <a href="https://github.com/homebridge/homebridge"><img src="https://raw.githubusercontent.com/homebridge/branding/master/logos/homebridge-color-round-stylized.png" height="140"></a>
</p>

<div align="center">

# homebridge-nibe

![](./docs/nibe-myuplink-logo-small.png)

[![NPM version](https://img.shields.io/npm/v/homebridge-nibe.svg)](https://www.npmjs.com/package/homebridge-nibe)
![Release](https://img.shields.io/github/release/hp-net/homebridge-nibe.svg?logo=github)
[![GitHub license](https://img.shields.io/github/license/hp-net/homebridge-nibe)](https://github.com/hp-net/homebridge-nibe/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/homebridge-nibe.svg)](https://www.npmjs.com/package/homebridge-nibe)



[![Build status](https://github.com/hp-net/homebridge-nibe/actions/workflows/publish-to-npm.yml/badge.svg)](https://github.com/hp-net/homebridge-nibe/actions/workflows/publish-to-npm.yml)

[![NPM](https://nodei.co/npm/homebridge-nibe.png?downloads=true)](https://nodei.co/npm/homebridge-nibe/)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/hpruszyn)
</div>

## Nibe myUplink plugin for homebridge

This Homebridge plugin retrieves data from a Nibe heat pump using Nibe myUplink.

**⚠️ Notice:** Version 2 of this plugin supports only myUplink! To access data from Nibe Uplink, please use version 1 of the plugin. The old API is no longer compatible with this plugin.

### Plugin configuration

Complete setup instructions are available on the plugin configuration page in Homebridge, providing a step-by-step guide to obtaining the required parameters.

### Supported accessories

<table>
    <thead>
        <tr>
            <th>Accessory</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>outdoor-temperature</td>
            <td>BT1 outdoor temperature (40004 or 44362).</td>
        </tr>
        <tr>
            <td>average-outdoor-temperature</td>
            <td>BT1 average outdoor temperature (40067).</td>
        </tr>
        <tr>
            <td>hot-water</td>
            <td>Thermostat for hot water (40014, 40008). The switch within the thermostat controls temporary lux (48132), which requires a Nibe premium subscription. Changing temporary lux through the Nibe API takes some time (20-30 seconds), so any switch adjustments won’t be immediately reflected in Nibe.</td>
        </tr>
        <tr>
            <td>hot-water-top</td>
            <td>Top hot water temperature (40013).</td>
        </tr>
        <tr>
            <td>ventilation-exhaust-air</td>
            <td>Ventilation/ERS exhaust air temperature (40025).</td>
        </tr>
        <tr>
            <td>ventilation-extract-air</td>
            <td>Ventilation/ERS extract air temperature (40026).</td>
        </tr>
        <tr>
            <td>ventilation-supply-air</td>
            <td>ERS supply air temperature (40075).</td>
        </tr>
        <tr>
            <td>ventilation-outdoor</td>
            <td>ERS outdoor temperature (40183).</td>
        </tr>
        <tr>
            <td>ers-fan (Soon)</td>
            <td>ERS fan speed (40311, 40312) with change rotation speed (47260) and active state when rotation is grater than 0.</td>
        </tr>
        <tr>
            <td>ventilation-fan (Soon)</td>
            <td>Ventilation fan speed (10001) with change rotation speed (47260) and active state when rotation is grater than 0.</td>
        </tr>
        <tr>
            <td>thermostat (Soon)</td>
            <td>Thermostat (40008,43437) for heating and cooling (if available). Active state is calculated. Changing desired temperature will affect heating/cooling offset (47011/48739).</td>
        </tr>
        <tr>
            <td>new-firmware</td>
            <td>An occupancy sensor that will be triggered when a new firmware version becomes available.</td>
        </tr>
    </tbody>
</table>

## Roadmap

Check the project roadmap at https://github.com/hp-net/homebridge-nibe/projects/1

## Configuration

Configuration can be done via the Homebridge UI, which is the **recommended** method. 

However, you can also make changes directly in the Homebridge config.json file. Below is a description of all options:

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Required</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>platform</td>
            <td>Yes</td>
            <td>Nibe</td>
            <td>'Nibe' is only correct value. If value will be different configuration will not match plugin.</td>
        </tr>
        <tr>
            <td>identifier</td>
            <td>Yes</td>
            <td></td>
            <td>Api client identifier from Nibe myUplink account. Follow plugin configuration instructions to obtain it.</td>
        </tr>
        <tr>
            <td>secret</td>
            <td>Yes</td>
            <td></td>
            <td>Api client secret from Nibe myUplink account. Follow plugin configuration instructions to obtain it.</td>
        </tr>
        <tr>
            <td>language</td>
            <td>No</td>
            <td>en</td>
            <td>Language for accessory labels. Possible values: 'en', 'pl', 'sv'.</td>
        </tr>
        <tr>
            <td>pollingPeriod</td>
            <td>No</td>
            <td>60</td>
            <td>Period (in seconds) for fetching device updates from api.</td>
        </tr>
        <tr>
            <td>disabledAccessories</td>
            <td>No</td>
            <td></td>
            <td>List of accessories to disable. Format 'id'.</td>
        </tr>
        <tr>
            <td>showApiResponse</td>
            <td>No</td>
            <td></td>
            <td>If set to `true` response from Nibe myUplink API will be displayed in logs.</td>
        </tr>
    </tbody>
</table>

## Sponsorship & support

*If you are using this project please consider sponsoring it's further development & bug fixes*

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/hpruszyn)
