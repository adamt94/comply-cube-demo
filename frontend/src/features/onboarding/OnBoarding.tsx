"use client"

import { useState } from "react";


import UserInputForm from "./components/UserInputForm"
import UploadDocument from "./components/UploadDocument";
import VerifyStatus from "./components/VerifyStatus";
import { CaptureData, CreateUserResponse } from "../types/user";

function OnBoarding() {
  const [clientDetails, setClientDetails] = useState<CreateUserResponse | null>(null);
  const [documentDetails, setDocumentDetails] = useState<CaptureData | null>(null);
  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="text-xl text-center">Onboarding</h1>
      <div className="flex lg:flex-row flex-col gap-10">
        {!documentDetails && (<>
          <section className="lg:min-w-72 w-full">
            <UserInputForm onSuccess={setClientDetails} />
          </section>
          <section className="">
            <UploadDocument clientId={clientDetails?.token} onSucess={setDocumentDetails} />
          </section>

        </>
        )}

        {documentDetails && (
          <VerifyStatus clientId={clientDetails?.client.id || ""} documentId={documentDetails.documentCapture.documentId || ""} livePhotoId={documentDetails.faceCapture.livePhotoId || ""} />
        )}

      </div>
    </div >
  )
}


export default OnBoarding;
