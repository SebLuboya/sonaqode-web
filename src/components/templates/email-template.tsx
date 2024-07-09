import * as React from "react";

interface EmailTemplateProps {
  name: string;
  content: string;
  companyName: string;
  email: string;
  phone: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  content,
  companyName,
  email,
  phone,
}) => (
  <table
    align="center"
    width="100%"
    cellPadding="0"
    cellSpacing="0"
    role="presentation"
    style={{
      maxWidth: "37.5em",
      backgroundColor: "#ffffff",
      border: "1px solid #f0f0f0",
      padding: "45px",
    }}
  >
    <tbody>
      <tr
        style={{
          width: "100%",
        }}
      >
        <td>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Sonaqode Logo"
            height="40"
            src="https://sonaqode-web.vercel.app/apple-touch-icon.png"
            style={{
              display: "block",
              outline: "none",
              border: "none",
              textDecoration: "none",
            }}
            width="40"
          />
          <table
            align="center"
            width="100%"
            style={{
              border: "0",
            }}
            cellPadding="0"
            cellSpacing="0"
            role="presentation"
          >
            <tbody>
              <tr>
                <td>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                      margin: "16px 0",
                      fontFamily:
                        "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
                      fontWeight: 300,
                      color: "#404040",
                    }}
                  >
                    Message From: {name},
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                      margin: "16px 0",
                      fontFamily:
                        "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
                      fontWeight: 300,
                      color: "#404040",
                    }}
                  >
                    Company Name: {companyName}, <br />
                    Email: {email}, <br />
                    Phone: {phone}, <br />
                  </p>

                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                      margin: "16px 0",
                      fontFamily:
                        "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
                      fontWeight: 300,
                      color: "#404040",
                    }}
                  >
                    {content}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
);
