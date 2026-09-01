import Foundation

/// Every value in this file is sourced from the live medicullum.com website
/// (BLUEPRINT.md, study-in-bulgaria.html, about.html, contact.html) as
/// verified during this build. Nothing here is invented. Anything the
/// website itself does not state is left out or marked "Verify with
/// university" rather than guessed — see CLAUDE.md-level compliance notes
/// in the project plan.
enum MockData {

    // MARK: - Universities (Study in Bulgaria — 6 real medical universities)

    static let universityPleven = University(
        name: "Medical University Pleven",
        city: "Pleven",
        countryName: "Bulgaria",
        programs: "Medicine (MD)",
        tuitionPerYear: "€9,000/year",
        durationYears: "6 Years",
        intake: "Feb & Sep",
        englishMedium: true
    )

    static let universitySofia = University(
        name: "Medical University Sofia",
        city: "Sofia",
        countryName: "Bulgaria",
        programs: "Medicine (MD)",
        tuitionPerYear: "€9,950/year",
        durationYears: "6 Years",
        intake: "September",
        englishMedium: true,
        overview: "Medical University Sofia is one of Bulgaria's oldest and most established medical schools, teaching Medicine (MD) entirely in English from year one. Clinical training takes place in EU-standard teaching hospitals from the third year onward.",
        admissionsNote: "Completed 10+2 with Physics, Chemistry, Biology/Mathematics and English (≥50% aggregate, 40% for reserved categories), a valid NEET-UG qualifying score, minimum age 17, and a passport valid for at least 18 months.",
        accreditationNote: "Recognised by India's National Medical Commission (NMC); graduates may appear for the FMGE/NExT screening test. Indian students should verify current NMC eligibility rules directly with the NMC before enrolment — this is not a guarantee of licensure.",
        rankingNote: "Rankings: not currently published by Medicullum — verify directly with the university before relying on any third-party ranking claim."
    )

    static let universityPlovdiv = University(
        name: "Medical University Plovdiv",
        city: "Plovdiv",
        countryName: "Bulgaria",
        programs: "Medicine (MD)",
        tuitionPerYear: "€10,000/year",
        durationYears: "6 Years",
        intake: "September",
        englishMedium: true
    )

    static let universityVarna = University(
        name: "Medical University Varna",
        city: "Varna",
        countryName: "Bulgaria",
        programs: "Medicine (MD)",
        tuitionPerYear: "€10,000/year",
        durationYears: "6 Years",
        intake: "September",
        englishMedium: true
    )

    static let universityTrakia = University(
        name: "Trakia University",
        city: "Stara Zagora",
        countryName: "Bulgaria",
        programs: "Medicine, Veterinary Medicine",
        tuitionPerYear: "€7,000–9,000/year",
        durationYears: "6 Years",
        intake: "September",
        englishMedium: true
    )

    static let universitySofiaUni = University(
        name: "Sofia University St. Kliment Ohridski",
        city: "Sofia",
        countryName: "Bulgaria",
        programs: "Medicine",
        tuitionPerYear: "€7,700–8,000/year",
        durationYears: "6 Years",
        intake: "September",
        englishMedium: true
    )

    static var bulgariaUniversities: [University] {
        [universityPleven, universitySofia, universityPlovdiv, universityVarna, universityTrakia, universitySofiaUni]
    }

    // MARK: - Bulgaria (the one fully-built country)

    static let bulgariaFAQs: [FAQItem] = [
        FAQItem(
            question: "Is a Bulgarian MD degree recognised in India?",
            answer: "Yes. Bulgarian medical universities are recognised by the National Medical Commission (NMC), and graduates can appear for the FMGE/NExT screening test to practice in India, subject to prevailing NMC regulations."
        ),
        FAQItem(
            question: "Do I need NEET to study Medicine in Bulgaria?",
            answer: "Yes, a valid NEET qualifying score is required for Indian students seeking an MBBS/MD equivalent degree abroad, in line with NMC guidelines."
        ),
        FAQItem(
            question: "What is the medium of instruction?",
            answer: "All partner universities teach Medicine entirely in English from the first year, with no requirement to learn Bulgarian for academic purposes."
        ),
        FAQItem(
            question: "How long does the MD program take?",
            answer: "The Medicine (MD) program in Bulgaria is six years, including clinical rotations, followed by an internship as per destination-country and home-country requirements."
        ),
        FAQItem(
            question: "What support does Medicullum provide after I arrive?",
            answer: "Airport pickup, accommodation check-in, residence permit filing and an ongoing local support contact for the duration of your degree."
        )
    ]

    static let bulgaria = Country(
        name: "Bulgaria",
        flagEmoji: "🇧🇬",
        tagline: "Your path to an MD degree in the European Union",
        isComingSoon: false,
        overview: "Bulgaria's medical universities are among Europe's oldest, with programs recognised by the WHO, WFME and the Medical Council structures across the EU. For Indian students, a Bulgarian MD offers an affordable, high-quality alternative to private medical colleges at home — without capitation fees or donation demands. Classes are taught fully in English, campuses have established Indian student communities, and clinical training takes place in modern, EU-standard teaching hospitals from the third year onward.",
        whyPoints: [
            "NMC Recognised — degrees accepted for FMGE/NExT screening as per current regulations. Verify current eligibility before enrolment.",
            "English Medium — no Bulgarian language requirement for academic study.",
            "Affordable Tuition — from €7,000/year, no capitation or donation fees.",
            "EU Teaching Hospitals — hands-on clinical rotations from year three onward."
        ],
        eligibility: [
            "Completed 10+2 with Physics, Chemistry, Biology/Mathematics and English, scoring at least 50% aggregate (40% for reserved categories, as per NMC norms).",
            "Valid NEET-UG qualifying score for the relevant academic year.",
            "Minimum age of 17 years at the time of admission.",
            "Valid passport with at least 18 months validity remaining."
        ],
        faqs: bulgariaFAQs,
        universities: bulgariaUniversities
    )

    // MARK: - Countries in scope but not yet built (honest "coming soon", not fabricated)

    static let comingSoonCountries: [Country] = [
        Country(name: "Georgia", flagEmoji: "🇬🇪", tagline: "Verification in progress", isComingSoon: true),
        Country(name: "Romania", flagEmoji: "🇷🇴", tagline: "Verification in progress", isComingSoon: true),
        Country(name: "Poland", flagEmoji: "🇵🇱", tagline: "Verification in progress", isComingSoon: true)
    ]

    static var allCountries: [Country] {
        [bulgaria] + comingSoonCountries
    }

    // MARK: - About (real stats from about.html)

    static let aboutMission = "Medicullum was founded on a simple belief: studying abroad should be transparent, affordable and safe. We are the dedicated partner behind every step of your journey to Bulgaria — from university selection to graduation."

    struct AboutStat: Identifiable {
        let id = UUID()
        let value: String
        let label: String
    }

    static let aboutStats: [AboutStat] = [
        AboutStat(value: "1000+", label: "Students Placed"),
        AboutStat(value: "15+", label: "University Partnerships"),
        AboutStat(value: "98%", label: "Visa Success Rate"),
        AboutStat(value: "24/7", label: "Support")
    ]

    // MARK: - Contact (real details from contact.html footer)

    static let officeAddress = "Kliment Ohridski 1, Pleven, Bulgaria, 5800"
    static let contactEmail = "info@medicullum.com"

    struct PhoneNumber: Identifiable {
        let id = UUID()
        let region: String
        let number: String
    }

    static let phoneNumbers: [PhoneNumber] = [
        PhoneNumber(region: "India", number: "+91 9567045514"),
        PhoneNumber(region: "Bulgaria", number: "+359 876975945"),
        PhoneNumber(region: "UAE", number: "+971 507375879"),
        PhoneNumber(region: "UK", number: "+44 7384 052534")
    ]

    static let whatsAppURL = URL(string: "https://wa.me/919567045514?text=Hi%20Medicullum%2C%20I%27d%20like%20to%20know%20more%20about%20studying%20in%20Bulgaria.")!
    static let websiteURL = URL(string: "https://www.medicullum.com")!

    // MARK: - Disclaimer (carried over from the site's own compliance rules)

    static let disclaimer = "Fees, deadlines, rankings and visa rules can change. Always verify time-sensitive details directly with the university and relevant regulatory authorities. Medicullum is an education consultancy and is not a university, government body or regulatory authority."
}
