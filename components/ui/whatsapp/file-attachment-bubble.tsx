"use client";

import * as React from "react";
import { Button } from "@base-ui/react/button";
import { Progress } from "@base-ui/react/progress";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";
import { type MessageStatus } from "@/components/ui/whatsapp/chat-bubble";

type DownloadStatus = "idle" | "downloading" | "done";

interface FileAttachmentBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  fileName: string;
  fileSize?: string;
  fileType?: string;
  timestamp?: string;
  status?: MessageStatus;
  downloadStatus?: DownloadStatus;
  downloadProgress?: number;
  showTail?: boolean;
  /** Direct download URL — renders button as <a download> for native browser download */
  downloadUrl?: string;
  onDownload?: () => void;
}

// File type → WDS color token
const FILE_TYPE_COLORS: Record<string, string> = {
  pdf:  "#ea0038",   // WDS red — PDF always red
  doc:  "var(--wa-attachment-document)",
  docx: "var(--wa-attachment-document)",
  xls:  "var(--wa-attachment-poll)",
  xlsx: "var(--wa-attachment-poll)",
  ppt:  "var(--wa-attachment-camera)",
  pptx: "var(--wa-attachment-camera)",
  mp3:  "var(--wa-attachment-audio)",
  wav:  "var(--wa-attachment-audio)",
  m4a:  "var(--wa-attachment-audio)",
  mp4:  "var(--wa-attachment-photo)",
  mov:  "var(--wa-attachment-photo)",
  jpg:  "var(--wa-gray-400)",
  jpeg: "var(--wa-gray-400)",
  png:  "var(--wa-attachment-contact)",
  gif:  "var(--wa-attachment-sticker)",
  zip:  "var(--wa-gray-600)",
  rar:  "var(--wa-gray-600)",
  hwp:  "var(--wa-gray-500)",
};

function getFileColor(fileType?: string): string {
  return FILE_TYPE_COLORS[fileType?.toLowerCase() ?? ""] ?? "var(--wa-gray-500)";
}

function FileTypeIcon({ fileType }: { fileType?: string }) {
  const color = getFileColor(fileType);
  const label = (fileType ?? "FILE").toUpperCase().slice(0, 4);
  return (
    <div
      className="flex h-[46px] w-[46px] shrink-0 flex-col items-center justify-center rounded-lg"
      style={{ backgroundColor: color }}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="white" className="opacity-90">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z" />
      </svg>
      <span className="mt-[1px] text-[8px] font-bold leading-none text-white opacity-90">
        {label}
      </span>
    </div>
  );
}

function DownloadButton({
  onClick,
  color,
  downloadUrl,
  fileName,
}: {
  onClick?: () => void;
  color: string;
  downloadUrl?: string;
  fileName?: string;
}) {
  const renderEl = downloadUrl
    ? <a href={downloadUrl} download={fileName ?? true} />
    : undefined;

  return (
    <Button
      render={renderEl}
      nativeButton={!downloadUrl}
      onClick={onClick}
      className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full border-2 transition-opacity hover:opacity-70"
      style={{ borderColor: color, color }}
      aria-label="Download"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z" />
      </svg>
    </Button>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 11" height="11" width="16" className={className}>
      <path
        d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.011-2.175a.463.463 0 0 0-.349-.158.467.467 0 0 0-.338.131.537.537 0 0 0-.14.353.54.54 0 0 0 .13.363l2.39 2.576a.465.465 0 0 0 .349.158.457.457 0 0 0 .368-.189l6.596-8.14a.504.504 0 0 0 .103-.36.516.516 0 0 0-.223-.271z"
        fill="currentColor"
      />
    </svg>
  );
}

function DoubleCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 11" height="11" width="16" className={className}>
      <path
        d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.011-2.175a.463.463 0 0 0-.349-.158.467.467 0 0 0-.338.131.537.537 0 0 0-.14.353.54.54 0 0 0 .13.363l2.39 2.576a.465.465 0 0 0 .349.158.457.457 0 0 0 .368-.189l6.596-8.14a.504.504 0 0 0 .103-.36.516.516 0 0 0-.223-.271z"
        fill="currentColor"
      />
      <path
        d="M15.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.2-1.298-.728.897 1.58 1.704a.465.465 0 0 0 .349.158.457.457 0 0 0 .368-.189l6.596-8.14a.504.504 0 0 0 .103-.36.516.516 0 0 0-.193-.484z"
        fill="currentColor"
      />
    </svg>
  );
}

const FileAttachmentBubble = React.forwardRef<
  HTMLDivElement,
  FileAttachmentBubbleProps
>(
  (
    {
      className,
      variant = "incoming",
      fileName,
      fileSize,
      fileType,
      timestamp,
      status,
      downloadStatus = "idle",
      downloadProgress,
      showTail = false,
      downloadUrl,
      onDownload,
      ...props
    },
    ref
  ) => {
    const isOutgoing = variant === "outgoing";

    const statusIcon = () => {
      if (!isOutgoing || !status) return null;
      if (status === "sending" || status === "sent")
        return <span className="text-wa-delivered opacity-75"><CheckIcon /></span>;
      if (status === "delivered")
        return <span className="text-wa-delivered"><DoubleCheckIcon /></span>;
      if (status === "read")
        return <span className="text-wa-read"><DoubleCheckIcon /></span>;
    };

    return (
      <div
        className={cn(
          "flex w-full",
          isOutgoing ? "justify-end" : "justify-start",
          showTail ? "mb-[6px]" : "",
          className
        )}
        {...props}
        ref={ref}
      >
        <div
          className={cn(
            "font-wa relative max-w-[var(--wa-msg-max-width)] overflow-visible rounded-lg px-[9px] pb-2 pt-[6px]",
            isOutgoing
              ? "bg-wa-bubble-outgoing"
              : "bg-wa-bubble-incoming",
            showTail && (isOutgoing ? "rounded-br-[3px]" : "rounded-bl-[3px]")
          )}
        >
          {showTail && (
            <svg
              viewBox="0 0 8 13"
              width="8"
              height="13"
              className={cn(
                "absolute bottom-0",
                isOutgoing ? "-right-[8px]" : "-left-[8px]"
              )}
            >
              {isOutgoing ? (
                <path
                  d="M5.188 13H0V1.807l6.467 8.625C7.526 11.844 6.958 13 5.188 13z"
                  className="fill-wa-bubble-outgoing"
                />
              ) : (
                <path
                  d="M1.533 10.432L8 1.807V13H2.812C1.042 13 .474 11.844 1.533 10.432z"
                  className="fill-wa-bubble-incoming"
                />
              )}
            </svg>
          )}

          {/* File row */}
          <div className="flex items-center gap-[10px]">
            {/* Colored file type icon */}
            <FileTypeIcon fileType={fileType} />

            {/* File info */}
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-[14px] font-medium leading-[19px] text-wa-text-primary">
                {fileName}
              </span>
              <span className="mt-[1px] text-[12px] leading-[16px] text-wa-text-secondary">
                {[fileSize, fileType?.toUpperCase()].filter(Boolean).join(" · ")}
              </span>
            </div>

            {/* Download button — outlined circle */}
            {downloadStatus !== "done" && (
              <DownloadButton
                onClick={onDownload}
                color={isOutgoing ? "var(--wa-emerald-600)" : "var(--wa-icon-default)"}
                downloadUrl={downloadUrl}
                fileName={fileName}
              />
            )}
          </div>

          {/* Download progress bar */}
          {downloadStatus === "downloading" && (
            <Progress.Root value={downloadProgress ?? 0} className="mt-2">
              <Progress.Track className="h-[2px] w-full overflow-hidden rounded-full bg-wa-border">
                <Progress.Indicator className="h-full rounded-full bg-wa-emerald-500 transition-all duration-200" />
              </Progress.Track>
            </Progress.Root>
          )}

          {/* Metadata */}
          <div className="float-right -mb-1 ml-2 mt-1 flex items-center gap-[3px]">
            {timestamp && (
              <span className="text-[11px] leading-[15px] text-wa-bubble-meta">
                {timestamp}
              </span>
            )}
            {statusIcon()}
          </div>
        </div>
      </div>
    );
  }
);
FileAttachmentBubble.displayName = "FileAttachmentBubble";

export { FileAttachmentBubble, type FileAttachmentBubbleProps };
