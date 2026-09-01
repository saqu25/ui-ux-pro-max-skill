import Foundation

struct Country: Identifiable, Hashable {
    let id = UUID()
    let name: String
    let flagEmoji: String
    let tagline: String
    let isComingSoon: Bool

    /// Populated only for the fully-built country (Bulgaria) in Phase 1.
    var overview: String?
    var whyPoints: [String] = []
    var eligibility: [String] = []
    var faqs: [FAQItem] = []
    var universities: [University] = []
}
