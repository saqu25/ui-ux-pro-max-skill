import Foundation

@MainActor
final class CountryDetailViewModel: ObservableObject {
    let country: Country

    init(country: Country) {
        self.country = country
    }
}
