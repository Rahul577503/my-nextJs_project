import type { NextApiRequest, NextApiResponse } from 'next'
const postmark = require('postmark')
import clientPromise from '@/lib/mongodb'
import { IResponse } from './response'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  // const requestMethod = req.method
  const body = JSON.parse(req.body)
  const serverToken = '780103d5-5135-401c-9bff-77c1bd81f976'
  const client = new postmark.ServerClient(serverToken)
  let textBody = `Dear Sir! \r\n
We have received an enquiry. Details are given as below: \r\n

Name: ${body.firstName} ${body.lastName} \r\n
Email: ${body.email} \r\n
Mobile No.: ${body.mobile} \r\n
`
  let htmlBody = `
  <!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title>Enquiry</title>
    <style>
      html,
      body {
          margin: 0 auto !important;
          padding: 0 !important;
          height: 100% !important;
          width: 100% !important;
          background: #f1f1f1;
      }

      /* What it does: Stops email clients resizing small text. */
      * {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
      }

      /* What it does: Centers email on Android 4.4 */
      div[style*="margin: 16px 0"] {
          margin: 0 !important;
      }

      /* What it does: Stops Outlook from adding extra spacing to tables. */
      table,
      td {
          mso-table-lspace: 0pt !important;
          mso-table-rspace: 0pt !important;
      }

      /* What it does: Fixes webkit padding issue. */
      table {
          border-spacing: 0 !important;
          border-collapse: collapse !important;
          table-layout: fixed !important;
          margin: 0 auto !important;
      }

      /* What it does: Uses a better rendering method when resizing images in IE. */
      img {
          -ms-interpolation-mode:bicubic;
      }

      /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
      a {
          text-decoration: none;
      }

      /* What it does: A work-around for email clients meddling in triggered links. */
      *[x-apple-data-detectors],  /* iOS */
      .unstyle-auto-detected-links *,
      .aBn {
          border-bottom: 0 !important;
          cursor: default !important;
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
      }

      /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
      .a6S {
          display: none !important;
          opacity: 0.01 !important;
      }

      /* What it does: Prevents Gmail from changing the text color in conversation threads. */
      .im {
          color: inherit !important;
      }

      /* If the above doesn't work, add a .g-img class to any image in question. */
      img.g-img + div {
          display: none !important;
      }

      /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
      /* Create one of these media queries for each additional viewport size you'd like to fix */

      /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
      @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
          u ~ div .email-container {
              min-width: 320px !important;
          }
      }
      /* iPhone 6, 6S, 7, 8, and X */
      @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
          u ~ div .email-container {
              min-width: 375px !important;
          }
      }
      /* iPhone 6+, 7+, and 8+ */
      @media only screen and (min-device-width: 414px) {
          u ~ div .email-container {
              min-width: 414px !important;
          }
      }
    </style>
</head>
<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;">
	<center style="width: 100%;">
    <div style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
      &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>
    <div style="max-width: 600px; margin: 0 auto;" class="email-container">

    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
    <tr>
    <td style="padding: 20px 10px; background: #fff">
      <b>Dear Sir!</b><br/>
      <p>We have received an enquiry. Details are given as below:</p>
      <table style="width: 100%; border: 1px solid #ccc; padding: 3px 5px; border-collapse: collapse" border="1" cellspacing="1" cellpadding="10">
        <tr>
          <th width="40%" align="left"><b>Name: </b></th>
          <td>${body.firstName} ${body.lastName}</td>
        </tr>
        <tr>
          <th align="left"><b>Email: </b></th>
          <td>${body.email}</td>
        </tr>
        <tr>
          <th align="left"><b>Mobile No.: </b></th>
          <td>${body.mobile}</td>
        </tr>
      `

  if (body.qualification) {
    textBody += `Educational Qualification: ${body.qualification} \r\n`
    htmlBody += `<tr>
        <th align="left"><b>Educational Qualification: </b></th>
        <td>${body.qualification}</td>
      </tr>`
  }
  if (body.institute) {
    textBody += `Name of Institute: ${body.qualification} \r\n`
    htmlBody += `<tr>
        <th align="left"><b>Name of Institute: </b></th>
        <td align="left">${body.institute}</td>
      </tr>`
  }
  if (body.courses && Array.isArray(body.courses) && body.courses.length > 0) {
    textBody += `Courses interested in: ${body.courses.join(', ')} \r\n`
    htmlBody += `<tr>
        <th align="left"><b>Courses interested in: </b></th>
        <td align="left">${body.courses.join(', ')}</td>
      </tr>`
  }
  if (body.message) {
    textBody += `Message: ${body.message} \r\n`
    htmlBody += `<tr>
        <th align="left"><b>Message: </b></th>
        <td align="left">${body.message}</td>
      </tr>`
  }

  htmlBody += `</table>
  </td> 
  </tr>
  </table>
  </div>
  </center>
  </body>
</html>`

  try {
    const client = await clientPromise
    const db = client.db('faciomax')

    await db.collection('enquiries').insertOne({
      firstName: body?.firstName,
      lastName: body?.lastName,
      email: body?.email,
      mobile: body?.mobile,
      message: body?.message,
      qualification: body?.qualification,
      institute: body?.institute,
      courses: body?.courses,
      createdAt: new Date(),
      // updatedAt: new Date(),
    })
  } catch (e) {
    console.error(e)
  }

  const emailResp = await client.sendEmail({
    From: 'Facio Maxillary & Dental Health Centre <contact@zokoworld-dentalcare.com>',
    To:
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_TESTING_EMAIL
        : body?.institute
        ? process.env.NEXT_PUBLIC_ENQUIRY_EMAIL_COURSE
        : process.env.NEXT_PUBLIC_ENQUIRY_EMAIL,
    // Bcc: (process.env.NODE_ENV === 'development') ? null : process.env.NEXT_PUBLIC_TESTING_EMAIL,
    Cc: 'dsmaxfax@yahoo.com',
    ReplyTo: body.email,
    TrackOpens: true,
    Tag: body?.institute ? 'Course Enquiry' : 'Enquiry',
    Subject: 'An enquiry by ' + body.firstName + ' ' + body.lastName,
    TextBody: textBody,
    HtmlBody: htmlBody,
  })

  if (emailResp.Message === 'OK') {
    res.status(200).json({
      status: 200,
      message: 'Email has been sent!',
    })
  } else {
    res.status(500).json({
      status: 500,
      message: 'Email could not been sent!',
    })
  }
}
