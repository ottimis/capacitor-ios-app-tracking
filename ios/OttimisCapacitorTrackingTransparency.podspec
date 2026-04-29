Pod::Spec.new do |s|
  s.name             = 'OttimisCapacitorTrackingTransparency'
  s.version          = '1.0.0'
  s.summary          = 'App Tracking Transparency plugin for Capacitor 7'
  s.homepage         = 'https://ottimis.com'
  s.license          = 'MIT'
  s.author           = { 'Ottimis' => 'dev@ottimis.com' }
  s.source           = { :path => '.' }
  s.source_files     = 'Plugin/**/*.{swift,h,m,c}'
  s.ios.deployment_target = '15.6'
  s.dependency 'Capacitor'
  s.swift_version    = '5.1'
end
