/*
Language: glossa
Website: https://alkisg.mysch.gr
TODO: changes needed in highlight.min.js:
languageDetectRe:/\blang(?:uage)?-([\u0386-\u03ce\w-]+)/i,
name:"R",aliases:"rsplus"
*/

/** @type LanguageFn */
//export default function(hljs) {

/*! `glossa` grammar for Highlight.js */
(() => {
    var e = (() => {
        "use strict"; return e => {
            const KEYWORDS = [
                "DIV", "MOD", "Α_Μ", "Α_Τ", "ΑΚΕΡΑΙΑ", "ΑΚΕΡΑΙΕΣ", "ΑΛΗΘΗΣ",
                "ΑΛΛΙΩΣ", "ΑΛΛΙΩΣ_ΑΝ", "ΑΝ", "ΑΠΟ", "ΑΡΧΗ", "ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ",
                "ΒΗΜΑ", "ΓΙΑ", "ΓΡΑΨΕ", "ΔΙΑΒΑΣΕ", "ΔΙΑΔΙΚΑΣΙΑ", "Ε",
                "ΕΠΑΝΑΛΑΒΕ", "ΕΠΙΛΕΞΕ", "ΕΦ", "Η", "ΗΜ", "ΚΑΙ", "ΚΑΛΕΣΕ",
                "ΛΟΓ", "ΛΟΓΙΚΕΣ", "ΛΟΓΙΚΗ", "ΜΕ", "ΜΕ_ΒΗΜΑ", "ΜΕΤΑΒΛΗΤΕΣ",
                "ΜΕΧΡΙ", "ΜΕΧΡΙΣ_ΟΤΟΥ", "ΟΣΟ", "ΟΧΙ", "ΠΕΡΙΠΤΩΣΗ", "ΠΡΑΓΜΑΤΙΚΕΣ",
                "ΠΡΑΓΜΑΤΙΚΗ", "ΠΡΟΓΡΑΜΜΑ", "ΣΤΑΘΕΡΕΣ", "ΣΥΝ", "ΣΥΝΑΡΤΗΣΗ", "Τ_Ρ",
                "ΤΕΛΟΣ_ΑΝ", "ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ", "ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ", "ΤΕΛΟΣ_ΕΠΙΛΟΓΩΝ",
                "ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ", "ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ", "ΤΟΤΕ", "ΧΑΡΑΚΤΗΡΑΣ",
                "ΧΑΡΑΚΤΗΡΕΣ", "ΨΕΥΔΗΣ"
            ];
            const EMARK_COMMENT_MODE = hljs.COMMENT('!', '$');
            return {
                name: 'glossa',
                aliases: [
                    'ΓΛΩΣΣΑ',
                    'γλώσσα'
                ],
                case_insensitive: true,
                /* This doesn't appear necessary:
                unicodeRegex: true, */
                keywords: {
                    $pattern: /(\bdiv\b|\bmod\b|[\u0386-\u03ce][\u0386-\u03ce_]*)/,
                    literal: KEYWORDS,
                    symbol: ['ΑΛΗΘΗΣ', 'ΨΕΥΔΗΣ'],
                },
                operators: ['+', '-', '*', '/'],
                illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
                contains: [
                    hljs.APOS_STRING_MODE,
                    hljs.QUOTE_STRING_MODE,
                    hljs.NUMBER_MODE,
                    EMARK_COMMENT_MODE
                ]
            };
        }
    })()
        ; hljs.registerLanguage("glossa", e)
})();

/*! `pseudoglossa` grammar for Highlight.js */
(() => {
    var e = (() => {
        "use strict"; return e => {
            const KEYWORDS = [
                "div", "mod", "Α_Μ", "Α_Τ", "Αλγόριθμος",
                "Αληθής", "αλλιώς", "αλλιώς_αν", "Αν",
                "Αντιμετάθεσε", "από", "Αποτελέσματα",
                "Αρχή_επανάληψης", "Για", "Δεδομένα",
                "Διάβασε", "Ε", "Εκτύπωσε", "Εμφάνισε",
                "επανάλαβε", "Επίλεξε", "ΕΦ", "ή", "ΗΜ",
                "και", "ΛΟΓ", "με_βήμα", "μέχρι",
                "Μέχρις_ότου", "Όσο", "όχι", "Περίπτωση",
                "ΣΥΝ", "Τ_Ρ", "Τέλος", "Τέλος_αν",
                "Τέλος_επανάληψης", "Τέλος_επιλογών",
                "τότε", "Ψευδής"
            ];
            const EMARK_COMMENT_MODE = hljs.COMMENT('!', '$');
            return {
                name: 'pseudoglossa',
                aliases: [
                    'Ψευδογλώσσα',
                    'ΨΕΥΔΟΓΛΩΣΣΑ'
                ],
                case_insensitive: true,
                /* This doesn't appear necessary:
                unicodeRegex: true, */
                keywords: {
                    $pattern: /(\bdiv\b|\bmod\b|[\u0386-\u03ce][\u0386-\u03ce_]*)/,
                    literal: KEYWORDS,
                    keyword: ['Αληθής', 'Ψευδής'],
                },
                operators: ['+', '-', '*', '/'],
                illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
                contains: [
                    hljs.APOS_STRING_MODE,
                    hljs.QUOTE_STRING_MODE,
                    hljs.NUMBER_MODE,
                    EMARK_COMMENT_MODE
                ]
            };
        }
    })()
        ; hljs.registerLanguage("pseudoglossa", e)
})();
