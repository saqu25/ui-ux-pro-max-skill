import Foundation

@MainActor
final class HomeViewModel: ObservableObject {
    @Published private(set) var stats: [MockData.AboutStat] = MockData.aboutStats
    @Published private(set) var featuredCountry: Country = MockData.bulgaria
    @Published private(set) var whyPoints: [String] = MockData.bulgaria.whyPoints

    var whatsAppURL: URL { MockData.whatsAppURL }
}
