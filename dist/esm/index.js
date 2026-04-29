import { registerPlugin } from '@capacitor/core';

const TrackingTransparency = registerPlugin('TrackingTransparency', {
  web: () => ({
    requestPermission: async () => ({ status: 'authorized' }),
    openTrackingSettings: async () => ({ opened: false }),
  }),
});

export { TrackingTransparency };
