import Foundation

@MainActor
final class UniversityDetailViewModel: ObservableObject {
    let university: University

    init(university: University) {
        self.university = university
    }

    var hasFullProfile: Bool { university.overview != nil }
}
