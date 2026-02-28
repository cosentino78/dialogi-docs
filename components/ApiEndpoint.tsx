import React from "react";

interface ApiEndpointProps {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  description?: string;
}

const methodColors: Record<string, { bg: string; text: string }> = {
  GET: { bg: "#EAFAF1", text: "#2ECC71" },
  POST: { bg: "#FFF5EE", text: "#FF6B2C" },
  PUT: { bg: "#EBF5FB", text: "#3498DB" },
  DELETE: { bg: "#FDEDEC", text: "#E74C3C" },
  PATCH: { bg: "#F5EEF8", text: "#8E44AD" },
};

export function ApiEndpoint({ method, url, description }: ApiEndpointProps) {
  const colors = methodColors[method] || methodColors.GET;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        borderRadius: 8,
        border: "1px solid #E9ECEF",
        background: "#F8F9FA",
        margin: "16px 0",
        fontFamily: "monospace",
        fontSize: 14,
      }}
    >
      <span
        style={{
          background: colors.bg,
          color: colors.text,
          fontWeight: 700,
          fontSize: 12,
          padding: "4px 10px",
          borderRadius: 6,
          flexShrink: 0,
        }}
      >
        {method}
      </span>
      <code style={{ color: "#1A1A2E", fontWeight: 500 }}>{url}</code>
      {description && (
        <span style={{ color: "#6C757D", fontSize: 13, marginLeft: "auto" }}>
          {description}
        </span>
      )}
    </div>
  );
}
