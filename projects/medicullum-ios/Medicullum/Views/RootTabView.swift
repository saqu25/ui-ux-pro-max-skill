import SwiftUI

struct RootTabView: View {
    var body: some View {
        TabView {
            NavigationStack {
                HomeView()
            }
            .tabItem { Label("Home", systemImage: "house.fill") }

            NavigationStack {
                CountryListView()
            }
            .tabItem { Label("Countries", systemImage: "globe.europe.africa.fill") }

            NavigationStack {
                UniversityListView()
            }
            .tabItem { Label("Universities", systemImage: "building.columns.fill") }

            NavigationStack {
                AboutView()
            }
            .tabItem { Label("About", systemImage: "person.text.rectangle.fill") }
        }
        .tint(Color.brandGold)
    }
}
