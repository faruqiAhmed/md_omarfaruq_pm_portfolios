import { jsPDF } from 'jspdf';
import { PERSONAL_INFO } from '../data/portfolioData';

/**
 * Generates a clean 1-page A4 PDF resume without any bottom footer watermark or awkward empty space.
 * All sections are proportionally budgeted to fit gracefully on a single page.
 */
export const generateResumePdf = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const margin = 15;
  const usableWidth = pageWidth - margin * 2; // 180mm
  let y = margin + 3;

  // Exact color palette matching the on-screen Resume modal (Tailwind Slate hierarchy)
  const slate900 = [15, 23, 42];   // #0f172a - Headings & candidate name
  const slate700 = [51, 65, 85];   // #334155 - Subtitle, body copy & bullets
  const slate600 = [71, 85, 105];  // #475569 - Dates, locations, meta labels
  const slate300 = [203, 213, 225];// #cbd5e1 - Primary header divider
  const slate200 = [226, 232, 240];// #e2e8f0 - Section underline dividers

  // 1. Header: Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(21);
  doc.setTextColor(slate900[0], slate900[1], slate900[2]);
  doc.text(PERSONAL_INFO.name.toUpperCase(), margin, y);
  y += 7.2;

  // 2. Subtitle: Product Manager | Technical Product Management
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.8);
  doc.setTextColor(slate700[0], slate700[1], slate700[2]);
  doc.text("Product Manager | Technical Product Management", margin, y);
  y += 5.5;

  // 3. Contact & Links Line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(slate600[0], slate600[1], slate600[2]);
  
  const contactPrefix = `${PERSONAL_INFO.location}  •  ${PERSONAL_INFO.phone}  •  ${PERSONAL_INFO.email}  •  `;
  doc.text(contactPrefix, margin, y);
  const prefixWidth = doc.getTextWidth(contactPrefix);

  const linkedinText = "linkedin.com/in/omarfaruqofficial";
  doc.setTextColor(slate900[0], slate900[1], slate900[2]);
  doc.text(linkedinText, margin + prefixWidth, y);
  const linkedinWidth = doc.getTextWidth(linkedinText);
  doc.setDrawColor(slate900[0], slate900[1], slate900[2]);
  doc.setLineWidth(0.2);
  doc.line(margin + prefixWidth, y + 0.5, margin + prefixWidth + linkedinWidth, y + 0.5);
  doc.link(margin + prefixWidth, y - 3, linkedinWidth, 4, { url: PERSONAL_INFO.linkedin });

  const bulletMid = "  •  ";
  doc.setTextColor(slate600[0], slate600[1], slate600[2]);
  doc.text(bulletMid, margin + prefixWidth + linkedinWidth, y);
  const bulletMidWidth = doc.getTextWidth(bulletMid);

  const githubX = margin + prefixWidth + linkedinWidth + bulletMidWidth;
  const githubText = "github.com/faruqiAhmed";
  doc.setTextColor(slate900[0], slate900[1], slate900[2]);
  doc.text(githubText, githubX, y);
  const githubWidth = doc.getTextWidth(githubText);
  doc.line(githubX, y + 0.5, githubX + githubWidth, y + 0.5);
  doc.link(githubX, y - 3, githubWidth, 4, { url: PERSONAL_INFO.github });
  y += 4.2;

  // Header Divider
  doc.setDrawColor(slate300[0], slate300[1], slate300[2]);
  doc.setLineWidth(0.4);
  doc.line(margin, y, margin + usableWidth, y);
  y += 4;

  // Section Header Generator
  const drawSection = (title: string) => {
    y += 4.2;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(slate900[0], slate900[1], slate900[2]);
    doc.text(title.toUpperCase(), margin, y);
    y += 1.8;
    doc.setDrawColor(slate200[0], slate200[1], slate200[2]);
    doc.setLineWidth(0.35);
    doc.line(margin, y, margin + usableWidth, y);
    y += 4.5;
  };

  // Section: Summary
  drawSection("Summary");
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.2);
  doc.setTextColor(slate700[0], slate700[1], slate700[2]);
  const summaryLines = doc.splitTextToSize(PERSONAL_INFO.summary, usableWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.3 + 2.2;

  // Section: Core & Technical Skills
  drawSection("Core & Technical Skills");
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.2);
  doc.setTextColor(slate900[0], slate900[1], slate900[2]);
  doc.text('Product Management: ', margin, y);
  const wPM = doc.getTextWidth('Product Management: ');
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(slate700[0], slate700[1], slate700[2]);
  const pmSkills = 'Product Strategy · SDLC · PRD Writing · Agile Discovery & Delivery (Scrum/Kanban) · Backlog Prioritization (RICE) · Wireframing (Figma) · User & Market Research · Product Analytics · Go-to-Market';
  const pmLines = doc.splitTextToSize(pmSkills, usableWidth - wPM);
  doc.text(pmLines, margin + wPM, y);
  y += pmLines.length * 4.3 + 1.5;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(slate900[0], slate900[1], slate900[2]);
  doc.text('Engineering & Tools: ', margin, y);
  const wTech = doc.getTextWidth('Engineering & Tools: ');
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(slate700[0], slate700[1], slate700[2]);
  const techSkills = 'Swift · iOS (UIKit, SwiftUI) · RESTful APIs · Firebase · Jira & Confluence · Git · SQL & Relational Databases · System Architecture & API Design';
  const techLines = doc.splitTextToSize(techSkills, usableWidth - wTech);
  doc.text(techLines, margin + wTech, y);
  y += techLines.length * 4.3 + 2.5;

  // Section: Professional Experience
  drawSection("Professional Experience");

  const renderJob = (
    role: string, 
    company: string, 
    dates: string, 
    loc: string, 
    bullets: string[]
  ) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.8);
    doc.setTextColor(slate900[0], slate900[1], slate900[2]);
    doc.text(role, margin, y);
    const rW = doc.getTextWidth(role);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(slate700[0], slate700[1], slate700[2]);
    doc.text(` — ${company}`, margin + rW, y);

    const right = `${dates} | ${loc}`;
    doc.setFontSize(8.8);
    doc.setTextColor(slate600[0], slate600[1], slate600[2]);
    doc.text(right, margin + usableWidth - doc.getTextWidth(right), y);
    y += 4.4;

    doc.setFontSize(9.1);
    doc.setTextColor(slate700[0], slate700[1], slate700[2]);
    bullets.forEach(b => {
      const bLines = doc.splitTextToSize(b, usableWidth - 5);
      doc.text('•', margin + 0.5, y);
      doc.text(bLines, margin + 4.5, y);
      y += bLines.length * 4.3 + 0.9;
    });
    y += 2;
  };

  renderJob(
    'Product Manager',
    'Nexcent Tech Ltd',
    'Jan 2025 – Present',
    'Dhaka, Bangladesh',
    [
      'Lead digital product consulting & SaaS incubation squads, establishing product vision, roadmaps, and sprint priorities across multiple client initiatives.',
      'Guide cross-functional teams through Agile discovery & delivery, stakeholder communication, and scoping — maintaining a 94% on-time milestone delivery rate.',
      'Shipped Outfit Sourcing BD, City University Alumni Platform, and Ullomart (e-commerce), owning each from concept and UX through launch.'
    ]
  );

  renderJob(
    'iOS Engineer',
    'ShareTrip Limited',
    'Oct 2022 – Dec 2024',
    'Dhaka, Bangladesh',
    [
      'Owned STPay fintech platform spanning Spend, Save, and Invest, collaborating from feature spec through App Store release for thousands of daily active users.',
      'Translated user-facing requirements into scalable Firebase-backed technical architecture in close partnership with design and backend teams.',
      'Weighed engineering trade-offs against user experience to prioritize sprint scope for live fintech operations.'
    ]
  );

  renderJob(
    'iOS Engineer',
    'Walletmix',
    'May 2021 – Oct 2022',
    'Dhaka, Bangladesh',
    [
      'Drove two full product releases (v1 and v2), reworking scope and requirements as the product matured and reducing SDK footprint from 28MB to 4.2MB.',
      'Defined scalable API contracts in collaboration with cross-functional partners to support growing usage across Robi Alpha and Shobar Dhaka.'
    ]
  );

  renderJob(
    'iOS Engineer',
    'Jr Consulting',
    'May 2020 – May 2021',
    'Remote — Australia',
    [
      'Owned the full product lifecycle — requirements, design, build, and deployment — as primary technical point of contact for international clients.'
    ]
  );

  // Section: Key Case Studies & Shipped Products
  drawSection("Key Case Studies & Shipped Products");
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.2);
  doc.setTextColor(slate700[0], slate700[1], slate700[2]);
  doc.text('• PM Case Studies: Pathao Cash-Out Redesign (fintech/mobility UX), bKash Merchant Onboarding, Google Maps Parking Finder.', margin, y);
  y += 4.6;
  doc.text('• Shipped Products: STPay (fintech) · TingTong (social) · Shobar Dhaka (local marketplace) · Robi Alpha · Ullomart (e-commerce).', margin, y);
  y += 5.5;

  // Section: Education & Credentials
  drawSection("Education & Credentials");

  // Degree line with date right-aligned
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.4);
  doc.setTextColor(slate900[0], slate900[1], slate900[2]);
  doc.text('B.Sc. in Computer Science & Engineering', margin, y);
  const degW = doc.getTextWidth('B.Sc. in Computer Science & Engineering');
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(slate700[0], slate700[1], slate700[2]);
  doc.text(' — City University, Dhaka', margin + degW, y);

  const datesEd = '2015 – 2019 | Dhaka, BD';
  doc.setFontSize(8.8);
  doc.setTextColor(slate600[0], slate600[1], slate600[2]);
  doc.text(datesEd, margin + usableWidth - doc.getTextWidth(datesEd), y);
  y += 4.6;

  // Certification on dedicated line to prevent collision
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.4);
  doc.setTextColor(slate900[0], slate900[1], slate900[2]);
  doc.text('Certification: ', margin, y);
  const cW = doc.getTextWidth('Certification: ');
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(slate700[0], slate700[1], slate700[2]);
  doc.text('Product Management — Human Development Network Bangladesh (HDNB Batch 1B8)', margin + cW, y);
  y += 4.6;

  // Honors
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(slate600[0], slate600[1], slate600[2]);
  const honors = 'Honors: 2019 National Scholar, ICT Ministry Bangladesh — Selected for national scholarship, built interactive Swift prototype with SpriteKit.';
  const hLines = doc.splitTextToSize(honors, usableWidth);
  doc.text(hLines, margin, y);

  // Save the single-page PDF (no bottom watermark or footer label)
  doc.save('MD_Omar_Faruq_Product_Manager_Resume.pdf');
};
