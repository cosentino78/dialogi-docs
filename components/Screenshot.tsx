import React from "react";

interface ScreenshotProps {
  src?: string;
  alt: string;
  caption?: string;
}

export function Screenshot({ src, alt, caption }: ScreenshotProps) {
  if (!src) {
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
          📸
        </span>
        {alt || "Screenshot em breve"}
      </div>
    );
  }

  return (
    <figure style={{ margin: "24px 0" }}>
      <img
        src={src}
        alt={alt}
        style={{
          borderRadius: 12,
          border: "1px solid #E9ECEF",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          width: "100%",
          display: "block",
        }}
      />
      {caption && (
        <figcaption
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "#6C757D",
            marginTop: 8,
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
