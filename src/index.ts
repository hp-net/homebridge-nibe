import {API} from 'homebridge';

import {NibePlatform, PLATFORM_NAME} from './platform/NibePlatform';

/**
 * This method registers the platform with Homebridge
 */
export default (api: API) => {
  api.registerPlatform(PLATFORM_NAME, NibePlatform);
};