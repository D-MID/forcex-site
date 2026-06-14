import { ServiceDetail } from '@/components/sections/ServiceModal'

export const serviceData: ServiceDetail[] = [
  {
    title: 'IT Support & Managed IT',
    tagline: 'Your tech runs. Always.',
    description: 'ForceX Tech provides proactive, enterprise-grade managed IT services for businesses across Sacramento and Northern California. We monitor your infrastructure around the clock, resolve issues before they become problems, and give you a predictable monthly cost instead of surprise repair bills.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    whatWeDeliver: [
      { title: '24/7 Remote Monitoring', description: 'Every server, workstation, and network device watched in real time. Alerts before failures.' },
      { title: 'Help Desk Support', description: 'Fast response via phone, email, or remote session. Your team never waits.' },
      { title: 'Patch Management', description: 'Automatic OS and software updates deployed on schedule, minimizing vulnerabilities.' },
      { title: 'Backup & Recovery', description: 'Automated daily backups with tested restore procedures. Disaster recovery plans included.' },
      { title: 'Vendor Management', description: 'We deal with ISPs, hardware reps, and software vendors so you don\'t have to.' },
      { title: 'Monthly Reporting', description: 'Clear executive reports showing uptime, incidents resolved, and system health.' },
    ],
    process: [
      { step: '01', title: 'Discovery Audit', description: 'We inventory your full environment — hardware, software, network, and security posture.' },
      { step: '02', title: 'Onboarding & Monitoring Setup', description: 'Agents deployed, dashboards configured, and your team introduced to the helpdesk.' },
      { step: '03', title: 'Active Management', description: 'Ongoing patching, monitoring, support tickets, and proactive maintenance each month.' },
      { step: '04', title: 'Quarterly Reviews', description: 'We meet with you to review performance and plan improvements or upgrades.' },
    ],
    benefits: ['Predictable monthly cost', 'Fewer downtime events', 'Faster issue resolution', 'Reduced internal IT burden', 'Compliance support', 'Scalable as you grow'],
    industries: ['Dental Offices', 'Medical Clinics', 'Law Firms', 'Construction', 'Property Management', 'Small Business'],
  },
  {
    title: 'UniFi Network Design',
    tagline: 'Enterprise wireless. Zero dead zones.',
    description: 'We design and deploy Ubiquiti UniFi networking systems that perform like Fortune 500 infrastructure — at a fraction of the cost. From single-office setups to multi-site enterprise deployments, every network is engineered for speed, security, and zero-headache management.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49"/>
        <path d="M20.07 3.93a10 10 0 010 16.14M3.93 20.07a10 10 0 010-16.14"/>
      </svg>
    ),
    whatWeDeliver: [
      { title: 'Wireless Site Survey', description: 'RF analysis and heat mapping to identify optimal AP placement before a single hole is drilled.' },
      { title: 'VLAN Segmentation', description: 'Separate networks for staff, guests, IoT, and security devices — keeping your data safe.' },
      { title: 'UniFi Controller Setup', description: 'Cloud-managed dashboard giving you full visibility and control over every device.' },
      { title: 'Firewall & Security Policies', description: 'Proper firewall rules, content filtering, and intrusion detection configured correctly.' },
      { title: 'Multi-Site Connectivity', description: 'Site-to-site VPN and centralized management across multiple locations.' },
      { title: 'Ongoing Network Support', description: 'Firmware updates, performance tuning, and helpdesk for any network issues.' },
    ],
    process: [
      { step: '01', title: 'Site Survey & Design', description: 'We walk your space, measure signal requirements, and produce a full network design doc.' },
      { step: '02', title: 'Hardware Procurement', description: 'We source genuine Ubiquiti hardware at competitive pricing and configure it off-site.' },
      { step: '03', title: 'Professional Installation', description: 'Clean cable runs, properly mounted APs, rack-mounted switches and firewalls.' },
      { step: '04', title: 'Testing & Handoff', description: 'Full speed and coverage testing, documentation provided, and team walkthrough.' },
    ],
    benefits: ['Full building coverage', 'Guest network isolation', 'VPN-ready', 'Scales to hundreds of devices', 'Cloud managed', 'Enterprise security'],
    industries: ['Dental Offices', 'Medical Clinics', 'Warehouses', 'Hotels', 'Schools', 'Office Buildings'],
  },
  {
    title: 'Structured Cabling',
    tagline: 'The foundation everything runs on.',
    description: 'Every reliable network starts with clean, professional cabling. ForceX Tech handles complete low-voltage infrastructure — Cat6/Cat6A data cabling, fiber, coax, patch panels, and server rack builds — for new construction, tenant improvements, and retrofits.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16v2H4zM4 10h16v2H4zM4 16h16v2H4z"/>
        <circle cx="20" cy="5" r="2"/><circle cx="20" cy="11" r="2"/><circle cx="20" cy="17" r="2"/>
      </svg>
    ),
    whatWeDeliver: [
      { title: 'Cat6 / Cat6A Data Cabling', description: 'Gigabit and 10G-ready horizontal cabling runs to every workstation and AP.' },
      { title: 'Fiber Optic Backbone', description: 'Single-mode and multi-mode fiber for inter-building and high-bandwidth connections.' },
      { title: 'Patch Panel & Rack Build', description: 'Clean, labeled, and organized server rack and IDF closet installations.' },
      { title: 'Cable Testing & Certification', description: 'Every run tested and certified with Fluke equipment. Full test reports provided.' },
      { title: 'Coax & Low Voltage', description: 'RG6 coax, speaker wire, conduit, and all other low-voltage infrastructure.' },
      { title: 'As-Built Documentation', description: 'Labeled ports, cable maps, and documentation so every wire is accounted for.' },
    ],
    process: [
      { step: '01', title: 'Scope & Blueprint Review', description: 'We review your floor plan and define outlet locations, closet placement, and routing paths.' },
      { step: '02', title: 'Conduit & Pathway', description: 'Conduit installed in walls, ceilings, and raised floors before cable is pulled.' },
      { step: '03', title: 'Cable Installation', description: 'Clean runs pulled, terminated, and dressed. No wire spaghetti — ever.' },
      { step: '04', title: 'Test, Label & Document', description: 'Every port certified, labeled, and mapped. Final documentation handed to client.' },
    ],
    benefits: ['Gigabit & 10G ready', 'Clean professional install', 'Certified test reports', 'Scalable for growth', 'Code compliant', 'As-built docs included'],
    industries: ['New Construction', 'Office Buildouts', 'Medical Facilities', 'Warehouses', 'Schools', 'Retail'],
  },
  {
    title: 'Security Camera Systems',
    tagline: 'See everything. Miss nothing.',
    description: 'ForceX Tech designs and installs commercial-grade IP camera systems that give you crystal-clear coverage, reliable recording, and remote access from anywhere. We use professional hardware — not the consumer junk you find at big-box stores.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    whatWeDeliver: [
      { title: 'IP Camera Installation', description: '4K resolution cameras — dome, bullet, PTZ, and fisheye — positioned for maximum coverage.' },
      { title: 'NVR / Cloud Recording', description: 'Network video recorders with local storage, plus optional cloud backup for redundancy.' },
      { title: 'Remote Access Setup', description: 'View live and recorded footage from your phone or computer anywhere in the world.' },
      { title: 'Night Vision & Low Light', description: 'IR and color night vision cameras that see clearly after dark.' },
      { title: 'License Plate Capture', description: 'Dedicated LPR cameras for parking lots, entrances, and driveways.' },
      { title: 'Ongoing Maintenance', description: 'Firmware updates, storage management, and camera health monitoring.' },
    ],
    process: [
      { step: '01', title: 'Site Walk & Coverage Plan', description: 'We map every blind spot and design a coverage plan before any equipment is ordered.' },
      { step: '02', title: 'Hardware Specification', description: 'We specify the right camera types for each location — indoor, outdoor, PTZ, LPR.' },
      { step: '03', title: 'Professional Installation', description: 'Cameras mounted, cabling run cleanly, NVR configured, all tested before we leave.' },
      { step: '04', title: 'Training & Handoff', description: 'Staff trained on viewing footage, pulling clips, and using the mobile app.' },
    ],
    benefits: ['4K resolution', 'Remote mobile access', 'Motion alerts', 'Night vision', 'Long retention', 'Tamper-resistant hardware'],
    industries: ['Retail', 'Dental & Medical', 'Warehouses', 'Property Management', 'Restaurants', 'Schools'],
  },
  {
    title: 'Access Control Systems',
    tagline: 'Who gets in is your decision.',
    description: 'Replace keys with smart, scalable access control. ForceX Tech installs keycard, fob, PIN, and mobile-credential access systems that let you control exactly who enters what, when — and give you a full audit trail of every door event.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    whatWeDeliver: [
      { title: 'Keycard & Fob Readers', description: 'Commercial-grade readers at every entry point, integrated with your door hardware.' },
      { title: 'Mobile Credential Access', description: 'Unlock doors with a smartphone — no cards needed.' },
      { title: 'Door Hardware & Strikes', description: 'Magnetic locks, electric strikes, and door closers installed and configured.' },
      { title: 'Management Software', description: 'Cloud dashboard to add/remove users, set schedules, and pull access logs instantly.' },
      { title: 'Intercom & Video Entry', description: 'Video intercom systems with remote unlock capability from phone or desk.' },
      { title: 'Multi-Door & Multi-Site', description: 'Scale from a single door to hundreds of access points across multiple locations.' },
    ],
    process: [
      { step: '01', title: 'Security Assessment', description: 'We evaluate your entry points, traffic flow, and security requirements.' },
      { step: '02', title: 'System Design', description: 'Door hardware spec, controller placement, and software platform selected.' },
      { step: '03', title: 'Installation & Integration', description: 'Hardware installed, wiring run, and system integrated with your security cameras if needed.' },
      { step: '04', title: 'Admin Training & Handoff', description: 'Your team learns to manage users, run reports, and handle lockouts.' },
    ],
    benefits: ['No more lost keys', 'Instant access revocation', 'Full audit trail', 'Time-based schedules', 'Scales with your business', 'Remote management'],
    industries: ['Medical Offices', 'Law Firms', 'Commercial Buildings', 'Schools', 'Government', 'Multi-Tenant Properties'],
  },
  {
    title: 'Smart Office & Home',
    tagline: 'Intelligent spaces that work for you.',
    description: 'ForceX Tech designs and builds smart environments where lighting, climate, AV, shading, and security all work together seamlessly. Whether it\'s a smart office conference room or a fully automated luxury home, we engineer it so everything just works.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    whatWeDeliver: [
      { title: 'Lighting Control', description: 'Lutron, Leviton, or Caseta dimmers and scenes — one button sets the mood for any activity.' },
      { title: 'Automated Shading', description: 'Motorized shades that respond to time of day, sunlight, or a single tap.' },
      { title: 'Climate Integration', description: 'Smart thermostat control tied to occupancy, schedule, and remote access.' },
      { title: 'Voice & App Control', description: 'Control everything via Alexa, Google Home, Apple HomeKit, or a dedicated app.' },
      { title: 'Conference Room AV', description: 'One-touch meeting room setup: displays on, calls connected, lights set.' },
      { title: 'Security Integration', description: 'Smart locks, cameras, and alarm systems all on one unified platform.' },
    ],
    process: [
      { step: '01', title: 'Needs Discovery', description: 'We understand how you live and work — what you want automated and why.' },
      { step: '02', title: 'System Design', description: 'Platform selection, device spec, and integration architecture designed for your space.' },
      { step: '03', title: 'Installation & Programming', description: 'Devices installed, scenes programmed, automations built and tested.' },
      { step: '04', title: 'Training & Support', description: 'Hands-on walkthrough and ongoing support so you always feel in control.' },
    ],
    benefits: ['Energy savings', 'One-touch control', 'Voice control', 'Remote access', 'Scalable platform', 'Luxury experience'],
    industries: ['Custom Homes', 'Dental Offices', 'Corporate Offices', 'Conference Centers', 'Hotels', 'High-End Retail'],
  },
  {
    title: 'Audio / Video Systems',
    tagline: 'Sound and vision done right.',
    description: 'From boardroom displays to whole-home audio and cinematic home theaters, ForceX Tech delivers AV systems that are calibrated for the space, easy to use, and built to last. No consumer gear, no guesswork — just professional results.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
      </svg>
    ),
    whatWeDeliver: [
      { title: 'Conference Room AV', description: 'Large displays, ceiling microphones, cameras, and one-click Teams/Zoom integration.' },
      { title: 'Digital Signage', description: 'Commercial displays in lobbies, waiting rooms, and common areas with remote content management.' },
      { title: 'Whole-Home Audio', description: 'In-ceiling and outdoor speakers with zone control — music in every room or just one.' },
      { title: 'Home Theater', description: 'Projectors or large format displays, surround sound, acoustic treatment, and seating.' },
      { title: 'TV Mounting & Wiring', description: 'Professional TV installation with concealed wiring — no cords visible, ever.' },
      { title: 'AV Rack & Control', description: 'Clean AV rack build with universal remote or touch panel control for everything.' },
    ],
    process: [
      { step: '01', title: 'Room Assessment', description: 'Acoustics, ambient light, seating positions, and usage patterns all evaluated.' },
      { step: '02', title: 'System Design', description: 'Equipment specified for the room — not overbuilt, not undersized.' },
      { step: '03', title: 'Installation & Calibration', description: 'Everything installed, cables hidden, and audio calibrated with measurement tools.' },
      { step: '04', title: 'Demo & Training', description: 'Hands-on walkthrough so every user is confident operating the system.' },
    ],
    benefits: ['Crystal clear audio', 'Professional calibration', 'Hidden wiring', 'Easy one-touch control', 'Commercial reliability', 'Scalable setup'],
    industries: ['Corporate Offices', 'Custom Homes', 'Medical Waiting Rooms', 'Restaurants', 'Churches', 'Schools'],
  },
  {
    title: 'Computer & Device Support',
    tagline: 'If it has a screen, we handle it.',
    description: 'ForceX Tech provides setup, maintenance, troubleshooting, and repair for all your business computers, laptops, printers, tablets, and peripheral devices. Fast turnaround, honest diagnostics, and solutions that actually stick.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    whatWeDeliver: [
      { title: 'Workstation Setup', description: 'New computers configured, software installed, and connected to your network and cloud services.' },
      { title: 'PC & Mac Repair', description: 'Hardware and software diagnosis and repair — from blue screens to slow performance.' },
      { title: 'Printer & Peripheral Setup', description: 'Network printers, scanners, and all peripherals configured for every workstation.' },
      { title: 'Data Migration', description: 'Safe transfer of files, email, and applications when upgrading or replacing computers.' },
      { title: 'Antivirus & Security', description: 'Endpoint protection deployed, configured, and monitored on every device.' },
      { title: 'Remote Support', description: 'Most issues resolved in minutes via secure remote session — no waiting for a technician on site.' },
    ],
    process: [
      { step: '01', title: 'Diagnosis', description: 'We identify the root cause — not just the symptom. Honest assessment up front.' },
      { step: '02', title: 'Quote & Approval', description: 'Clear pricing before any work begins. No surprise charges.' },
      { step: '03', title: 'Repair or Setup', description: 'Work completed efficiently with your data protected throughout.' },
      { step: '04', title: 'Testing & Follow-Up', description: 'Every repair tested before handoff. We follow up to confirm the fix held.' },
    ],
    benefits: ['Fast turnaround', 'Remote support available', 'No surprise billing', 'PC & Mac expertise', 'Data always protected', 'On-site or remote'],
    industries: ['Small Business', 'Dental Offices', 'Law Firms', 'Property Management', 'Contractors', 'Home Office'],
  },
]
