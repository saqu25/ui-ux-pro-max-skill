import SwiftUI

struct SectionHeader: View {
    let eyebrow: String
    let title: String

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(eyebrow.uppercased())
                .font(.brandBody(12, weight: .semibold))
                .tracking(1.2)
                .foregroundStyle(Color.brandGold)
            Text(title)
                .font(.brandDisplay(24))
                .foregroundStyle(Color.brandNavy)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }
}
