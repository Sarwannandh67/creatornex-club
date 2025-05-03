// Google Apps Script for CreatorNex Club Join Form
// This script is deployed as a web app and connected to a Google Sheet by ID

/**
 * Process form data and append to Google Sheet
 */
function doPost(e) {
  try {
    Logger.log("Received data: " + JSON.stringify(e));
    Logger.log("Content type: " + e.contentType);
    Logger.log("Post data: " + e.postData.contents);
    
    const ss = SpreadsheetApp.openById("1H5-jVAnMiTTyUhzUqzR5Ax9H3c5eKXIX3zvPA1s8-Fs");
    const sheet = ss.getSheetByName("Sheet1");

    // Try to parse the data based on content type
    let data;
    
    try {
      // First try to parse as JSON
      data = JSON.parse(e.postData.contents);
      Logger.log("Successfully parsed JSON data");
    } catch (parseError) {
      Logger.log("Error parsing JSON: " + parseError);
      
      // If JSON parsing fails, check if it's form data
      if (e.parameter && e.parameter.data) {
        try {
          // Try to parse the data parameter as JSON
          data = JSON.parse(e.parameter.data);
          Logger.log("Successfully parsed form data parameter");
        } catch (formError) {
          Logger.log("Error parsing form data: " + formError);
          // Fall back to using the parameters directly
          data = e.parameter;
          Logger.log("Using form parameters directly");
        }
      } else {
        // Use whatever parameters were passed
        data = e.parameter || {};
        Logger.log("Using direct parameters");
      }
    }
    
    Logger.log("Final data to append: " + JSON.stringify(data));

    sheet.appendRow([
      data.fullName || "",
      data.email || "",
      data.rollNumber || "",
      data.interests || "",
      data.role || "",
      data.profileLinks || "",
      new Date()
    ]);

    return ContentService.createTextOutput("Success")
      .setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    Logger.log("Error in doPost: " + error);
    return ContentService.createTextOutput("Error: " + error)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ result: "success", message: "The CreatorNex Club application form API is working!" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function to verify script is working
 */
function testScript() {
  const ss = SpreadsheetApp.openById("1H5-jVAnMiTTyUhzUqzR5Ax9H3c5eKXIX3zvPA1s8-Fs");
  const sheet = ss.getSheetByName("Sheet1");
  
  Logger.log("Connected to spreadsheet ID: 1H5-jVAnMiTTyUhzUqzR5Ax9H3c5eKXIX3zvPA1s8-Fs");
  Logger.log("Found sheet: " + sheet.getName());
  Logger.log("Script is working correctly!");
}
