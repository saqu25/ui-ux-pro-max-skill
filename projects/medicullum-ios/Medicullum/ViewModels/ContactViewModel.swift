import Foundation

@MainActor
final class ContactViewModel: ObservableObject {
    @Published private(set) var address: String = MockData.officeAddress
    @Published private(set) var email: String = MockData.contactEmail
    @Published private(set) var phoneNumbers: [MockData.PhoneNumber] = MockData.phoneNumbers

    var whatsAppURL: URL { MockData.whatsAppURL }

    var emailURL: URL? {
        URL(string: "mailto:\(email)")
    }

    func telURL(for number: String) -> URL? {
        let digits = number.filter { $0.isNumber || $0 == "+" }
        return URL(string: "tel:\(digits)")
    }
}
