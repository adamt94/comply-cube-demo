"use client"
import { CaptureData } from "@/features/types/user";
import { useRef } from "react";
import { useEffect } from "react";



declare global {
  interface Window {
    ComplyCube: {
      mount: (config: ComplyCubeConfig & { selector: string }) => ComplyCubeInstance;

    }
  }
}

type ComplyCubeConfig = {
  token: string;
  onComplete: (data: unknown) => void;
  onModalClose: () => void;
  onError: (error: { type: string; message: string }) => void;
}

type ComplyCubeInstance = {
  updateSettings: (settings: { isModalOpen?: boolean; token?: string }) => void;
  unmount: () => void;

}

type UploadDocumentProps = {
  clientId?: string;
  onSucess: (data: CaptureData) => void;
};

function UploadDocument({ clientId, onSucess }: UploadDocumentProps) {
  const complycubeRef = useRef<ComplyCubeInstance | null>(null);

  useEffect(() => {
    if (clientId && window.ComplyCube) {
      const complycubeConfig: ComplyCubeConfig = {
        token: clientId,
        onComplete: (data: unknown) => {
          console.log("Capture complete", data);
          onSucess(data as CaptureData);
        },
        onModalClose: () => {
          if (complycubeRef.current) {
            complycubeRef.current.updateSettings({ isModalOpen: false });
          }
        },
        onError: ({ type, message }) => {
          if (type === "token_expired") {
            console.warn("SDK token expired. Request a new one.");
          } else {
            console.error(message);
          }
        },
      };

      complycubeRef.current = window.ComplyCube.mount({
        ...complycubeConfig,
        selector: "#complycube-mount",
      });
    }

    return () => {
      complycubeRef.current?.unmount()
    }
  }, [clientId]);


  return (
    <div id="complycube-mount"></div>
  );
}

export default UploadDocument;
