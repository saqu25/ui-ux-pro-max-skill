import SwiftUI

struct CountryDetailView: View {
    @StateObject var viewModel: CountryDetailViewModel

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 24) {
                header

                if let overview = viewModel.country.overview {
                    VStack(alignment: .leading, spacing: 10) {
                        SectionHeader(eyebrow: "Overview", title: "Why thousands of Indian students choose Bulgaria")
                        Text(overview)
                            .font(.brandBody(13))
                            .foregroundStyle(Color.brandInk)
                    }
                }

                if !viewModel.country.whyPoints.isEmpty {
                    VStack(alignment: .leading, spacing: 10) {
                        SectionHeader(eyebrow: "Why This Country", title: "At a glance")
                        ForEach(viewModel.country.whyPoints, id: \.self) { point in
                            HStack(alignment: .top, spacing: 10) {
                                Image(systemName: "checkmark.seal.fill").foregroundStyle(Color.brandGold)
                                Text(point).font(.brandBody(13)).foregroundStyle(Color.brandInk)
                            }
                        }
                    }
                }

                if !viewModel.country.universities.isEmpty {
                    VStack(alignment: .leading, spacing: 12) {
                        SectionHeader(eyebrow: "Universities", title: "\(viewModel.country.universities.count) accredited institutions")
                        ForEach(viewModel.country.universities) { university in
                            NavigationLink {
                                UniversityDetailView(viewModel: UniversityDetailViewModel(university: university))
                            } label: {
                                UniversityCard(university: university)
                            }
                            .buttonStyle(.plain)
                        }
                    }
                }

                if !viewModel.country.eligibility.isEmpty {
                    VStack(alignment: .leading, spacing: 10) {
                        SectionHeader(eyebrow: "Eligibility", title: "What you need to apply")
                        ForEach(viewModel.country.eligibility, id: \.self) { item in
                            HStack(alignment: .top, spacing: 10) {
                                Image(systemName: "checkmark").foregroundStyle(Color.brandGold)
                                Text(item).font(.brandBody(13)).foregroundStyle(Color.brandInk)
                            }
                        }
                    }
                }

                if !viewModel.country.faqs.isEmpty {
                    VStack(alignment: .leading, spacing: 10) {
                        SectionHeader(eyebrow: "FAQ", title: "Common questions")
                        ForEach(viewModel.country.faqs) { faq in
                            FAQRow(faq: faq)
                        }
                    }
                }

                DisclaimerFooter()
            }
            .padding(20)
        }
        .background(Color.brandSoftGray)
        .navigationTitle(viewModel.country.name)
        .navigationBarTitleDisplayMode(.large)
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(viewModel.country.flagEmoji).font(.system(size: 40))
            Text(viewModel.country.tagline)
                .font(.brandDisplay(20))
                .foregroundStyle(Color.brandNavy)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }
}

private struct FAQRow: View {
    let faq: FAQItem
    @State private var isExpanded = false

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Button {
                withAnimation(.easeInOut(duration: 0.2)) { isExpanded.toggle() }
            } label: {
                HStack {
                    Text(faq.question)
                        .font(.brandBody(13, weight: .semibold))
                        .foregroundStyle(Color.brandNavy)
                        .multilineTextAlignment(.leading)
                    Spacer()
                    Image(systemName: isExpanded ? "minus" : "plus")
                        .foregroundStyle(Color.brandGold)
                }
            }
            .buttonStyle(.plain)

            if isExpanded {
                Text(faq.answer)
                    .font(.brandBody(12))
                    .foregroundStyle(Color.brandMuted)
            }
        }
        .padding(.vertical, 10)
        Divider()
    }
}
