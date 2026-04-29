import Foundation
import Capacitor
import AppTrackingTransparency

@objc(TrackingTransparencyPlugin)
public class TrackingTransparencyPlugin: CAPPlugin, CAPBridgedPlugin {

    public let identifier = "TrackingTransparencyPlugin"
    public let jsName = "TrackingTransparency"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "requestPermission", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "openTrackingSettings", returnType: CAPPluginReturnPromise)
    ]

    @objc func openTrackingSettings(_ call: CAPPluginCall) {
        if let url = URL(string: UIApplication.openSettingsURLString) {
            DispatchQueue.main.async {
                UIApplication.shared.open(url, options: [:]) { success in
                    call.resolve(["opened": success])
                }
            }
        } else {
            call.resolve(["opened": false])
        }
    }

    @objc func requestPermission(_ call: CAPPluginCall) {
        if #available(iOS 14, *) {
            ATTrackingManager.requestTrackingAuthorization { status in
                let statusString: String
                switch status {
                case .authorized:
                    statusString = "authorized"
                case .denied:
                    statusString = "denied"
                case .restricted:
                    statusString = "restricted"
                case .notDetermined:
                    statusString = "notDetermined"
                @unknown default:
                    statusString = "denied"
                }
                call.resolve(["status": statusString])
            }
        } else {
            // iOS < 14: tracking always allowed
            call.resolve(["status": "authorized"])
        }
    }
}
