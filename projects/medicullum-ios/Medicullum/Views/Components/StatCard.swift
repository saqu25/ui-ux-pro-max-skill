import SwiftUI

struct StatCard: View {
    let value: String
    let label: String

    var body: some View {
        VStack(spacing: 4) {
            Text(value)
                .font(.brandDisplay(26))
                .foregroundStyle(Color.brandGold)
            Text(label)
                .font(.brandBody(12))
                .foregroundStyle(Color.white.opacity(0.7))
                .multilineTextAlignment(.center)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 16)
    }
}
