import { registerPlugin } from '@capacitor/core';

export type ATTStatus = 'authorized' | 'denied' | 'restricted' | 'notDetermined';

export interface TrackingTransparencyPlugin {
  requestPermission(): Promise<{ status: ATTStatus }>;
  openTrackingSettings(): Promise<{ opened: boolean }>;
}

const TrackingTransparency = registerPlugin<TrackingTransparencyPlugin>('TrackingTransparency', {
  web: () => ({
    requestPermission: async () => ({ status: 'authorized' as ATTStatus }),
    openTrackingSettings: async () => ({ opened: false }),
  }),
});

export { TrackingTransparency };
