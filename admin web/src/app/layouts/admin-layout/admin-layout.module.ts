import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ClientComponent } from '../../client/client.component';
import { EmployeeComponent } from '../../employee/employee.component';
import { AppointmentComponent } from '../../appointment/appointment.component';
import { BillingComponent } from '../../billing/billing.component';
import { BillingReportComponent } from '../../billing-report/billing-report.component';
import { ServicesComponent } from '../../services/services.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { AddservicesComponent } from 'app/services/addservices/addservices.component';
import { EditservicesComponent } from 'app/services/editservices/editservices.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ClientComponent,
    EmployeeComponent,
    AppointmentComponent,
    BillingComponent,
    BillingReportComponent,
    ServicesComponent,
    AddservicesComponent,
    EditservicesComponent,
  ]
})

export class AdminLayoutModule {}
