import { ReservedFooterComponent } from "CommonComponent/ReservedFooterComponent/ReservedFooterComponent";

import React from "react";

import { UserSettingProfileForm } from "../UserSettingProfileForm/UserSettingProfileForm";

export const UserSettingSideComponent = () => {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-12">
           
            <div className="dashboard-headline">
              <h3>User Profile</h3>
            </div>
            <UserSettingProfileForm />
            <ReservedFooterComponent />
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <div className="row">
<div className="">
 
</div>



</div> */
}
