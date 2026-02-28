import React from "react";

interface VideoProps {
  url?: string;
  title?: string;
}

export function Video({ url, title }: VideoProps) {
  if (!url) {
    return (
      <div
        style={{
          border: "2px dashed #E9ECEF",
          borderRadius: 12,
          padding: "32px 24px",
          textAlign: "center",
          color: "#ADB5BD",
          fontSize: 14,
          margin: "16px 0",
          background: "#F8F9FA",
        }}
      >
        <span style={{ fontSize: 24, display: "block", marginBottom: 8 }}>
          🎬
        </span>
        {title || "Video em breve"}
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
        borderRadius: 12,
        margin: "24px 0",
        border: "1px solid #E9ECEF",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <iframe
        src={url}
        title={title || "Video"}
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
}
