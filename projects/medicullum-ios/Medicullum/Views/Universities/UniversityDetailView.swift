import SwiftUI

struct UniversityDetailView: View {
    @StateObject var viewModel: UniversityDetailViewModel

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 22) {
                header

                statRow

                if let overview = viewModel.university.overview {
                    section(eyebrow: "Overview", title: "About this university", body: overview)
                }

                if let admissions = viewModel.university.admissionsNote {
                    section(eyebrow: "Admissions", title: "Eligibility requirements", body: admissions)
                }

                if let accreditation = viewModel.university.accreditationNote {
                    section(eyebrow: "Accreditation", title: "Recognition", body: accreditation)
                }

                if let ranking = viewModel.university.rankingNote {
                    section(eyebrow: "Rankings", title: "Where this university ranks", body: ranking)
                }

                if !viewModel.hasFullProfile {
                    VStack(alignment: .leading, spacing: 6) {
                        Text("Full profile in progress")
                            .font(.brandBody(13, weight: .semibold))
                            .foregroundStyle(Color.brandNavy)
                        Text("Detailed admissions, curriculum and accreditation information for this university is being verified. Contact Medicullum for the latest details.")
                            .font(.brandBody(12))
                            .foregroundStyle(Color.brandMuted)
                    }
                    .padding(14)
                    .background(RoundedRectangle(cornerRadius: 12).fill(Color.brandSoftGray))
                }

                DisclaimerFooter()
            }
            .padding(20)
        }
        .background(Color.brandSoftGray)
        .navigationTitle(viewModel.university.name)
        .navigationBarTitleDisplayMode(.large)
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: 4) {
            Text("\(viewModel.university.city), \(viewModel.university.countryName)".uppercased())
                .font(.brandBody(11, weight: .semibold))
                .foregroundStyle(Color.brandMuted)
            Text(viewModel.university.programs)
                .font(.brandDisplay(20))
                .foregroundStyle(Color.brandNavy)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    private var statRow: some View {
        HStack(spacing: 10) {
            statBox(title: "Tuition", value: viewModel.university.tuitionPerYear)
            statBox(title: "Duration", value: viewModel.university.durationYears)
            statBox(title: "Intake", value: viewModel.university.intake)
        }
    }

    private func statBox(title: String, value: String) -> some View {
        VStack(spacing: 4) {
            Text(title.uppercased()).font(.brandBody(10, weight: .semibold)).foregroundStyle(Color.brandMuted)
            Text(value).font(.brandBody(13, weight: .bold)).foregroundStyle(Color.brandNavy).multilineTextAlignment(.center)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 12)
        .background(RoundedRectangle(cornerRadius: 12).fill(Color.white))
    }

    private func section(eyebrow: String, title: String, body: String) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            SectionHeader(eyebrow: eyebrow, title: title)
            Text(body)
                .font(.brandBody(13))
                .foregroundStyle(Color.brandInk)
        }
    }
}
