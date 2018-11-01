import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class AuthUserModule {
  constructor(
    private Project: {
      ProjectId: string;
      Name: string;
      Abbreviation: string;
      ProjectCode: string;
      StartDate: Date;
      EndDate: Date;
      UOM: string;
      BavelThreshold: number;
      UOMMatrix: string[];
    },
    private CurrentUserId: string,
    private LoginName: string,
    private FirstName: string,
    private LastName: string,
    private EmployeeCode: string,
    private UserCompanyId: string,
    private UserCompany: string,
    private UserToken: string,
    private CompanyType: string,
    private MenuInput: { ActivityId: ""; MenuName: "" }[],
    private Hierarchical: {
      Header: string;
      ActivityId: string;
      MenuItems: { ActivityId: ""; MenuName: "" }[];
    }[],
    private RoleMenu: string
  ) {}
}
