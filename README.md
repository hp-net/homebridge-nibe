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

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/hpruszyn)
</div>

## Nibeuplink plugin for homebridge

This homebridge plugin retrieves data from a Nibe heat pump from Nibe Uplink.

### Plugin configuration

Whole setup instruction is available on plugin configuration page in homebridge. There is step by step description how to get required parameters.

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
            <td>BT1 outdoor temperature (40004 or 44362)</td>
        </tr>
        <tr>
            <td>average-outdoor-temperature</td>
            <td>BT1 average outdoor temperature (40067)</td>
        </tr>
        <tr>
            <td>hot-water</td>
            <td>Hot water temperature (40014)</td>
        </tr>
        <tr>
            <td>hot-water-top</td>
            <td>Top hot water temperature (40013)</td>
        </tr>
        <tr>
            <td>hot-water-temporary-lux</td>
            <td>Hot water temporary lux on/off switch (48132)</td>
        </tr>
        <tr>
            <td>ventilation-exhaust-air</td>
            <td>Ventilation/ERS exhaust air temperature (40025)</td>
        </tr>
        <tr>
            <td>ventilation-extract-air</td>
            <td>Ventilation/ERS extract air temperature (40026)</td>
        </tr>
        <tr>
            <td>ventilation-supply-air</td>
            <td>ERS supply air temperature (40075)</td>
        </tr>
        <tr>
            <td>ventilation-outdoor</td>
            <td>ERS outdoor temperature (40183)</td>
        </tr>
        <tr>
            <td>ers-fan</td>
            <td>ERS fan speed (40311, 40312) with change rotation speed (47260)</td>
        </tr>
        <tr>
            <td>ventilation-fan</td>
            <td>Ventilation fan speed (10001) with change rotation speed (47260)</td>
        </tr>
    </tbody>
</table>

## Roadmap

https://github.com/hp-net/homebridge-nibe/projects/1

## Configuration

Whole configuration can be done via homebridge ui and this is **recommended** way to do it.

However, you can also make all changes directly in homebridge config.json file. Below you can find description of all options.

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
            <td>Api app identifier from Nibe Uplink account. Read instructions from plugin configuration to know how to get it.</td>
        </tr>
        <tr>
            <td>secret</td>
            <td>Yes</td>
            <td></td>
            <td>Api app secret from Nibe Uplink account. Read instructions from plugin configuration to know how to get it.</td>
        </tr>
        <tr>
            <td>authCode</td>
            <td>Yes</td>
            <td></td>
            <td>Authorization code for the app from Nibe Uplink. Read instructions from plugin configuration to know how to get it.</td>
        </tr>
        <tr>
            <td>systemIdentifier</td>
            <td>Yes</td>
            <td></td>
            <td>System identifier for installed Nibe devices.</td>
        </tr>
        <tr>
            <td>callbackUrl</td>
            <td>Yes</td>
            <td>https://hp-net.github.io/homebridge-nibe/nibe.html</td>
            <td>Url that will handle callback with authCode parameter. Default page is safe, it does not have any tracking scrips or additional logic to do weird stuff with the code. What is more authCode is not enough to da anything with api. Default page will only show you the code and give you a nice button to copy it to clipboard.</td>
        </tr>
        <tr>
            <td>language</td>
            <td>No</td>
            <td>en</td>
            <td>Language to call Nibe Uplink Api and to set accessories labels. Possible values: 'en', 'pl'.</td>
        </tr>
        <tr>
            <td>pollingPeriod</td>
            <td>No</td>
            <td>60</td>
            <td>Period (in seconds) for fetching device changes from api.</td>
        </tr>
        <tr>
            <td>disabledAccessories</td>
            <td>No</td>
            <td></td>
            <td>List of accessories to disable. Format 'id(name)' or 'id'.</td>
        </tr>
        <tr>
            <td>showApiResponse</td>
            <td>No</td>
            <td></td>
            <td>If set to `true` response from Nibe Uplink API will be displayed in logs.</td>
        </tr>
    </tbody>
</table>

## Sponsorship & support

*If you are using this project please consider sponsoring it's further development & bug fixes*

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/hpruszyn)
