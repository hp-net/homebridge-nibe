import {API} from 'homebridge';

import {Platform, PLATFORM_NAME} from './platform/Platform';

/**
 * This method registers the platform with Homebridge
 */
export default (api: API) => {
  api.registerPlatform(PLATFORM_NAME, Platform);
};