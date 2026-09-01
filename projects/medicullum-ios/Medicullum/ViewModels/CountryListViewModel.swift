import Foundation

@MainActor
final class CountryListViewModel: ObservableObject {
    @Published private(set) var countries: [Country] = MockData.allCountries
}
