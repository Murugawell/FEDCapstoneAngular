import { NgModule } from '@angular/core';

import {
  MatNativeDateModule, DateAdapter, MatSidenavModule, MatAutocompleteModule,
  MatCheckboxModule, MatDatepickerModule, MatInputModule, MatRadioModule, MatSelectModule,
  MatSliderModule, MatSlideToggleModule, MatMenuModule, MatToolbarModule, MatListModule,
  MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule,
  MatButtonModule, MatButtonToggleModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule,
  MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatRippleModule,
  MatSortModule, MatPaginatorModule, MatTableModule, MatTreeModule
} from '@angular/material';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  imports: [
    MatSidenavModule, MatAutocompleteModule, MatNativeDateModule,
    MatCheckboxModule, MatDatepickerModule, MatInputModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatMenuModule, MatToolbarModule, MatListModule,
    MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule,
    MatButtonModule, MatButtonToggleModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatRippleModule,
    MatSortModule, MatPaginatorModule, MatTableModule, MatTreeModule, CdkTreeModule
  ],
  exports: [
    MatSidenavModule, MatAutocompleteModule, MatNativeDateModule,
    MatCheckboxModule, MatDatepickerModule, MatInputModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatMenuModule, MatToolbarModule, MatListModule,
    MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule,
    MatButtonModule, MatButtonToggleModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatRippleModule,
    MatSortModule, MatPaginatorModule, MatTableModule, MatTreeModule, CdkTreeModule
  ]
})
export class MaterialModule { }
