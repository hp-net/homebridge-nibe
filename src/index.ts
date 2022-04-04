import { API } from 'homebridge';

import { PLATFORM_NAME, Platform } from './Platform';

/**
 * This method registers the platform with Homebridge
 */
export default (api: API) => {
    api.registerPlatform(PLATFORM_NAME, Platform);
};