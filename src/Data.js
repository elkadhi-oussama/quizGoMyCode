export let dataQuiz = [
  {
    id: Math.random(),
    question:
      "A security analyst is designing the appropriate controls to limit unauthorized access to a physical site. The analyst has a directive to utilize the lowest possible budget. Which of the following would BEST meet the requirements?",
    response: [
      "Compensating controls",
      "Detective controls",
      "Preventive controls",
      "Deterrent controls",
    ],
    correct: "Deterrent controls",
  },

  {
    id: Math.random(),
    question:
      "Digital signatures use asymmetric encryption. This means the message is encrypted with:",
    response: [
      "the sender’s private key and decrypted with the recipient's public key.",
      "the sender's private key and decrypted with the sender's public key",
      "the sender's public key and decrypted with the sender's private key",
      "the sender's public key and decrypted with the recipient's private key",
    ],
    correct:
      " the sender’s private key and decrypted with the recipient's public key.",
  },
  {
    id: Math.random(),
    question:
      "Which of the following would be indicative of a hidden audio file found inside of a piece of source code?",
    response: [
      "Cipher surte",
      "Homomorphic encryption",
      "Steganography",
      "Blockchain",
    ],
    correct: "Steganography",
  },
  {
    id: Math.random(),
    question:
      "An organisation has decided to purchase an insurance policy because a risk assessment determined that the cost to remediate the risk is greater than the five-year cost of the insurance policy. The organization is enabling risk",
    response: [
      "A fire suppression system",
      "A fire alarm",
      "An HVAC system",
      "A smoke detector",
    ],
    correct: "An HVAC system",
  },
  {
    id: Math.random(),
    question:
      "Which of the following components can be used to consolidate and forward inbound Internet traffic to multiple cloud environments through a single firewall?",
    response: [
      "DNS sinkhole",
      "Transit gateway",
      "Edge computing",
      "Cloud hot site",
    ],
    correct: "Transit gateway",
  },
  {
    id: Math.random(),
    question:
      "An organization would like to give remote workers the ability to use applications hosted inside the corporate network Users will be allowed to use their personal computers or they will be provided organization assets Either way no data or applications will be installed locally on any user systems. Which of the following mobile solutions would accomplish these goals?",
    response: ["COPE", "MDM", "UTM", "VDI"],
    correct: "VDI",
  },
  {
    id: Math.random(),
    question:
      "An organization maintains several environments in which patches are developed and tested before being deployed to an operation status. Which of the following is the environment in which patches will be deployed just prior to being put into an operational status?",
    response: ["Development", "Production", "Staging", "Test"],
    correct: "Staging",
  },
  {
    id: Math.random(),
    question:
      "After reading a security bulletin, a network security manager is concerned that a malicious actor may have breached the network using the same software flaw. The exploit code is publicly available and has been reported as being used against other industries in the same vertical. Which of the following should the network security manager consult FIRST to determine a priority list for forensic review?",
    response: [
      "The vulnerability scan output",
      "The SIEM alerts",
      "The full packet capture data",
      "The IDS logs",
    ],
    correct: "The vulnerability scan output",
  },
  {
    id: Math.random(),
    question:
      "A security analyst is reviewing information regarding recent vulnerabilities. Which of the following will the analyst MOST likely consult to validate which platforms have been affected?",
    response: ["OSINT", "CVE", "SIEM", "CVSS"],
    correct: "CVE",
  },

  {
    id: Math.random(),
    question:
      "An organization hired a consultant to assist with an active attack, and the consultant was able to identify the compromised accounts and computers. Which of the following is the consultant MOST likely to recommend to prepare for eradication?",
    response: [
      "Segmenting the compromised accounts and computers into a honeynet so as to not alert the attackers.",
      "Logging off and deleting the compromised accounts and computers to eliminate attacker access.",
      "Isolating the compromised accounts and computers, cutting off all network and internet access.",
      "Quarantining the compromised accounts and computers, only providing them with network access",
    ],
    correct:
      "Isolating the compromised accounts and computers, cutting off all network and internet access.",
  },
  {
    id: Math.random(),
    question:
      "While checking logs, a security engineer notices a number of end users suddenly downloading files with the .t ar.gz extension. Closer examination of the files reveals they are PE32 files. The end users state they did not initiate any of the downloads. Further investigation reveals the end users all clicked on an external email containing an infected MHT file with an href link a week prior. Which of the following is MOST likely occurring?",
    response: [
      "The workstations are beaconing to a command-and-control server.",
      "A RAT was installed and is transferring additional exploit tools",
      "A logic bomb was executed and is responsible for the data transfers.",
      "A fireless virus is spreading in the local network environment.",
    ],
    correct: "A RAT was installed and is transferring additional exploit tools",
  },
  {
    id: Math.random(),
    question:
      "When selecting a technical solution for identity management, an architect chooses to go from an in-house to a third-party SaaS provider. Which of the following risk management strategies is this an example of?",
    response: ["Acceptance", "Mitigation", "Avoidance", "Transference"],
    correct: "Transference",
  },
  {
    id: Math.random(),
    question:
      "An organization has implemented a policy requiring the use of conductive metal lockboxes for personal electronic devices outside of a secure research lab. Which of the following did the organization determine to be the GREATEST risk to intellectual property when creating this policy?",
    response: [
      "Bluesnarfing of mobile devices",
      "Geotagging in the metadata of images",
      "Data exfiltration over a mobile hotspot",
      "The theft of portable electronic devices",
    ],
    correct: "Data exfiltration over a mobile hotspot",
  },
  {
    id: Math.random(),
    question:
      "A security analyst needs to produce a document that details how a security incident occurred, the steps that were taken for recovery, and how future incidents can be avoided. During which of the following stages of the response process will this activity take place?",
    response: ["Identification", "Recovery", "Lessons learned", "Preparation"],
    correct: "Lessons learned",
  },
  {
    id: Math.random(),
    question: "Which of the following types of controls is a turnstile?",
    response: ["Detective", "Technical", "Corrective", "Physical"],
    correct: "Physical",
  },
  {
    id: Math.random(),
    question:
      "Local guidelines require that all information systems meet a minimum-security baseline to be compliant. Which of the following can security administrators use to assess their system configurations against the baseline?",
    response: [
      "SOAR playbook",
      "Benchmarks",
      "Risk management framework",
      "Security control matrix",
    ],
    correct: "Benchmarks",
  },
  {
    id: Math.random(),
    question:
      "A penetration tester was able to compromise an internal server and is now trying to pivot the current session in a network lateral movement. Which of the following tools if available on the server, will provide the MOST useful information for the next assessment step?",
    response: ["Nmap", "Cuckoo", "Autopsy", "Memdump"],
    correct: "Nmap",
  },
  {
    id: Math.random(),
    question:
      "Which of the following organizations sets frameworks and controls for optimal security configuration on systems?",
    response: ["NIST", "GDPR", "PCI DSS", "ISO"],
    correct: "NIST",
  },
  {
    id: Math.random(),
    question:
      "A security analyst is concerned about critical vulnerabilities that have been detected on some applications running inside containers. Which of the following is the BEST remediation strategy?",
    response: [
      "Update the host in which the containers are running",
      "Patch each running container individually and test the application",
      "Update the base container image and redeploy the environment",
      "Include the containers in the regular patching schedule for servers",
    ],
    correct: "Update the host in which the containers are running",
  },
  {
    id: Math.random(),
    question:
      "A database administrator wants to grant access to an application that will be reading and writing data to a database. The database is shared by other applications also used by the finance department. Which of the following account types Is MOST appropriate for this purpose?",
    response: ["Shared", "eneric", "Admin", "Service"],
    correct: "Service",
  },
  {
    id: Math.random(),
    question:
      "Which of the following is the MOST relevant security check to be performed before embedding third-parry libraries in developed code?",
    response: [
      "Verify the number of companies that downloaded the third-party code and the number of contributions on the code repository",
      "Check to see if the third party has resources to create dedicated development and staging environments.",
      "Assess existing vulnerabilities affecting the third-parry code and the remediation efficiency of the libraries' developers.",
      "Read multiple penetration-testing reports for environments running software that reused the library",
    ],
    correct:
      " Assess existing vulnerabilities affecting the third-parry code and the remediation efficiency of the libraries' developers.",
  },
  {
    id: Math.random(),
    question:
      "An IT manager is estimating the mobile device budget for the upcoming year Over the last five years, the number of devices that were replaced due to loss damage or theft steadily increased by 10%. Which of the following would BEST describe the estimated number of devices to be replaced next year?",
    response: ["RPO", "ARO", "SLE", "ALE"],
    correct: "ARO",
  },
  {
    id: Math.random(),
    question:
      "A security policy states that common words should not be used as passwords. A security auditor was able to perform a dictionary attack against corporate credentials. Which of the following controls was being violated?",
    response: [
      "Password history",
      "Password length",
      "Password reuse",
      "Password complexity",
    ],
    correct: "Password complexity",
  },
  {
    id: Math.random(),
    question:
      "A company is auditing the manner in which its European customers' personal information is handled. Which of the following should the company consult?",
    response: ["PCI DSS", "ISO", "NIST", "GDPR"],
    correct: "GDPR",
  },
  {
    id: Math.random(),
    question:
      "The board of doctors at a company contracted with an insurance firm to limit the organization’s liability. Which of the following risk management practices does the BEST describe?",
    response: ["Avoidance", "Transference", "Mitigation", "Acknowledgement"],
    correct: "Transference",
  },
  {
    id: Math.random(),
    question:
      "Which of the following is a known security nsk associated with data archives that contain financial information?",
    response: [
      "Data must be archived off-site to avoid breaches and meet business requirements",
      "Unencrypted archives should be preserved as long as possible and encrypted",
      "Data can become a liability if archived longer than required by regulatory guidance",
      "Companies are prohibited from providing archived data to e-discovery requests",
    ],
    correct:
      "Data can become a liability if archived longer than required by regulatory guidance",
  },
  {
    id: Math.random(),
    question:
      "A document that appears to be malicious has been discovered in an email that was sent to a company's Chief Financial Officer (CFO). Which of the following would be BEST to allow a security analyst to gather information and confirm it is a malicious document without executing any code it may contain?",
    response: [
      "Open the document on an air-gapped network",
      "Detonate the document in an analysis sandbox",
      "Search for matching file hashes on malware websites",
      "View the document's metadata for origin clues",
    ],
    correct: "Detonate the document in an analysis sandbox",
  },
  {
    id: Math.random(),
    question:
      "To reduce costs and overhead, an organization wants to move from an on-premises email solution to a cloud-based email solution. At this time, no other services will be moving. Which of the following cloud models would BEST meet the needs of the organization?",
    response: ["SaaS", "PaaS", "IaaS", "MaaS"],
    correct: "SaaS",
  },
  {
    id: Math.random(),
    question:
      "To secure an application after a large data breach, an e-commerce site will be resetting all users’ credentials. Which of the following will BEST ensure the site’s users are not compromised after the reset?",
    response: [
      "A password reuse policy",
      "Encrypted credentials in transit",
      "A geofencing policy based on login history",
      "Account lockout after three failed attempts",
    ],
    correct: "A password reuse policy",
  },
  {
    id: Math.random(),
    question: `A smart retail business has a local store and a newly established and growing online storefront. A recent storm caused a power outage to the business and the local ISP, resulting in several hours of lost sales and delayed order processing. The business owner now needs to ensure two things:
* Protection from power outages
* Always-available connectivity In case of an outage
The owner has decided to implement battery backups for the computer equipment Which of the following would BEST fulfill the owner's second need?`,
    response: [
      "Connect the business router to its own dedicated UPS.",
      "Replace the business's wired network with a wireless network.",
      "Lease a point-to-point circuit to provide dedicated access.",
      "Purchase services from a cloud provider for high availability",
    ],
    correct: "Purchase services from a cloud provider for high availability",
  },
  {
    id: Math.random(),
    question:
      "A security analyst needs to generate a server certificate to be used for 802.1X and secure RDP connections. The analyst is unsure what is required to perform the task and solicits help from a senior colleague. Which of the following is the FIRST step the senior colleague will most likely tell the analyst to perform to accomplish this task?",
    response: [
      "Create an OCSP",
      "Generate a CSR",
      "Create a CRL",
      "Generate a .pfx file",
    ],
    correct: "Generate a CSR",
  },
  {
    id: Math.random(),
    question:
      "An analyst needs to set up a method for securely transferring files between systems. One of the requirements is to authenticate the IP header and the payload. Which of the following services would BEST meet the criteria?",
    response: ["PFS", "AH", "ESP", "TLS"],
    correct: "TLS",
  },
  {
    id: Math.random(),
    question:
      "An organization has hired a security analyst to perform a penetration test. The analyst captures 1Gb worth of inbound network traffic to the server and transfer the pcap back to the machine for analysis. Which of the following tools should the analyst use to further review the pcap?",
    response: ["Netcat", "cURL", "Wireshark"],
    correct: "Wireshark",
  },
  {
    id: Math.random(),
    question:
      "The facilities supervisor for a government agency is concerned about unauthorized access to environmental systems in the event the staff WiFi network is breached. Which of the blowing would BEST address this security concern?",
    response: [
      "Segment the staff WiFi network from the environmental systems network.",
      "install a smart meter on the staff WiFi.",
      "Place the environmental systems in the same DHCP scope as the staff WiFi.",
      "Implement Zigbee on the staff WiFi access points.",
    ],
    correct:
      "Segment the staff WiFi network from the environmental systems network.",
  },
  {
    id: Math.random(),
    question:
      "A Chief Information Security Officer (CISO) is concerned about the organization's ability to continue business operation in the event of a prolonged DDoS attack on its local datacenter that consumes database resources. Which of the following will the CISO MOST likely recommend to mitigate this risk?",
    response: [
      "Implement a challenge response test on all end-user queries",
      "Implement a hot-site failover location",
      "Switch to a complete SaaS offering to customers",
      "Upgrade the bandwidth available into the datacenter",
    ],
    correct: "Implement a hot-site failover location",
  },
  {
    id: Math.random(),
    question:
      "A company recently set up an e-commerce portal to sell its product online. The company wants to start accepting credit cards for payment, which requires compliance with a security standard. Which of the following standards must the company comply with before accepting credit cards on its e-commerce platform?",
    response: ["PCI DSS", "NIST CSF", "ISO 27001", "ISO 22301"],
    correct: "PCI DSS",
  },
  {
    id: Math.random(),
    question:
      "A security administrator currently spends a large amount of time on common security tasks, such aa report generation, phishing investigations, and user provisioning and deprovisioning This prevents the administrator from spending time on other security projects. The business does not have the budget to add more staff members. Which of the following should the administrator implement?",
    response: ["SOAR", "SCAP", "ABAC", "DAC"],
    correct: "SOAR",
  },
  {
    id: Math.random(),
    question:
      "A financial organization has adopted a new secure, encrypted document-sharing application to help with its customer loan process. Some important PII needs to be shared across this new platform, but it is getting blocked by the DLP systems. Which of the following actions will BEST allow the PII to be shared with the secure application without compromising the organization’s security posture?",
    response: [
      "Configure the application to encrypt the PII",
      "Configure the firewall to allow all ports that are used by this application",
      "Configure the DLP policies to whitelist this application with the specific PII",
      "Configure the antivirus software to allow the application",
      "Configure the DLP policies to allow all PII",
    ],
    correct:
      "Configure the DLP policies to whitelist this application with the specific PII",
  },
  {
    id: Math.random(),
    question:
      "A small company that does not have security staff wants to improve its security posture. Which of the following would BEST assist the company?",
    response: ["SOAR", "MSSP", "PaaS", "IaaS"],
    correct: "MSSP",
  },
  {
    id: Math.random(),
    question:
      "A security analyst reviews the datacenter access logs for a fingerprint scanner and notices an abundance of errors that correlate with users' reports of issues accessing the facility. Which of the following MOST likely the cause of the cause of the access issues?",
    response: [
      "Attestation",
      "Efficacy rale",
      "Cross-over error rate",
      "False rejection",
    ],
    correct: "False rejection",
  },
  {
    id: Math.random(),
    question:
      "Which of the following describes the BEST approach for deploying application patches?",
    response: [
      "Apply the patches to systems in a testing environment then to systems in a staging environment, and finally to production systems.",
      "Test the patches in a staging environment, develop against them in the development environment, andthen apply them to the production systems",
      "Apply the patches to the production systems apply them in a staging environment, and then test all of them in a testing environment",
      "Test the patches m a test environment apply them to the production systems and then apply them to a staging environment",
    ],
    correct:
      "Apply the patches to systems in a testing environment then to systems in a staging environment, and finally to production systems.",
  },
  {
    id: Math.random(),
    question:
      "A network engineer is troubleshooting wireless network connectivity issues that were reported by users. The issues are occurring only in the section of the building that is closest to the parking lot. Users are intermittently experiencing slow speeds when accessing websites and are unable to connect to network drives. The issues appear to increase when laptop users return desks after using their devices in other areas of the building. There have also been reports of users being required to enter their credentials on web pages in order to gain access to them. Which of the following is the MOST likely cause of this issue?",
    response: [
      "An external access point is engaging in an evil-twin attack",
      "The users in that section of the building are on a VLAN that is being blocked by the firewall.",
      "The signal on the WAP needs to be increased in that section of the building.",
      "The certificates have expired on the devices and need to be reinstalled.",
    ],
    correct: "An external access point is engaging in an evil-twin attack",
  },
  {
    id: Math.random(),
    question:
      "A cybersecurity department purchased o new PAM solution. The team is planning to randomize the service account credentials of the Windows server first. Which of the following would be the BEST method to increase the security on the Linux server?",
    response: [
      "Use SSH keys and remove generic passwords",
      "Remove all user accounts.",
      "Randomize the shared credentials",
      "Use only guest accounts to connect",
    ],
    correct: "Use SSH keys and remove generic passwords",
  },
  {
    id: Math.random(),
    question:
      "Several employees return to work the day after attending an industry trade show. That same day, the security manager notices several malware alerts coming from each of the employee’s workstations. The security manager investigates but finds no signs of an attack on the perimeter firewall or the NIDS. Which of the following is MOST likely causing the malware alerts?",
    response: [
      "A worm that has propagated itself across the intranet, which was initiated by presentation media",
      "A Trojan that has passed through and executed malicious code on the hosts",
      "A fileless virus that is contained on a vCard that is attempting to execute an attack",
      "A USB flash drive that is trying to run malicious code but is being blocked by the host firewall",
    ],
    correct:
      "A worm that has propagated itself across the intranet, which was initiated by presentation media",
  },
  {
    id: Math.random(),
    question:
      "A user recent an SMS on a mobile phone that asked for bank delays. Which of the following social-engineering techniques was used in this case?",
    response: ["SPIM", "Spear phishing", "Smishing", "Vishing"],
    correct: "Smishing",
  },
  {
    id: Math.random(),
    question:
      "A security analyst has received an alert about being sent via email. The analyst’s Chief information Security Officer (CISO) has made it clear that PII must be handle with extreme care From which of the following did the alert MOST likely originate?",
    response: ["S/MIME", "IMAP", "HIDS", "DLP"],
    correct: "DLP",
  },
  {
    id: Math.random(),
    question:
      "An organization has hired a security analyst to perform a penetration test. The analyst captures 1Gb worth of inbound network traffic to the server and transfer the pcap back to the machine for analysis. Which of the following tools should the analyst use to further review the pcap?",
    response: ["Wireshark", "Nmap", "cURL", "Netcat"],
    correct: "Wireshark",
  },
  {
    id: Math.random(),
    question:
      "A forensics examiner is attempting to dump password cached in the physical memory of a live system but keeps receiving an error message. Which of the following BEST describes the cause of the error?",
    response: [
      "The examiner does not have administrative privileges to the system",
      "The swap file needs to be unlocked before it can be accessed",
      "Checksum mismatches are invalidating the disk image",
      "The system must be taken offline before a snapshot can be created",
    ],
    correct:
      "The examiner does not have administrative privileges to the system",
  },
  {
    id: Math.random(),
    question:
      "To secure an application after a large data breach, an e-commerce site will be resetting all users’ credentials. Which of the following will BEST ensure the site’s users are not compromised after the reset?",
    response: [
      "password reuse policy",
      "Encrypted credentials in transit",
      "A geofencing policy based on login history",
      "Account lockout after three failed attempts",
    ],
    correct: "A geofencing policy based on login history",
  },
  {
    id: Math.random(),
    question:
      "An engineer wants to access sensitive data from a corporate-owned mobile device. Personal data is not allowed on the device. Which of the following MDM configurations must be considered when the engineer travels for business?",
    response: [
      "Screen locks",
      "Application management",
      "Geofencing",
      "Containerization",
    ],
    correct: "Containerization",
  },
  {
    id: Math.random(),
    question:
      "A smart switch has the ability to monitor electrical levels and shut off power to a building in the event of power surge or other fault situation. The switch was installed on a wired network in a hospital and is monitored by the facilities department via a cloud application. The security administrator isolated the switch on a separate VLAN and set up a patch routine. Which of the following steps should also be taken to harden the smart switch?",
    response: [
      "Install a cable lock on the switch",
      "Change the default password for the switch.",
      "Set up an air gap for the switch",
      "Place the switch In a Faraday cage",
    ],
    correct: "Change the default password for the switch.",
  },
  {
    id: Math.random(),
    question:
      "Some laptops recently went missing from a locked storage area that is protected by keyless RFID-enabled locks. There is no obvious damage to the physical space. The security manager identifies who unlocked the door, however, human resources confirms the employee was on vacation at the time of the incident. Which of the following describes what MOST likely occurred?",
    response: [
      "The employee is colluding with human resources",
      "A criminal used lock picking tools to open the door.",
      "The employee's biometrics were harvested",
      "The employee's physical access card was cloned",
    ],
    correct: "The employee's physical access card was cloned",
  },
  {
    id: Math.random(),
    question:
      "A company has drafted an insider-threat policy that prohibits the use of external storage devices. Which of the following would BEST protect the company from data exfiltration via removable media?",
    response: [
      "Blocking removable-media devices and write capabilities using a host-based security tool",
      "Monitoring large data transfer transactions in the firewall logs",
      "Developing mandatory training to educate employees about the removable media policy",
      "Implementing a group policy to block user access to system files",
    ],
    correct:
      "Blocking removable-media devices and write capabilities using a host-based security tool",
  },
  {
    id: Math.random(),
    question:
      "A document that appears to be malicious has been discovered in an email that was sent to a company's Chief Financial Officer (CFO). Which of the following would be BEST to allow a security analyst to gather information and confirm it is a malicious document without executing any code it may contain?",
    response: [
      "View the document's metadata for origin clues",
      "Search for matching file hashes on malware websites",
      "Detonate the document in an analysis sandbox",
      "Open the document on an air-gapped network",
    ],
    correct: "Detonate the document in an analysis sandbox",
  },
  {
    id: Math.random(),
    question:
      "A security audit has revealed that a process control terminal is vulnerable to malicious users installing and executing software on the system. The terminal is beyond end-of-life support and cannot be upgraded, so it is placed on a projected network segment. Which of the following would be MOST effective to implement to further mitigate the reported vulnerability?",
    response: [
      "DLP rules on the terminal",
      "DNS sinkholding",
      "An IP blacklist",
      "Application whitelisting",
    ],
    correct: "Application whitelisting",
  },
  {
    id: Math.random(),
    question:
      "A network administrator is setting up wireless access points in all the conference rooms and wants to authenticate device using PKI. Which of the following should the administrator configure?",
    response: ["PSK", "A captive portal", "WPS", "802.1X"],
    correct: "802.1X",
  },
  {
    id: Math.random(),
    question:
      "A recent audit uncovered a key finding regarding the use of a specific encryption standard in a web application that is used to communicate with business customers. Due to the technical limitations of its customers the company is unable to upgrade the encryption standard. Which of the following types of controls should be used to reduce the risk created by this scenario?",
    response: ["Detective", "Preventive", "Compensating", "Physical"],
    correct: "Compensating",
  },
  {
    id: Math.random(),
    question:
      "A malicious actor recently penetration a company’s network and moved laterally to the datacenter. Upon investigation, a forensics firm wants to know was in the memory on the compromised server. Which of the following files should be given to the forensics firm?",
    response: ["Application", "Security", "Dump", "Syslog"],
    correct: "Dump",
  },
  {
    id: Math.random(),
    question:
      "A security analyst needs to be proactive in understand the types of attacks that could potentially target the company's execute. Which of the following intelligence sources should to security analyst review?",
    response: [
      "Structured threat information expression",
      "Vulnerability feeds",
      "Trusted automated exchange of indicator information",
      "Industry information-sharing and collaboration groups",
    ],
    correct: "Industry information-sharing and collaboration groups",
  },
  {
    id: Math.random(),
    question:
      "A startup company is using multiple SaaS and IaaS platform to stand up a corporate infrastructure and build out a customer-facing web application. Which of the following solutions would be BEST to provide security, manageability, and visibility into the platforms?",
    response: ["SIEM", "DLP", "SWG", "CASB"],
    correct: "CASB",
  },
  {
    id: Math.random(),
    question:
      "A security analyst receives the configuration of a current VPN profile and notices the authentication is only applied to the IP datagram portion of the packet. Which of the following should the analyst implement to authenticate the entire packet?",
    response: ["AH", "ESP", "LDAP", "SRTP"],
    correct: "ESP",
  },
  {
    id: Math.random(),
    question:
      "Some laptops recently went missing from a locked storage area that is protected by keyless RFID-enabled locks. There is no obvious damage to the physical space. The security manager identifies who unlocked the door, however, human resources confirms the employee was on vacation at the time of the incident. Which of the following describes what MOST likely occurred?",
    response: [
      "The employee's physical access card was cloned",
      "The employee is colluding with human resources",
      "The employee's biometrics were harvested",
      "A criminal used lock picking tools to open the door.",
    ],
    correct: "The employee's physical access card was cloned",
  },
  {
    id: Math.random(),
    question:
      "Which of the following job roles would sponsor data quality and data entry initiatives that ensure business and regulatory requirements are met?",
    response: [
      "The data owner",
      "The data privacy officer.",
      "The data processor",
      "The data steward",
    ],
    correct: "The data steward",
  },
  {
    id: Math.random(),
    question:
      "Which of the following relets to applications and systems that are used within an organization without consent or approval?",
    response: ["OSINT", "Dark web", "Shadow IT", "Insider threats"],
    correct: "Shadow IT",
  },
  {
    id: Math.random(),
    question:
      "A recently discovered zero-day exploit utilizes an unknown vulnerability in the SMB network protocol to rapidly infect computers. Once infected, computers are encrypted and held for ransom. Which of the following would BEST prevent this attack from reoccurring?",
    response: [
      "Ensure endpoint detection and response systems are alerting on suspicious SMB connections.",
      "Deny unauthenticated users access to shared network folders.",
      "Configure the perimeter firewall to deny inbound external connections to SMB ports.",
      "Verify computers are set to install monthly operating system, updates automatically.",
    ],
    correct:
      "Configure the perimeter firewall to deny inbound external connections to SMB ports.",
  },
  {
    id: Math.random(),
    question:
      "An administrator is experiencing issues when trying to upload a support file to a vendor A pop-up message reveals that a payment card number was found in the file, and the file upload was Mocked. Which of the following controls is most likely causing this issue and should be checked FIRST?",
    response: ["MDM", "Content filter", "DLP", "Firewall rule"],
    correct: "DLP",
  },

  {
    id: Math.random(),
    question:
      "An engineer recently deployed a group of 100 web servers in a cloud environment. Per the security policy, all web-server ports except 443 should be disabled. Which of the following can be used to accomplish this task?",
    response: [
      "Host-based firewall",
      "VPN",
      "SWG",
      "Application allow list",
      ,
    ],
    correct: "Host-based firewall",
  },
  {
    id: Math.random(),
    question:
      "Which of the following is a benefit of including a risk management framework into an organization's security approach?",
    response: [
      "It provides legal assurances and remedies in the event a data breach occurs",
      "It defines expected service levels from participating supply chain partners to ensure system outages are remediated in a timely manner",
      "It identifies specific vendor products that have been tested and approved for use in a secure environment.",
      "It incorporates control, development, policy, and management activities into IT operations.",
    ],
    correct:
      "It incorporates control, development, policy, and management activities into IT operations.",
  },
  {
    id: Math.random(),
    question:
      "The Chief Compliance Officer from a bank has approved a background check policy for all new hires. Which of the following is the policy MOST likely protecting against?",
    response: [
      "Ensuring no new hires have worked at other banks that may be trying to steal customer information",
      "Preventing any current employees' siblings from working at the bank to prevent nepotism",
      "Hiring an employee who has been convicted of theft to adhere to industry compliance",
      "Filtering applicants who have added false information to resumes so they appear better qualified",
    ],
    correct:
      "Hiring an employee who has been convicted of theft to adhere to industry compliance",
  },
  {
    id: Math.random(),
    question:
      "Which of the following terms describes a broad range of information that is sensitive to a specific organization?",
    response: ["Proprietary", "Top secret", "Public", "Open-source"],
    correct: "Proprietary",
  },
  {
    id: Math.random(),
    question:
      "Which of the following is the MOST effective control against zero-day vulnerabilities?",
    response: [
      "Multiple vulnerability scanners",
      "Patch management",
      "Network segmentation",
      "Intrusion prevention system",
    ],
    correct: "Network segmentation",
  },
  {
    id: Math.random(),
    question:
      "An organization has developed an application that needs a patch to fix a critical vulnerability. In which of the following environments should the patch be deployed LAST?",
    response: ["Production", "Staging", "Development", "Test"],
    correct: "Production",
  },
  {
    id: Math.random(),
    question:
      "A company wants to improve end users experiences when they tog in to a trusted partner website. The company does not want the users to be issued separate credentials for the partner website. Which of the following should be implemented to allow users to authenticate using their own credentials to log in to the trusted partner's website?",
    response: [
      "AAA server",
      "Multifactor authentication",
      "Directory service",
      "Federation",
    ],
    correct: "Federation",
  },
  {
    id: Math.random(),
    question:
      "An organization has activated an incident response plan due to a malware outbreak on its network. The organization has brought in a forensics team that has identified an internet-facing Windows server as the likely point of initial compromise. The malware family that was detected is known to be distributed by manually logging on to servers and running the malicious code. Which of the following actions would be BEST to prevent reinfection from the initial infection vector?",
    response: [
      "Disable file shanng over port 445 to the server",
      "Block port 3389 inbound from untrusted networks",
      "Prevent connections over TFTP from the internal network",
      "Create a firewall rule that blocks port 22 from the internet to the server",
    ],
    correct: "Block port 3389 inbound from untrusted networks",
  },
  {
    id: Math.random(),
    question:
      "In which of the following situations would it be BEST to use a detective control type for mitigation?",
    response: [
      "A company purchased an IPS system, but after reviewing the requirements, the appliance was supposed to monitor, not block, any traffic.",
      "A company designed a backup solution to increase the chances of restoring services in case of a natural disaster.",
      "A company purchased an application-level firewall to isolate traffic between the accounting department and the information technology department.",
      "A company implemented a network load balancer to ensure 99.999% availability of its web application",
    ],
    correct:
      "A company purchased an IPS system, but after reviewing the requirements, the appliance was supposed to monitor, not block, any traffic",
  },
  {
    id: Math.random(),
    question:
      "Which of the following describes the ability of code to target a hypervisor from inside",
    response: [
      "Fog computing",
      "Image forgery",
      "VM escape",
      "Software-defined networking",
    ],
    correct: "VM escape",
  },
  {
    id: Math.random(),
    question:
      "A security analyst needs to complete an assessment. The analyst is logged into a server and must use native tools to map services running on it to the server's listening ports. Which of the following tools can BEST accomplish this talk?",
    response: ["Nmap", "Netstat", "Nessus", "Netcat"],
    correct: "Netstat",
  },
  {
    id: Math.random(),
    question:
      "A RAT that was used to compromise an organization’s banking credentials was found on a user’s computer. The RAT evaded antivirus detection. It was installed by a user who has local administrator rights to the system as part of a remote management tool set. Which of the following recommendations would BEST prevent this from reoccurring?",
    response: [
      "Create a new acceptable use policy.",
      "Implement DLP at the network boundary.",
      "Enforce application whitelisting.",
      "Segment the network into trusted and untrusted zones",
    ],
    correct: "Enforce application whitelisting.",
  },
  {
    id: Math.random(),
    question:
      "An organization wants to implement a third factor to an existing multifactor authentication. The organization already uses a smart card and password. Which of the following would meet the organization’s needs for a third factor?",
    response: ["Fingerprints", "Date of birth", "PIN", "TPM"],
    correct: "Fingerprints",
  },
  {
    id: Math.random(),
    question:
      "The following is an administrative control that would be MOST effective to reduce the occurrence of malware execution?",
    response: [
      "EDR reporting cycle",
      "Frequency of NIDS updates",
      "Security awareness training",
      "Change control procedures",
    ],
    correct: "Security awareness training",
  },
  {
    id: Math.random(),
    question:
      "An organization's RPO for a critical system is two hours. The system is used Monday through Friday, from 9:00 am to 5:00 pm. Currently, the organization performs a full backup every Saturday that takes four hours to complete. Which of the following additional backup implementations would be the BEST way for the analyst to meet the business requirements?",
    response: [
      "Full backups Monday through Friday at 6:00 p.m and differential backups hourly.",
      "incremental backups Monday through Friday at 6:00 p.m and full backups hourly.",
      "Incremental backups Monday through Friday at 6:00 p.m and differential backups hourly",
      "Full backups Monday through Friday at 6:00 p.m and incremental backups hourly.",
    ],
    correct:
      "Incremental backups Monday through Friday at 6:00 p.m and differential backups hourly.",
  },
  {
    id: Math.random(),
    question:
      "A security audit has revealed that a process control terminal is vulnerable to malicious users installing and executing software on the system. The terminal is beyond end-of-life support and cannot be upgraded, so it is placed on a projected network segment. Which of the following would be MOST effective to implement to further mitigate the reported vulnerability?",
    response: [
      "DLP rules on the terminal",
      "An IP blacklist",
      "Application whitelisting",
      "DNS sinkholding",
    ],
    correct: "Application whitelisting",
  },
  {
    id: Math.random(),
    question: `Tonya is concerned about the risk that an attacker will attempt togain access to her organization's database server. She is searching
for a control that would discourage the attacker from attempting
to gain access. What type of security control is she seeking to
implement?`,
    response: ["Preventive", "Detective", "Corrective", "Deterrent"],
    correct: "Deterrent",
  },
  {
    id: Math.random(),
    question: `Kolin is a penetration tester who works for a cybersecurity
company. His firm was hired to conduct a penetration test against
a health-care system, and Kolin is working to gain access to the
systems belonging to a hospital in that system. What term best
describes Kolin's work?`,
    response: [
      "Authorized attacker",
      "Unauthorized attacker",
      "Unknown attacker",
      "Semi-authorized attacker",
    ],
    correct: "Authorized attacker",
  },
  {
    id: Math.random(),
    question: `Yasmine believes that her organization may be dealing with an
advanced rootkit and wants to write IoC definitions for it. Which
of the following is not likely to be a useful IoC for a rootkit?`,
    response: [
      "File hashes",
      "Command and control domains",
      "Pop-ups demanding a ransom",
      "Behavior-based identifiers",
    ],
    correct: "Pop-ups demanding a ransom",
  },
  {
    id: Math.random(),
    question: `While reviewing her logs, Michele notices that a remote system
has attempted to log into her server via SSH using the username
admin and a variety of passwords like “password” and “ninja.”
What type of attack has Michele noticed?`,
    response: [
      "A brute-force attack",
      "Shoulder surfing",
      "An on-path attack",
      "Pretexting",
      ,
    ],
    correct: "A brute-force attack",
  },
  {
    id: Math.random(),
    question: `Which one of the following security assessment techniques
assumes that an organization has already been compromised and
searches for evidence of that compromise?`,
    response: [
      "Vulnerability scanning",
      "Penetration testing",
      "Threat hunting",
      "War driving",
    ],
    correct: "Threat hunting",
  },
  {
    id: Math.random(),
    question: `Renee is configuring her vulnerability management solution to
perform credentialed scans of servers on her network. What typeof account should she provide to the scanner?`,
    response: [
      "Domain administrator",
      "Local administrator",
      "Root",
      "Read-only",
      ,
    ],
    correct: "Read-only",
  },
  {
    id: Math.random(),
    question: `Mike is sending David an encrypted message using a symmetric
encryption algorithm. What key should he use to encrypt the
message?`,
    response: [
      "Mike's public key",
      "Mike's private key",
      "David's public key",
      "Shared secret key",
    ],
    correct: "Shared secret key",
  },
  {
    id: Math.random(),
    question: `Michael analyzes network traffic, including packet content, as part
of his incident response process. What tool should he use?`,
    response: ["Syslog", "NetFlow", "Packet capture", "A SIEM"],
    correct: "Packet capture",
  },
];
