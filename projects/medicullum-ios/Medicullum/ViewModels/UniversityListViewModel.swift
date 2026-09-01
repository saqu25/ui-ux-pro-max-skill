import Foundation

@MainActor
final class UniversityListViewModel: ObservableObject {
    @Published private(set) var universities: [University] = MockData.bulgariaUniversities
}
