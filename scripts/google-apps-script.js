/* eslint-disable */
/**
 * ============================================================================
 * TEKNOVIA CAREERS & RECRUITMENT BACKEND (GOOGLE APPS SCRIPT)
 * ============================================================================
 * Handles:
 * 1. Application submissions (Jobs & Internships)
 * 2. Uploading PDFs & documents to private Google Drive
 * 3. Dynamic Job Openings CMS management (Create, List, Toggle status)
 * 
 * SPREADSHEET TABS AUTO-CREATED:
 * 1. "Job Applications" - Candidate details + Resume links
 * 2. "Internship Applications" - Student details + College ID & Aadhaar links
 * 3. "Job Openings" - CMS tab for managing active roles and internships
 * ============================================================================
 */

const DRIVE_FOLDER_NAME = "Teknovia Career Applications";
const DRIVE_FOLDER_ID = ""; // Optional: paste specific Drive folder ID

const OPENINGS_HEADERS = [
  "ID",
  "Title",
  "Department",
  "Category",
  "Employment Type",
  "Location",
  "Workplace Type",
  "Experience Or Duration",
  "Stipend Or Salary",
  "Short Description",
  "Responsibilities (JSON)",
  "Requirements (JSON)",
  "Who You Are (JSON)",
  "Benefits (JSON)",
  "Featured",
  "Status",
  "Posted Date",
  "Updated At",
];

/**
 * Handle HTTP GET
 * - action=getOpenings: returns all or active openings
 * - default: health check
 */
function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const action = e && e.parameter ? e.parameter.action : "";

  if (action === "getOpenings") {
    const includeAll = e.parameter.all === "true"; // if true, returns both active and inactive (for admin)
    const openings = getOpeningsList(ss, includeAll);
    return jsonResponse({
      success: true,
      openings: openings,
      count: openings.length,
      timestamp: new Date().toISOString(),
    });
  }

  return jsonResponse({
    status: "online",
    message: "Teknovia Careers Google Apps Script Web App is active.",
    timestamp: new Date().toISOString(),
  });
}

/**
 * Handle HTTP POST
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(30000);

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: "No post data received" }, 400);
    }

    const data = JSON.parse(e.postData.contents);
    const formType = (data.formType || "job").toLowerCase();
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    const timestamp = Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone() || "GMT+5:30",
      "yyyy-MM-dd HH:mm:ss"
    );

    // ========================================================================
    // 1. ADMIN ACTION: CREATE OR UPDATE JOB OPENING
    // ========================================================================
    if (formType === "createopening") {
      const openingSheet = getOrCreateSheet(ss, "Job Openings", OPENINGS_HEADERS);
      const opening = data.opening || {};

      const id = (opening.id || slugify(opening.title) || "role-" + Date.now().toString(36)).trim();
      const title = opening.title || "Untitled Role";
      const department = opening.department || "General";
      const category = (opening.category || "job").toLowerCase(); // "job" or "internship"
      const type = opening.type || (category === "internship" ? "Internship" : "Full-time");
      const location = opening.location || "Noida, Sector 149";
      const workplaceType = opening.workplaceType || "Hybrid";
      const experienceOrDuration = opening.experience || opening.duration || (category === "internship" ? "3 - 6 Months" : "1 - 3 Years");
      const stipendOrSalary = opening.stipendOrSalary || "Competitive";
      const shortDescription = opening.shortDescription || "";
      const responsibilities = JSON.stringify(opening.responsibilities || []);
      const requirements = JSON.stringify(opening.requirements || []);
      const whoYouAre = JSON.stringify(opening.whoYouAre || []);
      const benefits = JSON.stringify(opening.benefits || []);
      const featured = opening.featured ? "Yes" : "No";
      const status = opening.status || "Active";
      const postedDate = opening.postedDate || Utilities.formatDate(new Date(), "GMT+5:30", "yyyy-MM-dd");

      // Check if role with this ID already exists (update it)
      const dataRange = openingSheet.getDataRange();
      const values = dataRange.getValues();
      let rowIndex = -1;

      for (let i = 1; i < values.length; i++) {
        if (values[i][0] && values[i][0].toString() === id) {
          rowIndex = i + 1; // 1-based index
          break;
        }
      }

      const rowData = [
        id,
        title,
        department,
        category,
        type,
        location,
        workplaceType,
        experienceOrDuration,
        stipendOrSalary,
        shortDescription,
        responsibilities,
        requirements,
        whoYouAre,
        benefits,
        featured,
        status,
        postedDate,
        timestamp,
      ];

      if (rowIndex > 0) {
        openingSheet.getRange(rowIndex, 1, 1, rowData.length).setValues([rowData]);
      } else {
        openingSheet.appendRow(rowData);
      }

      return jsonResponse({
        success: true,
        message: rowIndex > 0 ? "Opening updated successfully." : "Opening created successfully.",
        id: id,
      });
    }

    // ========================================================================
    // 2. ADMIN ACTION: TOGGLE OPENING STATUS (Active / Inactive)
    // ========================================================================
    if (formType === "toggleopeningstatus") {
      const openingSheet = getOrCreateSheet(ss, "Job Openings", OPENINGS_HEADERS);
      const targetId = data.id;
      const newStatus = data.status || "Inactive";

      const dataRange = openingSheet.getDataRange();
      const values = dataRange.getValues();
      let found = false;

      for (let i = 1; i < values.length; i++) {
        if (values[i][0] && values[i][0].toString() === targetId) {
          openingSheet.getRange(i + 1, 16).setValue(newStatus); // Column 16 is Status
          openingSheet.getRange(i + 1, 18).setValue(timestamp); // Column 18 is Updated At
          found = true;
          break;
        }
      }

      if (!found) {
        return jsonResponse({ success: false, error: "Opening not found." }, 404);
      }

      return jsonResponse({
        success: true,
        message: "Status updated to " + newStatus,
        id: targetId,
        status: newStatus,
      });
    }

    // ========================================================================
    // 3. CONTACT FORM, CALLBACK & ENQUIRY PROCESSING
    // ========================================================================
    if (formType === "contact" || formType === "message" || formType === "callback" || formType === "enquiry") {
      const sheet = getOrCreateSheet(ss, "Contact Submissions", [
        "Timestamp",
        "Submission Type",
        "Full Name",
        "Email Address",
        "Phone Number",
        "Company Name",
        "Service Requested",
        "Preferred Date",
        "Preferred Time",
        "Subject",
        "Message / Notes / Details",
      ]);

      const contactData = data.contact || data;
      sheet.appendRow([
        timestamp,
        contactData.type || formType,
        contactData.name || "",
        contactData.email || "",
        "'" + (contactData.phone || ""),
        contactData.company || "",
        contactData.service || "",
        contactData.date || "",
        contactData.time || "",
        contactData.subject || "",
        contactData.message || contactData.details || contactData.notes || "",
      ]);

      return jsonResponse({
        success: true,
        message: "Contact submission logged successfully to Google Sheet.",
      });
    }

    // Get or create destination Drive folder for candidate files
    const targetFolder = getOrCreateDriveFolder();

    // ========================================================================
    // 4. CANDIDATE INTERNSHIP APPLICATION PROCESSING
    // ========================================================================
    if (formType === "internship") {
      const sheet = getOrCreateSheet(ss, "Internship Applications", [
        "Timestamp",
        "Application ID",
        "Job / Role Applied",
        "Full Name",
        "Parents Name",
        "Phone Number",
        "Email Address",
        "Date of Birth",
        "City & State",
        "College Name",
        "Degree & Course",
        "Academic Status",
        "Graduation Year",
        "Skills",
        "Duration Preference",
        "Available Start Date",
        "Portfolio / LinkedIn",
        "Why Teknovia / Statement",
        "Resume Link",
        "College ID Link",
        "Aadhaar Card Link",
        "Consent Given",
      ]);

      const appId = "INT-" + Utilities.getUuid().slice(0, 8).toUpperCase();

      const resumeLink = saveFileToDrive(targetFolder, data.resumeFile, "Resume_" + data.fullName);
      const collegeIdLink = saveFileToDrive(targetFolder, data.collegeIdFile, "CollegeID_" + data.fullName);
      const aadhaarLink = saveFileToDrive(targetFolder, data.aadhaarFile, "Aadhaar_" + data.fullName);

      sheet.appendRow([
        timestamp,
        appId,
        data.jobTitle || "General Internship",
        data.fullName || "",
        data.parentName || "",
        "'" + (data.phone || ""),
        data.email || "",
        data.dob || "",
        data.location || "",
        data.collegeName || "",
        data.degree || "",
        data.academicStatus || "",
        data.gradYear || "",
        data.skills || "",
        data.internshipDuration || "",
        data.startDate || "",
        data.portfolioUrl || "",
        data.whyInternship || "",
        resumeLink || "Not Provided",
        collegeIdLink || "Not Provided",
        aadhaarLink || "Not Provided",
        data.consent ? "Yes" : "No",
      ]);

      return jsonResponse({
        success: true,
        message: "Internship application submitted successfully.",
        applicationId: appId,
      });

    // ========================================================================
    // 4. CANDIDATE JOB APPLICATION PROCESSING
    // ========================================================================
    } else {
      const sheet = getOrCreateSheet(ss, "Job Applications", [
        "Timestamp",
        "Application ID",
        "Role Applied",
        "Full Name",
        "Phone Number",
        "Email Address",
        "Current Location",
        "Highest Qualification",
        "Graduation Year",
        "Total Experience",
        "Current Company",
        "Current CTC",
        "Expected CTC",
        "Notice Period",
        "Key Skills",
        "Portfolio / LinkedIn",
        "Source",
        "Cover Letter Note",
        "Resume Drive Link",
        "Consent Given",
      ]);

      // If existing sheet is missing "Graduation Year" column, auto-insert it at column 9
      const lastCol = sheet.getLastColumn();
      if (lastCol >= 8) {
        const headerRow = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
        if (headerRow.indexOf("Graduation Year") === -1) {
          sheet.insertColumnAfter(8);
          sheet.getRange(1, 9).setValue("Graduation Year").setBackground("#009689").setFontColor("#FFFFFF").setFontWeight("bold");
        }
      }

      const appId = "JOB-" + Utilities.getUuid().slice(0, 8).toUpperCase();
      const resumeLink = saveFileToDrive(targetFolder, data.resumeFile, "Resume_" + data.fullName);

      sheet.appendRow([
        timestamp,
        appId,
        data.jobTitle || "General Application",
        data.fullName || "",
        "'" + (data.phone || ""),
        data.email || "",
        data.location || "",
        data.qualification || "",
        data.gradYear || data.graduationYear || "",
        data.totalExperience || "",
        data.currentCompany || "",
        data.currentCtc || "",
        data.expectedCtc || "",
        data.noticePeriod || "",
        data.skills || "",
        data.portfolioUrl || "",
        data.source || "",
        data.coverLetter || "",
        resumeLink || "Not Provided",
        data.consent ? "Yes" : "No",
      ]);

      return jsonResponse({
        success: true,
        message: "Job application submitted successfully.",
        applicationId: appId,
      });
    }

  } catch (error) {
    console.error("Critical doPost error:", error);
    return jsonResponse(
      {
        success: false,
        error: error.message || error.toString(),
      },
      500
    );
  } finally {
    lock.releaseLock();
  }
}

/**
 * Fetch Openings list from "Job Openings" sheet
 */
function getOpeningsList(ss, includeAll) {
  const sheet = ss.getSheetByName("Job Openings");
  if (!sheet) return [];

  const rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) return []; // Only header row

  const openings = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const status = row[15] || "Active";

    if (!includeAll && status.toString().toLowerCase() !== "active") {
      continue;
    }

    openings.push({
      id: row[0] ? row[0].toString() : "",
      title: row[1] ? row[1].toString() : "",
      department: row[2] ? row[2].toString() : "",
      category: row[3] ? row[3].toString().toLowerCase() : "job",
      type: row[4] ? row[4].toString() : "Full-time",
      location: row[5] ? row[5].toString() : "Noida, Sector 149",
      workplaceType: row[6] ? row[6].toString() : "Hybrid",
      experience: row[3] === "internship" ? undefined : (row[7] ? row[7].toString() : "1 - 3 Years"),
      duration: row[3] === "internship" ? (row[7] ? row[7].toString() : "3 - 6 Months") : undefined,
      stipendOrSalary: row[8] ? row[8].toString() : "Competitive",
      shortDescription: row[9] ? row[9].toString() : "",
      responsibilities: parseJsonSafe(row[10]),
      requirements: parseJsonSafe(row[11]),
      whoYouAre: parseJsonSafe(row[12]),
      benefits: parseJsonSafe(row[13]),
      featured: row[14] === "Yes" || row[14] === true,
      status: status,
      postedDate: row[16] ? Utilities.formatDate(new Date(row[16]), "GMT+5:30", "yyyy-MM-dd") : "",
    });
  }

  return openings;
}

function parseJsonSafe(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [parsed.toString()];
  } catch (e) {
    return value.toString().split("\n").filter(Boolean);
  }
}

function slugify(text) {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function saveFileToDrive(folder, fileObject, prefix) {
  if (!fileObject || !fileObject.base64 || !fileObject.fileName) {
    return "";
  }

  try {
    const rawData = fileObject.base64.replace(/^data:[^;]+;base64,/, "");
    const decodedBytes = Utilities.base64Decode(rawData);
    const mimeType = fileObject.mimeType || "application/octet-stream";
    const extension = fileObject.fileName.split(".").pop();
    const sanitizedPrefix = (prefix || "File").replace(/[^a-zA-Z0-9_-]/g, "_");
    const cleanFileName = sanitizedPrefix + "_" + Utilities.formatDate(new Date(), "GMT+5:30", "yyyyMMdd_HHmmss") + "." + extension;

    const blob = Utilities.newBlob(decodedBytes, mimeType, cleanFileName);
    const savedFile = folder.createFile(blob);
    return savedFile.getUrl();
  } catch (err) {
    console.error("Error saving file to Drive:", err);
    return "Error saving file: " + err.message;
  }
}

function getOrCreateDriveFolder() {
  if (DRIVE_FOLDER_ID && DRIVE_FOLDER_ID.trim() !== "") {
    try {
      return DriveApp.getFolderById(DRIVE_FOLDER_ID.trim());
    } catch (e) {
      console.warn("Folder ID not found, falling back to name lookup:", e);
    }
  }

  const existing = DriveApp.getFoldersByName(DRIVE_FOLDER_NAME);
  if (existing.hasNext()) {
    return existing.next();
  }

  return DriveApp.createFolder(DRIVE_FOLDER_NAME);
}

function getOrCreateSheet(ss, sheetName, headers) {
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(headers);

    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#009689");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    headerRange.setFontFamily("Arial");
    sheet.setFrozenRows(1);

    for (let i = 1; i <= headers.length; i++) {
      sheet.autoResizeColumn(i);
    }
  }

  return sheet;
}

function jsonResponse(data, statusCode) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  );
}
