import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css'],
})
export class CompleteProfileComponent implements OnInit {
  registrationForm!: FormGroup;
  // Dropdown list options
  fieldOfExpertise: string[] = ['Option 1', 'Option 2', 'Option 3'];
  expertiseOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  civilCaseOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  paymentTermOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  //types of expert work
  expertWorkOptions: string[] = ['Civil', 'Criminal'];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      demographics: this.fb.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        homeAddress: [''],
        phoneNumber: ['', Validators.pattern('^\\+?[0-9]{1,3}-?[0-9]{6,12}$')], // Phone number with country code and optional hyphen
        email: ['', [Validators.required, Validators.email]],
        professionalAddress: [''],
        qualifications: [''],
        aboutYou: [''],
        currentEmployer: [''],
        gmcNumber: [''],
      }),
      professionalExp: this.fb.group({
        fieldsOfExpertise: ['', Validators.required],
        yearsOfExperience: [''],
        keywords: [''],
        numberOfCompletedCases: ['', Validators.required],
        typeOfExpertWork: ['', Validators.required],
        typesOfCivilCases: this.fb.group({
          civilCaseReportsOptions: [''],
        }),
        typesOfCriminalCases: this.fb.group({
          criminalCaseReportsOptions: [''],
        }),
        ratioOfInstructions: this.fb.group({
          criminalCases: this.fb.group({
            defence: [''],
            prosecution: [''],
          }),
          civilCases: this.fb.group({
            defendant: [''],
            claimant: [''],
          }),
        }),
        courtAppearances: this.fb.group({
          numberOfAppearances: [''],
          faceToFace: [''],
          jointInstructions: [''],
          externalVetting: [''],
          externalVettingDetails: [''],
        }),
        rate: this.fb.group({
          writingReport: [''],
          activitiesOutOfOriginalInstruction: [''],
          attendingCourt: [''],
          travellingTime: [''],
          classOfPublicTravelOptions: [''],
        }),
        courtCancellation: this.fb.group({
          noFeeDaysNotice: [null, Validators.required],
          feeDaysNotice1: this.fb.group({
            daysNotice: [null, Validators.required],
            feeAmount: [null, Validators.required],
          }),
          feeDaysNotice2: this.fb.group({
            daysNotice: [null, Validators.required],
            feeAmount: [null, Validators.required],
          }),
          offerFreeConsultation: [''],
          freeTimeLimit: [''],
        }),
        orgDetails: this.fb.group({
          servicesThroughOrganization: [''],
          nameOfOrg: [''],
          vatChargeOption: [''],
          vatNumber: [''],
        }),
        paymentTerms: this.fb.group({
          preTrialWorkForPubliclyFundedCasesOption: [''],
          noOfDaysForOtherWork: [''],
          latePaymentInterestRate: [''],
          dataControllerOrProcessorOption: [''],
        }),
        cv: ['', Validators.required],
      }),
    });
  }
  onSubmit(){
    console.log(this.registrationForm.value)
  }
}
