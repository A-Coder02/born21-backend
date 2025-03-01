var clientEmailText = ({ firstName, lastName }) => `
\n
Dear ${firstName} ${lastName},

I hope this message finds you well.
I wanted to inform you that we have received your inquiry regarding Clickster. Thank you for reaching out to us with your questions and interest in our services.
Our team is currently reviewing your inquiry, and we will provide you with a detailed response as soon as possible. We appreciate your patience in the meantime.
If you have any further questions or need immediate assistance, please do not hesitate to reach out to us.
Thank you once again for considering Clickster for your needs. We look forward to the opportunity to assist you.

Best regards,
Clickster
CEO
clickster@gmail.com
`;

const ownerEmailText = (clientInfo) => `

Dear Team,

A new client has expressed interest in your services. Below are the details:

Name: ${clientInfo.firstName} ${clientInfo.lastName}
Email: ${clientInfo.email}
Contact: ${clientInfo.contact}
Company Name: ${clientInfo.companyName}
Company Size: ${clientInfo.companySize}
Lead Generation: ${clientInfo.isLeadGeneration ? "Yes" : "No"}
E-commerce Marketing: ${clientInfo.isECommerceMakreting ? "Yes" : "No"}
SEO: ${clientInfo.isSEO ? "Yes" : "No"}
Collaborating: ${clientInfo.isCollaborating ? "Yes" : "No"}

Please follow up with the client at your earliest convenience.

`;

const auditEmailText = (clientInfo) => `
Subject: Client Seeking Audit for IT and Software Company

Dear Clickster Team,

I hope this message finds you well.

I wanted to inform you that we have received an inquiry from a potential client who is seeking an audit for their IT and Software company. Below are the details:

- Name: ${clientInfo.name}
- Company Name: ${clientInfo.companyName}
- Business Type: ${clientInfo.bType}
- Website: ${clientInfo.websiteUrl}
- Lead Generation: ${clientInfo.isLeadGeneration ? "Yes" : "No"}
- E-commerce Marketing: ${clientInfo.isECommerceMakreting ? "Yes" : "No"}
- SEO: ${clientInfo.isSEO ? "Yes" : "No"}
- Current Efforts: ${clientInfo.currentEfforst}
- Goals: ${clientInfo.goals}

Our team will be reviewing this inquiry and will respond with a detailed plan shortly.

If you have any further questions or need additional information, please do not hesitate to reach out to us.

Thank you for considering Clickster for your needs. We look forward to the opportunity to assist this potential client.

Best regards,

[Your Name]
[Your Position]
[Your Contact Information]
`;
module.exports = {
  ownerEmailText,
  clientEmailText,
  auditEmailText,
};
