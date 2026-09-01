import SwiftUI

struct SplashView: View {
    @State private var isActive = false
    @State private var logoOpacity = 0.0

    var body: some View {
        if isActive {
            RootTabView()
        } else {
            ZStack {
                Color.brandNavyGradient.ignoresSafeArea()

                VStack(spacing: 14) {
                    ZStack {
                        Circle()
                            .fill(Color.brandGold.opacity(0.15))
                            .frame(width: 92, height: 92)
                        Image(systemName: "cross.case.fill")
                            .font(.system(size: 34, weight: .semibold))
                            .foregroundStyle(Color.brandGold)
                    }

                    Text("Medicullum")
                        .font(.brandDisplay(30))
                        .foregroundStyle(.white)

                    Text("Guiding Indian Students to European Degrees")
                        .font(.brandBody(13))
                        .foregroundStyle(.white.opacity(0.6))
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 48)
                }
                .opacity(logoOpacity)
            }
            .onAppear {
                withAnimation(.easeOut(duration: 0.6)) {
                    logoOpacity = 1
                }
                DispatchQueue.main.asyncAfter(deadline: .now() + 1.2) {
                    withAnimation(.easeInOut(duration: 0.4)) {
                        isActive = true
                    }
                }
            }
        }
    }
}
