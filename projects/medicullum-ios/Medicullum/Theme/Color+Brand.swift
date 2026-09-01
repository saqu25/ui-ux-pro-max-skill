import SwiftUI

/// Brand tokens mirrored from medicullum.com's own design system
/// (see /projects/medicullum-ios/../medicullum's BLUEPRINT.md §1.1).
extension Color {
    static let brandNavy = Color(red: 0x0A / 255, green: 0x1F / 255, blue: 0x44 / 255)
    static let brandNavyDeep = Color(red: 0x06 / 255, green: 0x15 / 255, blue: 0x30 / 255)
    static let brandNavy800 = Color(red: 0x10 / 255, green: 0x2A / 255, blue: 0x54 / 255)
    static let brandGold = Color(red: 0xC9 / 255, green: 0xA2 / 255, blue: 0x27 / 255)
    static let brandGoldLight = Color(red: 0xE6 / 255, green: 0xC6 / 255, blue: 0x5C / 255)
    static let brandInk = Color(red: 0x17 / 255, green: 0x21 / 255, blue: 0x3B / 255)
    static let brandMuted = Color(red: 0x5B / 255, green: 0x64 / 255, blue: 0x78 / 255)
    static let brandSoftGray = Color(red: 0xF5 / 255, green: 0xF6 / 255, blue: 0xF8 / 255)
    static let brandBorder = Color(red: 0xE4 / 255, green: 0xE7 / 255, blue: 0xEE / 255)

    static let brandNavyGradient = LinearGradient(
        colors: [.brandNavyDeep, .brandNavy800],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
}
