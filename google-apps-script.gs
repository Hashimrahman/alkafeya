/**
 * Sky Fall International — Enquiry form → Google Sheets
 * ---------------------------------------------------------
 * This script receives the website enquiry form and appends each
 * submission as a new row in a Google Sheet. No backend/server needed.
 *
 * ============== ONE-TIME SETUP (≈ 2 minutes) ==============
 *
 * 1. Create a Google Sheet (sheets.new). Name it e.g. "Sky Fall Enquiries".
 *
 * 2. In that sheet: Extensions ▸ Apps Script. Delete any sample code and
 *    paste THIS entire file. Click the save icon.
 *
 * 3. Click "Deploy" ▸ "New deployment".
 *      - Click the gear ⚙ next to "Select type" ▸ choose "Web app".
 *      - Description: anything (e.g. "Enquiry form").
 *      - Execute as:  Me (your account).
 *      - Who has access:  "Anyone".          <-- important
 *      - Click "Deploy", then "Authorize access" and approve the permissions.
 *
 * 4. Copy the "Web app URL" it shows you (ends in /exec).
 *
 * 5. Paste that URL into src/constants.js as GOOGLE_SHEETS_URL, replacing
 *    the PASTE_YOUR... placeholder. Done — submissions now land in the sheet.
 *
 * NOTE: If you later EDIT this script, you must redeploy:
 *       Deploy ▸ Manage deployments ▸ edit ▸ Version: "New version" ▸ Deploy.
 *       (The /exec URL stays the same.)
 */

var SHEET_NAME = 'Enquiries'

function doPost(e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000) // avoid two submissions writing at once

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet()
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME)

    // Add a header row the first time.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Message'])
    }

    var data = (e && e.parameter) || {}
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.phone || '',
      data.message || '',
    ])

    return ContentService.createTextOutput(
      JSON.stringify({ result: 'success' }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', message: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON)
  } finally {
    lock.releaseLock()
  }
}

// Lets you open the /exec URL in a browser to confirm the app is live.
function doGet() {
  return ContentService.createTextOutput(
    'Sky Fall International enquiry endpoint is running.',
  )
}
