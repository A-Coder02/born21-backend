const emailTemplate = (clientInfo) => {
  console.log({ clientInfo })
  return `
<!DOCTYPE html>
<html>
<head>
  <title>New Client for Audit - Born21</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #FAFFC1;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      margin: auto;
      border-left: 6px solid #FFE500;
    }
    .header {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      color: #0E375D;
      margin-bottom: 10px;
      border-radius: 8px;
      padding: 10px;
      background-color: #FFE500;
    }
    .subheader {
      text-align: center;
      font-size: 16px;
      color: #666666;
      margin-bottom: 20px;
    }
    .content {
      font-size: 16px;
      color: #555555;
      line-height: 1.6;
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 10px;
    }
    .highlight {
      font-weight: bold;
      color: #0E375D;
    }
    .btn {
      display: block;
      width: 80%;
      max-width: 250px;
      margin: 20px auto;
      padding: 12px 20px;
      background-color: #FF0000;
      color: #ffffff!important;
      text-decoration: none;
      font-weight: bold;
      border-radius: 20px;
      text-align: center;
    }
    .btn:hover {
      background-color: #cc0000;
    }
    .footer {
      text-align: center;
      font-size: 14px;
      color: #777777;
      margin-top: 20px;
      padding: 10px;
      border-radius: 8px;
      background-color: #FFE500;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="header">Born21 Media</div>
    <div class="subheader">🚀 New Client for Audit</div>
    
    <div class="content">
      <div style="background-color:black;color:white;padding: 6px 12px; border-radius: 32px;width:fit-content" >${clientInfo.case_study}</div>
      <p><span class="highlight">Name:</span> ${clientInfo.name}</p>
      <p><span class="highlight">Email:</span> ${clientInfo.email}</p>
      <p><span class="highlight">Company:</span> ${clientInfo.company_name}</p>
      <p><span class="highlight">YouTube Channel:</span> <a href="${clientInfo.youtube_channel}">${clientInfo.youtube_channel}</a></p>
      <p><span class="highlight">Growth Challenge:</span> ${clientInfo.youtube_growth_challenge}</p>
    </div>

    <a href="${clientInfo.youtube_channel}" class="btn">View Channel</a>

    <div class="footer">📺 Empowering Brands on YouTube | Born21 Media</div>
  </div>

</body>
</html>
`;
}

module.exports = { emailTemplate };
