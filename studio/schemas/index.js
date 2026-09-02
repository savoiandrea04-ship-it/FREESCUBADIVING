import { localeString, localeText } from "./localeTypes";
import diveTour from "./diveTour";
import divePackage from "./divePackage";
import course from "./course";
import faqItem from "./faqItem";
import review from "./review";
import siteText from "./siteText";
import pageText from "./pageText";
import pageSeo from "./pageSeo";

// All content types the client can manage from the Studio.
export const schemaTypes = [
  // reusable field types
  localeString,
  localeText,
  // documents
  siteText,
  pageText,
  pageSeo,
  diveTour,
  divePackage,
  course,
  faqItem,
  review,
];
