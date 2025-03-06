const { emailTemplate } = require("./emailTemplate");
const {
  // clientEmailText,
  // ownerEmailText,
  auditEmailText,
} = require("./emailTexts");

// var clientMailOptions = ({ email, firstName, lastName }) => ({
//   from: "arbaj897ansari@gmail.com",
//   to: email,
//   subject: "Confirmation of Receipt - Clickster Inquiry",
//   text: clientEmailText({ firstName, lastName }),
// });

// var ownerMailOptions = (reqBody) => ({
//   from: "arbaj897ansari@gmail.com",
//   to: "arbaj897ansari@gmail.com",
//   subject: "New Client Inquiry",
//   text: ownerEmailText(reqBody),
// });
var ownerForAuditMailOptions = (reqBody) => ({
  from: "arbaj897ansari@gmail.com",
  to: "arbaj897ansari@gmail.com",
  subject: "New Client For Audit",
  html: emailTemplate(reqBody),
});

module.exports = {
  // clientMailOptions,
  // ownerMailOptions,
  ownerForAuditMailOptions,
};
