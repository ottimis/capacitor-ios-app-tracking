# @ottimis/capacitor-ios-app-tracking

App Tracking Transparency (ATT) plugin for Capacitor 7. iOS only — requests ATT permission and opens the app's Settings page.

## Install

```bash
npm install @ottimis/capacitor-ios-app-tracking
npx cap sync
```

## iOS Setup

Add `NSUserTrackingUsageDescription` to your `Info.plist`:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>We use tracking to improve your experience.</string>
```

## API

### `requestPermission()`

Requests ATT authorization. Shows the system dialog on first call; subsequent calls return the stored status.

```typescript
import { CapacitorIosAppTracking } from '@ottimis/capacitor-ios-app-tracking';

const { status } = await CapacitorIosAppTracking.requestPermission();
// status: 'authorized' | 'denied' | 'restricted' | 'notDetermined'
```

### `openTrackingSettings()`

Opens the app's entry in iOS Settings (Privacy & Security → Tracking). Useful to let the user change a previously denied permission.

```typescript
await CapacitorIosAppTracking.openTrackingSettings();
```

## Web / Android

Both methods return a stub response — ATT is iOS-only. Handle consent on Android via your own UI.

| Method | Web / Android response |
|---|---|
| `requestPermission()` | `{ status: 'authorized' }` |
| `openTrackingSettings()` | `{ opened: false }` |