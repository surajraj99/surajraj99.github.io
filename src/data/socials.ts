export type SocialKey =
  | "email"
  | "scholar"
  | "pubmed"
  | "orcid"
  | "linkedin"
  | "twitter"
  | "github";

export interface Social {
  key: SocialKey;
  label: string;
  href: string;
  ariaLabel: string;
}

export const socials: Social[] = [
  {
    key: "email",
    label: "Email",
    href: "mailto:sur4002@med.cornell.edu",
    ariaLabel: "Email Suraj",
  },
  {
    key: "scholar",
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=w8Ra_mgAAAAJ",
    ariaLabel: "Google Scholar profile",
  },
  {
    key: "pubmed",
    label: "PubMed",
    href: "https://pubmed.ncbi.nlm.nih.gov/?term=suraj.rajendran.2",
    ariaLabel: "PubMed publications",
  },
  {
    key: "orcid",
    label: "ORCID",
    href: "https://orcid.org/0000-0002-8149-0157",
    ariaLabel: "ORCID profile",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/suraj-rajendran",
    ariaLabel: "LinkedIn profile",
  },
  {
    key: "twitter",
    label: "Twitter / X",
    href: "https://twitter.com/rajsuraj99",
    ariaLabel: "Twitter / X profile",
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/surajraj99",
    ariaLabel: "GitHub profile",
  },
];
