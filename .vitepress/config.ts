import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CyberAssure',
  description: 'Open Source Security Architecture Wiki',
  lang: 'en-GB',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#1a1a2e' }],
    ['meta', { property: 'og:title', content: 'CyberAssure — Security Architecture Wiki' }],
    ['meta', { property: 'og:description', content: 'Open-source security architecture reference covering zero trust, network security, threat modelling, identity, and more.' }],
  ],

  themeConfig: {
    logo: { src: '/favicon.svg', alt: 'CyberAssure' },
    siteTitle: 'CyberAssure',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Foundations', link: '/foundations/' },
      { text: 'Network Security', link: '/network-security/' },
      { text: 'Application Security', link: '/network-app-security/' },
      { text: 'Identity & Data', link: '/identity-access/' },
      {
        text: 'More',
        items: [
          { text: 'Infrastructure', link: '/infrastructure/' },
          { text: 'Data Security', link: '/data-security/' },
          { text: 'Endpoint & Device', link: '/endpoint-device/' },
          { text: 'Analytics & SIEM', link: '/analytics/' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/jontever/cyberassure-wiki', target: '_blank' },
    ],

    sidebar: {
      '/foundations/': [
        {
          text: 'Foundations',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/foundations/' },
            { text: 'Secure System Design', link: '/foundations/secure-system-design' },
            { text: 'DARIOM Lifecycle', link: '/foundations/dariom-lifecycle' },
            { text: 'Zero Trust Principles', link: '/foundations/zero-trust-principles' },
            { text: 'Time-Based Security', link: '/foundations/time-based-security' },
          ]
        }
      ],
      '/threat-intelligence/': [
        {
          text: 'Threat Intelligence',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/threat-intelligence/' },
            { text: 'Threat Modelling with MITRE ATT&CK', link: '/threat-intelligence/threat-modeling-mitre' },
            { text: 'Threat, Vulnerability & Data Flow Analysis', link: '/threat-intelligence/threat-vulnerability-analysis' },
          ]
        }
      ],
      '/network-security/': [
        {
          text: 'Network Security Architecture',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/network-security/' },
            { text: 'Physical & Layer 2 Security', link: '/network-security/physical-layer2-security' },
            { text: 'VLANs & PVLANs', link: '/network-security/vlans-pvlans' },
            { text: 'Layer 3 Attacks & Mitigation', link: '/network-security/layer3-attacks' },
            { text: 'Routers & Firewalls', link: '/network-security/routers-firewalls' },
            { text: 'Macro, Micro & Identity Segmentation', link: '/network-security/macro-micro-segmentation' },
            { text: 'Network vs Access Segmentation', link: '/network-security/network-access-segmentation' },
            { text: 'Web & SMTP Proxy Security', link: '/network-security/web-smtp-proxy' },
            { text: 'Layer 2 & 3 Benchmarks & Auditing', link: '/network-security/benchmarks-auditing' },
            { text: 'Securing SNMP & NTP', link: '/network-security/snmp-ntp-security' },
            { text: 'Bogon Filtering, Blackholes & Darknets', link: '/network-security/bogon-blackholes-darknets' },
          ]
        }
      ],
      '/infrastructure/': [
        {
          text: 'Infrastructure Security',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/infrastructure/' },
            { text: 'Hardening Hybrid Infrastructure', link: '/infrastructure/hardening-hybrid' },
            { text: 'NGFW On-Prem & Cloud', link: '/infrastructure/ngfw' },
          ]
        }
      ],
      '/network-app-security/': [
        {
          text: 'Network-Centric Application Security',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/network-app-security/' },
            { text: 'NSM with NIDS & NIPS', link: '/network-app-security/nsm-nids-nips' },
            { text: 'Application Proxies & Gateways', link: '/network-app-security/application-proxies' },
            { text: 'Secure Remote Access', link: '/network-app-security/secure-remote-access' },
            { text: 'VPNs, ZTNA & SASE', link: '/network-app-security/vpn-ztna-sase' },
            { text: 'Network Encryption', link: '/network-app-security/network-encryption' },
          ]
        }
      ],
      '/data-security/': [
        {
          text: 'Data-Centric Application Security',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/data-security/' },
            { text: 'Data-Centric Security', link: '/data-security/data-centric-security' },
            { text: 'Web Application Firewalls', link: '/data-security/web-application-firewalls' },
            { text: 'Database Firewalls & Activity Monitoring', link: '/data-security/database-firewalls' },
          ]
        }
      ],
      '/identity-access/': [
        {
          text: 'Identity & Access',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/identity-access/' },
            { text: 'Privileged Access & Identity Defence', link: '/identity-access/privileged-access' },
            { text: 'Identity Management & Federation', link: '/identity-access/identity-management-federation' },
            { text: 'Zero Trust Architecture', link: '/identity-access/zero-trust-architecture' },
          ]
        }
      ],
      '/endpoint-device/': [
        {
          text: 'Endpoint & Device',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/endpoint-device/' },
            { text: 'MDM & Private Cloud', link: '/endpoint-device/mdm-private-cloud' },
          ]
        }
      ],
      '/analytics/': [
        {
          text: 'Analytics & Detection',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/analytics/' },
            { text: 'AI, Analytics & SIEM', link: '/analytics/ai-analytics-siem' },
          ]
        }
      ],
    },

    editLink: {
      pattern: 'https://github.com/jontever/cyberassure-wiki/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT Licence.',
      copyright: 'Copyright © 2024–present CyberAssure Contributors'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jontever/cyberassure-wiki' }
    ],
  }
})
