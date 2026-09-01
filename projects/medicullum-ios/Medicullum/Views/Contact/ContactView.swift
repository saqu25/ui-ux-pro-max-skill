import SwiftUI

struct ContactView: View {
    @StateObject private var viewModel = ContactViewModel()
    @Environment(\.openURL) private var openURL

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                VStack(alignment: .leading, spacing: 4) {
                    Text("Get in Touch")
                        .font(.brandDisplay(24))
                        .foregroundStyle(Color.brandNavy)
                    Text("Reach out by phone, WhatsApp, email or visit our office — our counsellors typically respond within a few hours.")
                        .font(.brandBody(13))
                        .foregroundStyle(Color.brandMuted)
                }

                PrimaryButton(title: "Chat on WhatsApp") {
                    openURL(viewModel.whatsAppURL)
                }

                VStack(alignment: .leading, spacing: 14) {
                    infoRow(icon: "mappin.circle.fill", title: "Office", value: viewModel.address, url: nil)
                    infoRow(icon: "envelope.fill", title: "Email", value: viewModel.email, url: viewModel.emailURL)

                    ForEach(viewModel.phoneNumbers) { phone in
                        infoRow(icon: "phone.fill", title: phone.region, value: phone.number, url: viewModel.telURL(for: phone.number))
                    }
                }
                .padding(16)
                .background(RoundedRectangle(cornerRadius: 16).fill(Color.white))

                DisclaimerFooter()
            }
            .padding(20)
        }
        .background(Color.brandSoftGray)
        .navigationTitle("Contact")
    }

    private func infoRow(icon: String, title: String, value: String, url: URL?) -> some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: icon)
                .foregroundStyle(Color.brandGold)
                .frame(width: 20)
            VStack(alignment: .leading, spacing: 2) {
                Text(title).font(.brandBody(11, weight: .semibold)).foregroundStyle(Color.brandMuted)
                if let url {
                    Button {
                        openURL(url)
                    } label: {
                        Text(value).font(.brandBody(13)).foregroundStyle(Color.brandNavy)
                    }
                    .buttonStyle(.plain)
                } else {
                    Text(value).font(.brandBody(13)).foregroundStyle(Color.brandInk)
                }
            }
            Spacer()
        }
    }
}
