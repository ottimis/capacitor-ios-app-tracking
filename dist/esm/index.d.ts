export type ATTStatus = 'authorized' | 'denied' | 'restricted' | 'notDetermined';

export interface TrackingTransparencyPlugin {
  requestPermission(): Promise<{ status: ATTStatus }>;
  openTrackingSettings(): Promise<{ opened: boolean }>;
}

declare const TrackingTransparency: TrackingTransparencyPlugin;
export { TrackingTransparency };
