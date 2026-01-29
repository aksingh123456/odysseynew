import { useState } from "react";
import { useLocation } from "react-router-dom";
import { botFAQs } from "../data/botFAQs";

const ChatBot = () => {
  const location = useLocation();

  // Show chatbot ONLY on Home page
  if (location.pathname !== "/") return null;

  const [open, setOpen] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  return (
    <>
      {/* BOT ICON */}
      {!open && (
        <div
          onClick={() => setOpen(true)}
          style={{
            position: "absolute",
            bottom: "24px",
            right: "24px",
            cursor: "pointer",
            zIndex: 999,
          }}
        >
          <img
            src="/images/Chatbot1.jpg"
            alt="Bot"
            width="45"
            style={{ borderRadius: "50%" }}
          />
        </div>
      )}

      {/* CHAT WINDOW */}
      {open && (
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            right: "24px",
            width: "300px",
            height: "320px",
            background: "#fff",
            borderRadius: "0px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            zIndex: 1000,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {/* HEADER */}
<div
  style={{
    padding: "12px",
    background: "#ff8c00",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "500",
  }}
>
  {/* LEFT: LOGO + TITLE */}
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <img
      src="/images/Chatbot1.jpg"   // or your Odyl logo
      alt="Odyl Logo"
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "60%",
        objectFit: "cover",
      }}
    />
    <span>Odyl – Travel Assistant</span>
  </div>

  {/* RIGHT: CLOSE BUTTON */}
  <span
    style={{
      cursor: "pointer",
      fontSize: "13px",
      opacity: 0.8,
    }}
    onClick={() => setOpen(false)}
  >
    ✕
  </span>
</div>


          {/* BODY */}
          <div style={{ padding: "12px", flex: 1, overflowY: "auto" }}>
            {/* FAQ LIST */}
            {!selectedFAQ && (
              <>
                <p
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    fontWeight: "500",
                  }}
                >
                  FAQs
                </p>

                {botFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    onClick={() => setSelectedFAQ(faq)}
                    style={{
                      padding: "12px 8px",
                      borderBottom: "1px solid #eee",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "13px",
                    }}
                  >
                    <span>{faq.title}</span>
                    <span style={{ color: "#ff8c00" }}>›</span>
                  </div>
                ))}
              </>
            )}

            {/* ANSWER VIEW */}
            {selectedFAQ && (
              <>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    textDecoration: "underline",

                  }}
                >
                  {selectedFAQ.title}
                </p>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#444",
                    marginBottom: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  {selectedFAQ.answer}
                </p>

                <p
                  onClick={() => setSelectedFAQ(null)}
                  style={{
                    fontSize: "12px",
                    color: "#ff8c00",
                    cursor: "pointer",
                    marginBottom: "14px",
                  }}
                >
                  ← Back to FAQs
                </p>

                <div
                  onClick={() => {
                    setOpen(false);
                    window.location.href = "/contact";
                  }}
                  style={{
                    padding: "10px",
                    background: "#ff8c00",
                    color: "#fff",
                    borderRadius: "20px",
                    textAlign: "center",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  For more details, Contact Us
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

