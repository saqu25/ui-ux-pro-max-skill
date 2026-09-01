import SwiftUI

/// Type pairing mirrors medicullum.com's "Classic Elegant" system: a serif
/// display face (Playfair Display on web) paired with a clean sans body
/// (Inter on web). Phase 1 uses the system serif/rounded fallbacks so the
/// app has zero font-bundling risk; swap in the real Google Fonts files in
/// a later phase if the brand wants pixel-parity with the website.
extension Font {
    static func brandDisplay(_ size: CGFloat, weight: Font.Weight = .bold) -> Font {
        .system(size: size, weight: weight, design: .serif)
    }

    static func brandBody(_ size: CGFloat, weight: Font.Weight = .regular) -> Font {
        .system(size: size, weight: weight, design: .default)
    }
}
