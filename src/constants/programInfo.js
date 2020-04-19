import logo from "../images/logo_nimaa.jpeg" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = "69140c47-bb03-4a1b-b674-cc136fdea23d" // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = "October 29, 2019"

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  // term details section
  interestRate36: "9.49%",
  interestRate60: "11.46%",
  APRRange36: "11.78%",
  APRRange60: "13.17%",
  interestOnly: [
    {
      // for multiple examples of interest only, add items to interestOnly array
      programName: "",
      APR36: "11.78%",
      financeCharge36: "$1,846.57",
      IOPayment36: "$55.60",
      FullMonthlyPayment36: "$225.17",
      APR60: "13.17%",
      financeCharge60: "$3,112.80",
      IOPayment60: "$67.14",
      FullMonthlyPayment60: "$154.48",
      LoanExampleAmt: "$6,760",
      LoanExampleOFeeAmt: "$270.40",
      LoanExampleAmtPlusOFee: "$6,930.40",
      programLength: "7", // program length in months
    },
  ],
  immediateRepayment: [
    {
      // for multiple examples of immmediate repayment, add items to immediateRepayment array
      programName: "PROGRAM NAME",
      APR36: "XX.XX%",
      financeCharge36: "$X,XXX.XX",
      FullMonthlyPayment36: "$XXX.XX",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
    },
  ],
}

export const faq = {
  // faq section
  costOfLiving: false, // true if at least one program has cost of living included
  costOfLivingPrograms: "", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: false, // true if immediate repayment is an option
  multipleLoanLengths: true, // true if 36 and 60 month options are both available
  multipleLoanTypes: false, // true if both IR and IO are available
  multiPrograms: false, // only true if there are multiple programs
  onlinePrograms: false, // true if at least one program is remote/online
  schoolHQState: "WA",
  origFee: 0.05,

  // interest payment FAQ info
  exampleLoanAmount: "$6,760",
  interestRate36: "9.49%",
  interestRate60: "11.46%",
  APR36: "11.78%",
  APR60: "13.17%",
  IOPayment36: "$56.13",
  IOPayment60: "$67.79",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName: "the NIMAA Medical Assistant Training Program",
      maxAmount: "$6,760",
      col: true,
      colAmount: "$6,000",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "NIMAA"

export const schoolURL = "https://nimaa.org/" // update with url of school's website

export const skfURL = "https://NIMAA.skills.fund" // update with Skills Fund url

export const headline = "Become a Medical Assistant with NIMAA" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `${schoolName} designs its programs to prepare students for a career as a medical assistant. ${schoolName} partners with Skills Fund to offer tuition${
    faq.costOfLiving ? " and cost of living" : ""
  } financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text:
      "NIMAA focuses exclusively on its Medical Assistant Training program.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "nimaa_contact"

export const GATracking = "UA-68312423-1"

export const hubspotFormId = "42e80ce8-6f75-4be7-ab75-51a27cf8f853" // create Hubspot form, get form id after publishing

export const selectAProgram = "program_name" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 6760
export const placeholder = "$6,760"
export const interestRates = {
  ir36: 9.49,
  ir60: 11.46,
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "Medical Assistant Training",
    url: "https://my.skills.fund/application?lenderCode=SKNIM18A",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 6760,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        // interest-only
        k: 10,
        apr36: 11.78,
        apr60: 13.17,
      },
      "Immediate Repayment": null, // immediate repayment
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Interest Only"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 6760,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 10,
            apr36: 11.78,
            apr60: 13.17,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to $6,760 for Tuition and Program Fees for NIMAA's Medical Assistant Training program."

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "PROGRAM 1",
      tuition: "$13,495",
      col: "$6,000",
      max: "$19,495",
    },
    {
      name: "PROGRAM 2",
      tuition: "$16,495",
      col: "$6,000",
      max: "$22,495",
    },
    {
      name: "PROGRAM 3",
      tuition: "$13,495",
      col: "--",
      max: "$13,495",
    },
  ],
  show: false,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>
