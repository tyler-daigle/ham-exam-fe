const host = "http://localhost";
const port = 8081;
const subElementCache = {};
const sectionCache = {};

export default {
  getSubelementDetails,
  getSubelements,
  getSectionsInSubelement
};
export function getSubelements(examName) {
  // /exams/examName to get this data
  console.log(examName);
  if (examName === "technician") {
    return [
      "T1",
      "T2",
      "T3",
      "T4",
      "T5",
      "T6",
      "T7",
      "T8",
      "T9",
      "T0"
    ];
  } else if (examName === "general") {
    return [
      "G1",
      "G2",
      "G3",
      "G4",
      "G5",
      "G6",
      "G7",
      "G8",
      "G9",
      "G0"
    ];
  } else if (examName === "amateur extra") {
    return [
      "E1",
      "E2",
      "E3",
      "E4",
      "E5",
      "E6",
      "E7",
      "E8",
      "E9",
      "E0"
    ];
  }
  return [];
}

export async function getSubelementDetails(subElementId) {
  // use /subelement/subElementId to get the details  
  if (subElementId in subElementCache) {
    console.log(`Found ${subElementId} in cache`);
    return subElementCache[subElementId];
  } else {
    console.log(`No cached version of ${subElementId}`);
    const res = await fetch(
      `${host}:${port}/subelement/${subElementId}`);
    const json = await res.json();
    subElementCache[subElementId] = json;
    return json;
  }
}

export async function getSectionsInSubelement(subElementId) {
  // /sections/subelement/subElementId to get the sections
  if (subElementId in sectionCache) {
    console.log(`Cache hit for sections in subelement ${subElementId}`);
    return sectionCache[subElementId];
  } else {
    const res = await fetch(
      `${host}:${port}/sections/subelement/${subElementId}`
    );
    const json = await res.json();
    sectionCache[subElementId] = json;
    return json;
  }
}