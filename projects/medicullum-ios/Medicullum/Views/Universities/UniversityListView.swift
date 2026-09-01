import SwiftUI

struct UniversityListView: View {
    @StateObject private var viewModel = UniversityListViewModel()

    var body: some View {
        ScrollView {
            VStack(spacing: 12) {
                ForEach(viewModel.universities) { university in
                    NavigationLink {
                        UniversityDetailView(viewModel: UniversityDetailViewModel(university: university))
                    } label: {
                        UniversityCard(university: university)
                    }
                    .buttonStyle(.plain)
                }

                DisclaimerFooter()
                    .padding(.top, 8)
            }
            .padding(16)
        }
        .background(Color.brandSoftGray)
        .navigationTitle("Universities")
    }
}
