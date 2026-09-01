import Foundation

struct FAQItem: Identifiable, Hashable {
    let id = UUID()
    let question: String
    let answer: String
}
