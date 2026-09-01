import SwiftUI

struct AboutView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 24) {
                VStack(alignment: .leading, spacing: 10) {
                    Text("About Medicullum")
                        .font(.brandDisplay(24))
                        .foregroundStyle(Color.brandNavy)
                    Text(MockData.aboutMission)
                        .font(.brandBody(14))
                        .foregroundStyle(Color.brandInk)
                }

                LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 12) {
                    ForEach(MockData.aboutStats) { stat in
                        VStack(spacing: 4) {
                            Text(stat.value).font(.brandDisplay(24)).foregroundStyle(Color.brandGold)
                            Text(stat.label).font(.brandBody(12)).foregroundStyle(Color.brandMuted)
                        }
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 18)
                        .background(RoundedRectangle(cornerRadius: 14).fill(Color.white))
                    }
                }

                NavigationLink {
                    ContactView()
                } label: {
                    HStack {
                        Text("Contact Medicullum")
                        Image(systemName: "arrow.right")
                    }
                    .font(.brandBody(14, weight: .semibold))
                    .foregroundStyle(Color.brandNavy)
                }

                DisclaimerFooter()
            }
            .padding(20)
        }
        .background(Color.brandSoftGray)
        .navigationTitle("About")
    }
}
