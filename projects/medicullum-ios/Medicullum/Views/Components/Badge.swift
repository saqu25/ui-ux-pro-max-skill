import SwiftUI

struct Badge: View {
    let text: String

    var body: some View {
        Text(text)
            .font(.brandBody(11, weight: .semibold))
            .padding(.horizontal, 10)
            .padding(.vertical, 5)
            .background(Capsule().fill(Color.brandGold.opacity(0.15)))
            .foregroundStyle(Color.brandGold)
    }
}
