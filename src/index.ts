import { registerPlugin } from '@capacitor/core';

export type ATTStatus = 'authorized' | 'denied' | 'restricted' | 'notDetermined';

export interface IosAppTrackingPlugin {
  requestPermission(): Promise<{ status: ATTStatus }>;
  openTrackingSettings(): Promise<{ opened: boolean }>;
}

const IosAppTracking = registerPlugin<IosAppTrackingPlugin>('IosAppTracking', {
  web: () => ({
    requestPermission: async () => ({ status: 'authorized' as ATTStatus }),
    openTrackingSettings: async () => ({ opened: false }),
  }),
});

export { IosAppTracking };
