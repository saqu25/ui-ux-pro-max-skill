import SwiftUI

struct DisclaimerFooter: View {
    var body: some View {
        Text(MockData.disclaimer)
            .font(.brandBody(11))
            .foregroundStyle(Color.brandMuted)
            .multilineTextAlignment(.leading)
            .padding(14)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(RoundedRectangle(cornerRadius: 12).fill(Color.brandSoftGray))
    }
}
