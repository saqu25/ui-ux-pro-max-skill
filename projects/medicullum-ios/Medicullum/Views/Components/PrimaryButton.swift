import SwiftUI

struct PrimaryButton: View {
    enum Style {
        case gold
        case outlineLight
        case outlineNavy
    }

    let title: String
    var style: Style = .gold
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            Text(title)
                .font(.brandBody(15, weight: .semibold))
                .frame(maxWidth: .infinity)
                .padding(.vertical, 14)
                .foregroundStyle(foregroundColor)
                .background(
                    Capsule()
                        .fill(style == .gold ? Color.brandGold : Color.clear)
                        .overlay(Capsule().stroke(borderColor, lineWidth: style == .gold ? 0 : 1.4))
                )
        }
        .buttonStyle(.plain)
    }

    private var foregroundColor: Color {
        switch style {
        case .gold: return .brandNavyDeep
        case .outlineLight: return .white
        case .outlineNavy: return .brandNavy
        }
    }

    private var borderColor: Color {
        switch style {
        case .gold: return .clear
        case .outlineLight: return .white
        case .outlineNavy: return .brandNavy
        }
    }
}
