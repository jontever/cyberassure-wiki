# Mobile Device Management & Private Cloud

Mobile Device Management (MDM) provides centralised management, configuration, and security enforcement across the mobile device fleet. In a zero trust architecture, MDM-reported device posture is a critical access control signal.

## MDM capabilities

### Device enrolment

- **Corporate-owned** — full management (apps, config, wipe)
- **BYOD (personal)** — containerised management; work data isolated in a managed container; personal data untouched

Enrolment methods:
- Apple DEP (Device Enrolment Program) / Apple Business Manager — zero-touch iOS/macOS
- Android Zero-touch Enrolment — zero-touch Android Enterprise
- Windows Autopilot — zero-touch Windows 10/11

### MDM security policies

| Policy | Description |
|--------|-------------|
| PIN/Passcode | Minimum complexity, max attempts, lockout |
| Encryption | Enforce full-device encryption (BitLocker, FileVault, Android FDE) |
| OS version | Minimum version; non-compliant devices blocked from resources |
| Jailbreak/root detection | Block jailbroken or rooted devices |
| Remote wipe | Full wipe or corporate data wipe on lost/stolen/offboarded device |
| App management (MAM) | Push, update, and remove managed apps; enforce app-level PIN |
| Conditional access | Block resource access if device is non-compliant |

### MDM platforms

- **Microsoft Intune / Endpoint Manager** — tight Azure AD / Entra ID integration; Conditional Access native
- **Jamf Pro** — Apple-focused; macOS and iOS best-in-class
- **VMware Workspace ONE** — cross-platform; strong UEM (Unified Endpoint Management)
- **Kandji** — Apple-focused MDM with compliance automation

## Endpoint Detection & Response (EDR)

EDR agents on endpoints provide:

- Real-time behavioural monitoring (process, file, network, registry)
- Threat detection using IOAs (indicators of attack) and ML
- Remote investigation and containment (isolate device, pull forensics)
- Integration with SIEM/SOAR for automated response

EDR posture signals feed MDM/Conditional Access to enforce device health requirements.

### EDR platforms

- **Microsoft Defender for Endpoint** — integrated with Intune + Entra ID; strong Windows coverage
- **CrowdStrike Falcon** — cloud-native; fast detection; strong threat intelligence
- **SentinelOne** — autonomous response (ActiveEDR); good Linux/macOS coverage
- **Palo Alto Cortex XDR** — integrates with Prisma Access / NGFW

## Private cloud device security

### Virtual desktop infrastructure (VDI)

VDI runs desktop workloads in the data centre:
- No sensitive data on endpoint — the desktop lives in a secure environment
- Compromised endpoint cannot access data — only input/output crosses the network
- Centralised patching and hardening of gold images
- Suitable for high-risk roles: finance, HR, contractors

### Cloud workstation security

Cloud-based development environments (AWS Cloud9, GitHub Codespaces, Coder) move code off developer laptops:
- Source code never leaves the cloud environment
- Consistent, hardened development environments
- Access controlled via SSO + MFA + Conditional Access

### Secure enclave / containerised workspace

Mobile platforms: Samsung Knox Workspace, Microsoft Intune MAM (managed app container), Apple Managed Open In. Work data is isolated in an encrypted container; personal apps cannot access it.

## Device lifecycle

| Stage | Security actions |
|-------|----------------|
| Procurement | Order via DEP/AutoPilot; zero-touch enrolment configured |
| Onboarding | MDM enrolment; baseline profile push; AV/EDR agent deployed |
| In-use | Continuous compliance monitoring; automated remediation |
| Offboarding | Remote wipe (corporate data or full); certificate revocation; account disablement |
| Disposal | Secure data destruction (NIST 800-88); certificate of destruction |

## BYOD considerations

- Apply MAM-only policies where full MDM is not acceptable to employees
- Ensure work data (email, files, apps) is in a managed container
- Define what MDM *cannot* access on personal devices — communicate clearly to users
- Require minimum OS version and passcode; avoid requiring full device wipe of personal devices

## Further reading

- NIST SP 800-124r2 — Guidelines for Managing the Security of Mobile Devices
- Apple Platform Security Guide
- Microsoft Intune documentation
- CIS Benchmark for Mobile Devices
