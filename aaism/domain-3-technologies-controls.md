# Domain 3 — AI Technologies and Controls

**Exam weight: 38%**

This is the largest domain, focused on optimising AI security through technologies, techniques, and controls tailored to AI systems. Where Domains 1 and 2 establish governance and risk, this domain is about the hands-on security engineering of AI: architecture and design, securing the AI life cycle, controlling data, embedding privacy and safety, and running the control and monitoring program.

## A. AI security architecture and design

Designing AI systems to be secure from the outset and integrated into enterprise architecture.

- **Change management** — controlling changes to models, data, and AI infrastructure.
- **SDL (Secure Development Life cycle)** — security embedded across AI development.
- **Secure by design** — building security into AI systems rather than bolting it on.
- **Securing infrastructure as code** — hardening the IaC that provisions AI environments.
- **Data flows** — mapping and securing how data moves through AI pipelines.
- **Approved base models** — governing which foundation/base models may be used.
- **Interconnectivity and interaction with architecture** — securing how AI integrates with the rest of the enterprise estate.

## B. AI life cycle (model selection, training, and validation)

Securing and assuring models across their development and operational life cycle.

- **Testing model interconnectivity** — validating how models interact with each other and with systems.
- **Linkages between models** — managing risk where models feed one another.
- **Regression** — ensuring changes do not reintroduce prior faults or degrade performance.
- **Model testing** — functional and security testing of models.
- **Progression** — controlled promotion of models through environments.
- **TEVV (Testing, Evaluation, Verification, and Validation)** — the structured assurance discipline for AI systems.
- **Model accuracy testing and evaluation** — measuring model correctness and reliability.

## C. Data management controls

Controlling the data that trains and drives AI to protect integrity and fairness.

- **Data collection** — governing how training and operational data is gathered.
- **Data control** — access, integrity, and provenance controls over data.
- **Data poisoning** — defending against malicious manipulation of training data.
- **Bias** — detecting and mitigating bias in data and outputs.
- **Accuracy** — maintaining data quality that supports correct model behaviour.
- **Data position requirements** — requirements on where and how data is held (e.g. residency, positioning constraints).

## D. Privacy, ethical, trust and safety controls

Controls that keep AI lawful, ethical, transparent, and safe.

- **Explainability** — making AI decisions interpretable to stakeholders.
- **Privacy controls** — e.g. the right to be forgotten and other data subject rights.
- **Consent** — lawful basis for processing personal data in AI.
- **Transparency** — disclosing where and how AI is used.
- **Decision making** — governance over how AI-supported decisions are made.
- **Fairness** — preventing discriminatory outcomes.
- **Ethics** — operationalising ethical principles in controls.
- **Automated decision making** — safeguards over decisions made without human input.
- **Human in the loop** — ensuring meaningful human oversight where required.
- **Trust and safety — content moderation** — controlling harmful or unsafe AI output.
- **Potential harm** — assessing and limiting harm to individuals and society.
- **Environmental impacts** — considering the sustainability cost of AI.
- **Data minimisation and anonymisation** — limiting and de-identifying personal data.

## E. Security controls and monitoring

Selecting, implementing, and continuously assuring the security controls around AI.

- **Security monitoring metrics** — what to measure to understand AI security posture.
- **Selecting the right controls** — matching controls to assessed AI risk.
- **Implementing controls** — deploying technical and process controls effectively.
- **Self-assessment of controls (CSA)** — control self-assessment for AI.
- **Control life cycle** — maintaining controls over time as systems and threats change.
- **Continuous monitoring** — ongoing observation of AI systems and controls.
- **KPIs and KRIs for security controls and monitoring** — measuring control effectiveness and risk.
- **Technical controls** — the specific technical safeguards applied to AI.
- **Threat–controls mapping** — linking identified threats to the controls that address them.
- **Security awareness training** — building AI security awareness across the workforce.

## Related sections in this wiki

- [Foundations — Secure System Design](/foundations/secure-system-design) — secure-by-design and defence-in-depth.
- [Application Security Testing](/network-app-security/application-security-testing) — SAST/DAST/IAST/RASP disciplines adapted to AI.
- [Analytics & Detection](/analytics/) — monitoring and detection foundations.
- [Data Security](/data-security/) — data-centric controls and classification.

## Sources

- [AAISM Exam Content Outline — ISACA](https://www.isaca.org/credentialing/aaism/aaism-exam-content-outline)
- [AAISM Course Outline (PDF) — ISACA](https://assets.ctfassets.net/82ripq7fjls2/1KVKaVH20Xa2ixNCDG3MLR/3b1930bf263c9f1a84dbe0ba2a785307/ISACA-AAISM-Outline.pdf)
