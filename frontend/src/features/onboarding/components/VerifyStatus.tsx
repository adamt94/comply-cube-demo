import Spinner from "@/components/Spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import {
  verifyUser,
  verifyUserStatus,
} from "../api/verifyUser";
import { CheckUserStatusResponse } from "@/features/types/user";

type VerifyStatusProps = {
  clientId: string;
  documentId: string;
  livePhotoId: string;
};

function VerifyStatus({
  clientId,
  documentId,
  livePhotoId,
}: VerifyStatusProps) {
  const { data: initVerifyData } = useQuery({
    queryKey: [
      "createUserCheck",
      { documentId: documentId, clientId: clientId, livePhotoId: livePhotoId },
    ],
    queryFn: () => verifyUser({ documentId, clientId, livePhotoId }),
  });

  const checkId = initVerifyData?.id;

  const { data: statusData } = useQuery<CheckUserStatusResponse>({
    queryKey: ["checkUserStatus", { checkId }],
    queryFn: () => verifyUserStatus({ checkId }),
    enabled: !!checkId,
    refetchInterval: (data) => {
      return data?.state.data?.status !== "complete" ? 2000 : false;
    },
  });


  return (
    <div className="flex flex-col items-center gap-8">
      <p>Document uploaded successfully! Verifying documents please wait...</p>

      {!initVerifyData && <Spinner />}
      {initVerifyData && statusData?.status && <p>Status {statusData.status}</p>}
      {initVerifyData && statusData?.result && (
        <p>{statusData.result.outcome}</p>
      )}
    </div>
  );
}

export default VerifyStatus;

