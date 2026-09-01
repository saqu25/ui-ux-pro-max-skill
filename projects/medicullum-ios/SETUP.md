# Medicullum iOS — Setup

This is a SwiftUI, MVVM-structured iOS app (Phase 1) built from real content
sourced from [medicullum.com](https://www.medicullum.com). It has no
Firebase, no networking and no auth yet — everything is driven by local mock
data in `Medicullum/Data/MockData.swift`, so the whole app is meant to open
and run immediately.

## Opening the project

1. Open `Medicullum.xcodeproj` in Xcode 15 or later.
2. Select the `Medicullum` scheme and any iOS 17+ simulator (e.g. iPhone 15).
3. Press **Run** (⌘R).

`Medicullum.xcodeproj/project.pbxproj` was hand-authored outside of Xcode
(this was built in a Linux sandbox with no macOS/Xcode available to test
against), so while it's been structurally verified — every one of the 28
Swift files appears exactly once in the Sources build phase, `Assets.xcassets`
is wired into Resources, and every project/workspace/scheme file parses as
valid XML/JSON/plist — it has not been opened in a real copy of Xcode. If it
doesn't open cleanly on the first try, use the fallback below rather than
debugging the `.pbxproj` by hand.

## Fallback: if the project doesn't open cleanly

1. In Xcode: **File → New → Project → iOS → App**.
   - Product Name: `Medicullum`
   - Interface: SwiftUI, Life Cycle: SwiftUI App
   - Save it anywhere temporary.
2. Delete the generated `ContentView.swift` and the placeholder `Assets.xcassets`.
3. Drag the entire `Medicullum/` folder from this directory into the new
   project's navigator (check "Copy items if needed" and "Create groups").
4. Build and run — this takes about a minute and nothing is lost, since all
   the real logic lives in the plain `.swift` files, not the project file.

## What's in Phase 1

Splash → Home → Countries list → Bulgaria (fully built) → Universities list
→ Medical University of Sofia (fully built) → About → Contact. See the repo
root `CLAUDE.md`-tracked plan for what's deferred to later phases (chat/
social features, AI assistant, booking, admin panel, Firebase).

Every fact in `MockData.swift` is sourced from the live medicullum.com site
— tuition, durations, intakes, stats, contact details. Nothing is invented;
anything the site doesn't state is intentionally left out rather than guessed.
