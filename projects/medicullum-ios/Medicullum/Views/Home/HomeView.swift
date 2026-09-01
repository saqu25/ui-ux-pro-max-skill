import SwiftUI

struct HomeView: View {
    @StateObject private var viewModel = HomeViewModel()
    @Environment(\.openURL) private var openURL

    var body: some View {
        ScrollView {
            VStack(spacing: 0) {
                hero

                statsStrip

                VStack(alignment: .leading, spacing: 20) {
                    SectionHeader(eyebrow: "Why Bulgaria", title: "Why students choose Bulgaria")
                    VStack(spacing: 10) {
                        ForEach(viewModel.whyPoints, id: \.self) { point in
                            HStack(alignment: .top, spacing: 10) {
                                Image(systemName: "checkmark.seal.fill")
                                    .foregroundStyle(Color.brandGold)
                                Text(point)
                                    .font(.brandBody(13))
                                    .foregroundStyle(Color.brandInk)
                            }
                        }
                    }

                    NavigationLink {
                        CountryDetailView(viewModel: CountryDetailViewModel(country: viewModel.featuredCountry))
                    } label: {
                        HStack {
                            Text("Explore Bulgaria")
                            Image(systemName: "arrow.right")
                        }
                        .font(.brandBody(14, weight: .semibold))
                        .foregroundStyle(Color.brandNavy)
                    }
                    .padding(.top, 4)
                }
                .padding(20)

                ctaBanner
                    .padding(20)

                DisclaimerFooter()
                    .padding(.horizontal, 20)
                    .padding(.bottom, 24)
            }
        }
        .background(Color.brandSoftGray)
        .navigationTitle("Medicullum")
        .navigationBarTitleDisplayMode(.inline)
    }

    private var hero: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Guiding Indian Students to European Degrees, End to End")
                .font(.brandDisplay(26))
                .foregroundStyle(.white)

            Text(MockData.aboutMission)
                .font(.brandBody(13))
                .foregroundStyle(.white.opacity(0.75))

            HStack(spacing: 10) {
                PrimaryButton(title: "WhatsApp Us") {
                    openURL(viewModel.whatsAppURL)
                }
                PrimaryButton(title: "Book Consultation", style: .outlineLight) {
                    if let url = URL(string: "mailto:\(MockData.contactEmail)") {
                        openURL(url)
                    }
                }
            }
            .padding(.top, 6)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(20)
        .padding(.top, 12)
        .background(Color.brandNavyGradient)
    }

    private var statsStrip: some View {
        HStack(spacing: 0) {
            ForEach(viewModel.stats) { stat in
                StatCard(value: stat.value, label: stat.label)
            }
        }
        .background(Color.brandNavy800)
    }

    private var ctaBanner: some View {
        VStack(spacing: 10) {
            Text("Ready to start your Bulgaria journey?")
                .font(.brandDisplay(18))
                .foregroundStyle(.white)
                .multilineTextAlignment(.center)
            Text("Book a free, no-obligation consultation with our admission experts.")
                .font(.brandBody(12))
                .foregroundStyle(.white.opacity(0.7))
                .multilineTextAlignment(.center)
            PrimaryButton(title: "Book Free Consultation") {
                if let url = URL(string: "mailto:\(MockData.contactEmail)") {
                    openURL(url)
                }
            }
            .padding(.top, 4)
        }
        .padding(20)
        .background(RoundedRectangle(cornerRadius: 20).fill(Color.brandNavy))
    }
}
