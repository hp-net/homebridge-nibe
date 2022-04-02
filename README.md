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

## Using this plugin

1. You need a Nibe heat pump - bye one if you don't have ;-)
2. You need an account at Nibe Uplink: https://www.nibeuplink.com/
3. After logging in you have an URL in this form: `https://www.nibeuplink.com/System/XXXXX/Status/Overview`
4. Instead of XXXXX there is a number. This is your System ID. We need this ID.
5. Go to Nibe Uplink Api: https://api.nibeuplink.com/Account/LogIn and log in
6. Click "MY APPLICATIONS" and then "Create application"
7. Fill in: Name and Description can be everything e.g. Homebridge
8. The Callback URL is important. You can use https://hp-net.github.io/homebridge-nibe/nibe.html
9. Accept the NIBE Uplink API Services Agreement and click "Create application"
10. Then you get an Identifier and a Secret - we need them
11. Using data from previous steps generate link like: `https://api.nibeuplink.com/oauth/authorize?response_type=code&client_id=CLIENT_ID&scope=READSYSTEM WRITESYSTEM&redirect_uri=REDIRECT_URL&state=123`
15. Paste link in the browser and follow the instructions. At the end you get your auth code - we need it
12. Install this plugin in homebridge
17. Fill in parameters gathered in previous steps.
18. Choose your language.
19. Click Save and Close

If you (later) get a "400 bad request" error in the log, you must get a new Auth Code - so do numbers 13 until 15 and 18.

## Manage/Write Support

It seems you can only change the parameters listet on the following web page:

https://api.nibeuplink.com/docs/v1/Parameters (Settings section)

The parameter "hot_water_boost" is parameter ID 48132.

You can read other values but I think you can't write other values. Other values are here listed:

https://github.com/sebilm/ioBroker.nibeuplink/blob/master/nibe-fetcher.js#L41

## Changelog

### 0.0.1 - 2022-04-01

- Initial release

## License

MIT License

Copyright (c) 2022 Hubert Pruszynski <hubert.pruszynski@gmail.com>

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
