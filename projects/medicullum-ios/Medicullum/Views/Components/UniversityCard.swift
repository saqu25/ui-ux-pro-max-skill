import SwiftUI

struct UniversityCard: View {
    let university: University

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            VStack(alignment: .leading, spacing: 2) {
                Text(university.city.uppercased())
                    .font(.brandBody(11, weight: .semibold))
                    .foregroundStyle(Color.brandMuted)
                Text(university.name)
                    .font(.brandDisplay(17))
                    .foregroundStyle(Color.brandNavy)
            }

            Text(university.programs)
                .font(.brandBody(13))
                .foregroundStyle(Color.brandInk)

            HStack(spacing: 10) {
                statPill(title: "Tuition", value: university.tuitionPerYear)
                statPill(title: "Duration", value: university.durationYears)
                statPill(title: "Intake", value: university.intake)
            }
        }
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(Color.white)
                .shadow(color: .black.opacity(0.06), radius: 8, y: 4)
        )
    }

    private func statPill(title: String, value: String) -> some View {
        VStack(spacing: 2) {
            Text(title.uppercased())
                .font(.brandBody(9, weight: .semibold))
                .foregroundStyle(Color.brandMuted)
            Text(value)
                .font(.brandBody(11, weight: .bold))
                .foregroundStyle(Color.brandNavy)
                .multilineTextAlignment(.center)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 8)
        .background(RoundedRectangle(cornerRadius: 10).fill(Color.brandSoftGray))
    }
}
