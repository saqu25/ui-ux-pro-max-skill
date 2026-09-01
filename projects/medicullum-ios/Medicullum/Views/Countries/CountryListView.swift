import SwiftUI

struct CountryListView: View {
    @StateObject private var viewModel = CountryListViewModel()

    var body: some View {
        List(viewModel.countries) { country in
            if country.isComingSoon {
                comingSoonRow(country)
            } else {
                NavigationLink {
                    CountryDetailView(viewModel: CountryDetailViewModel(country: country))
                } label: {
                    row(country)
                }
            }
        }
        .listStyle(.plain)
        .navigationTitle("Countries")
    }

    private func row(_ country: Country) -> some View {
        HStack(spacing: 14) {
            Text(country.flagEmoji).font(.system(size: 30))
            VStack(alignment: .leading, spacing: 2) {
                Text(country.name).font(.brandBody(16, weight: .semibold)).foregroundStyle(Color.brandNavy)
                Text(country.tagline).font(.brandBody(12)).foregroundStyle(Color.brandMuted)
            }
        }
        .padding(.vertical, 4)
    }

    private func comingSoonRow(_ country: Country) -> some View {
        HStack(spacing: 14) {
            Text(country.flagEmoji).font(.system(size: 30)).opacity(0.4)
            VStack(alignment: .leading, spacing: 2) {
                Text(country.name).font(.brandBody(16, weight: .semibold)).foregroundStyle(Color.brandMuted)
                Text(country.tagline).font(.brandBody(12)).foregroundStyle(Color.brandMuted)
            }
            Spacer()
            Badge(text: "Coming Soon")
        }
        .padding(.vertical, 4)
        .opacity(0.7)
    }
}
