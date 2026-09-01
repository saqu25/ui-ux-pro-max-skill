import Foundation

struct University: Identifiable, Hashable {
    let id = UUID()
    let name: String
    let city: String
    let countryName: String
    let programs: String
    let tuitionPerYear: String
    let durationYears: String
    let intake: String
    let englishMedium: Bool

    /// Only populated for the one fully-built detail page (Medical University
    /// of Sofia) in Phase 1. Everything here traces back to a specific line
    /// in medicullum.com's study-in-bulgaria.html — nothing invented.
    var overview: String?
    var admissionsNote: String?
    var accreditationNote: String?
    var rankingNote: String?
}
