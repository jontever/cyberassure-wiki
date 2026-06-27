// .vitepress/config.ts
import { defineConfig } from "file:///sessions/eloquent-amazing-franklin/mnt/cyberassure%20wiki/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  title: "CyberAssure",
  description: "Open Source Security Architecture Wiki",
  lang: "en-GB",
  head: [
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    ["meta", { name: "theme-color", content: "#1a1a2e" }],
    ["meta", { property: "og:title", content: "CyberAssure \u2014 Security Architecture Wiki" }],
    ["meta", { property: "og:description", content: "Open-source security architecture reference covering zero trust, network security, threat modelling, identity, and more." }]
  ],
  themeConfig: {
    logo: { src: "/favicon.svg", alt: "CyberAssure" },
    siteTitle: "CyberAssure",
    nav: [
      { text: "Home", link: "/" },
      { text: "Foundations", link: "/foundations/" },
      { text: "Network Security", link: "/network-security/" },
      { text: "Application Security", link: "/network-app-security/" },
      { text: "Identity & Data", link: "/identity-access/" },
      {
        text: "More",
        items: [
          { text: "Infrastructure", link: "/infrastructure/" },
          { text: "Data Security", link: "/data-security/" },
          { text: "Endpoint & Device", link: "/endpoint-device/" },
          { text: "Analytics & SIEM", link: "/analytics/" }
        ]
      },
      { text: "GitHub", link: "https://github.com/jontever/cyberassure-wiki", target: "_blank" }
    ],
    sidebar: {
      "/foundations/": [
        {
          text: "Foundations",
          collapsed: false,
          items: [
            { text: "Overview", link: "/foundations/" },
            { text: "Secure System Design", link: "/foundations/secure-system-design" },
            { text: "DARIOM Lifecycle", link: "/foundations/dariom-lifecycle" },
            { text: "Zero Trust Principles", link: "/foundations/zero-trust-principles" },
            { text: "Time-Based Security", link: "/foundations/time-based-security" }
          ]
        }
      ],
      "/threat-intelligence/": [
        {
          text: "Threat Intelligence",
          collapsed: false,
          items: [
            { text: "Overview", link: "/threat-intelligence/" },
            { text: "Threat Modelling with MITRE ATT&CK", link: "/threat-intelligence/threat-modeling-mitre" },
            { text: "Threat, Vulnerability & Data Flow Analysis", link: "/threat-intelligence/threat-vulnerability-analysis" }
          ]
        }
      ],
      "/network-security/": [
        {
          text: "Network Security Architecture",
          collapsed: false,
          items: [
            { text: "Overview", link: "/network-security/" },
            { text: "Physical & Layer 2 Security", link: "/network-security/physical-layer2-security" },
            { text: "VLANs & PVLANs", link: "/network-security/vlans-pvlans" },
            { text: "Layer 3 Attacks & Mitigation", link: "/network-security/layer3-attacks" },
            { text: "Routers & Firewalls", link: "/network-security/routers-firewalls" },
            { text: "Macro, Micro & Identity Segmentation", link: "/network-security/macro-micro-segmentation" },
            { text: "Network vs Access Segmentation", link: "/network-security/network-access-segmentation" },
            { text: "Web & SMTP Proxy Security", link: "/network-security/web-smtp-proxy" },
            { text: "Layer 2 & 3 Benchmarks & Auditing", link: "/network-security/benchmarks-auditing" },
            { text: "Securing SNMP & NTP", link: "/network-security/snmp-ntp-security" },
            { text: "Bogon Filtering, Blackholes & Darknets", link: "/network-security/bogon-blackholes-darknets" }
          ]
        }
      ],
      "/infrastructure/": [
        {
          text: "Infrastructure Security",
          collapsed: false,
          items: [
            { text: "Overview", link: "/infrastructure/" },
            { text: "Hardening Hybrid Infrastructure", link: "/infrastructure/hardening-hybrid" },
            { text: "NGFW On-Prem & Cloud", link: "/infrastructure/ngfw" }
          ]
        }
      ],
      "/network-app-security/": [
        {
          text: "Network-Centric Application Security",
          collapsed: false,
          items: [
            { text: "Overview", link: "/network-app-security/" },
            { text: "NSM with NIDS & NIPS", link: "/network-app-security/nsm-nids-nips" },
            { text: "Application Proxies & Gateways", link: "/network-app-security/application-proxies" },
            { text: "Secure Remote Access", link: "/network-app-security/secure-remote-access" },
            { text: "VPNs, ZTNA & SASE", link: "/network-app-security/vpn-ztna-sase" },
            { text: "Network Encryption", link: "/network-app-security/network-encryption" }
          ]
        }
      ],
      "/data-security/": [
        {
          text: "Data-Centric Application Security",
          collapsed: false,
          items: [
            { text: "Overview", link: "/data-security/" },
            { text: "Data-Centric Security", link: "/data-security/data-centric-security" },
            { text: "Web Application Firewalls", link: "/data-security/web-application-firewalls" },
            { text: "Database Firewalls & Activity Monitoring", link: "/data-security/database-firewalls" }
          ]
        }
      ],
      "/identity-access/": [
        {
          text: "Identity & Access",
          collapsed: false,
          items: [
            { text: "Overview", link: "/identity-access/" },
            { text: "Privileged Access & Identity Defence", link: "/identity-access/privileged-access" },
            { text: "Identity Management & Federation", link: "/identity-access/identity-management-federation" },
            { text: "Zero Trust Architecture", link: "/identity-access/zero-trust-architecture" }
          ]
        }
      ],
      "/endpoint-device/": [
        {
          text: "Endpoint & Device",
          collapsed: false,
          items: [
            { text: "Overview", link: "/endpoint-device/" },
            { text: "MDM & Private Cloud", link: "/endpoint-device/mdm-private-cloud" }
          ]
        }
      ],
      "/analytics/": [
        {
          text: "Analytics & Detection",
          collapsed: false,
          items: [
            { text: "Overview", link: "/analytics/" },
            { text: "AI, Analytics & SIEM", link: "/analytics/ai-analytics-siem" }
          ]
        }
      ]
    },
    editLink: {
      pattern: "https://github.com/jontever/cyberassure-wiki/edit/main/:path",
      text: "Edit this page on GitHub"
    },
    search: {
      provider: "local"
    },
    footer: {
      message: "Released under the MIT Licence.",
      copyright: "Copyright \xA9 2024\u2013present CyberAssure Contributors"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/jontever/cyberassure-wiki" }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvZWxvcXVlbnQtYW1hemluZy1mcmFua2xpbi9tbnQvY3liZXJhc3N1cmUgd2lraS8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvc2Vzc2lvbnMvZWxvcXVlbnQtYW1hemluZy1mcmFua2xpbi9tbnQvY3liZXJhc3N1cmUgd2lraS8udml0ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vc2Vzc2lvbnMvZWxvcXVlbnQtYW1hemluZy1mcmFua2xpbi9tbnQvY3liZXJhc3N1cmUlMjB3aWtpLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogJ0N5YmVyQXNzdXJlJyxcbiAgZGVzY3JpcHRpb246ICdPcGVuIFNvdXJjZSBTZWN1cml0eSBBcmNoaXRlY3R1cmUgV2lraScsXG4gIGxhbmc6ICdlbi1HQicsXG5cbiAgaGVhZDogW1xuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvZmF2aWNvbi5zdmcnLCB0eXBlOiAnaW1hZ2Uvc3ZnK3htbCcgfV0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAndGhlbWUtY29sb3InLCBjb250ZW50OiAnIzFhMWEyZScgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogJ0N5YmVyQXNzdXJlIFx1MjAxNCBTZWN1cml0eSBBcmNoaXRlY3R1cmUgV2lraScgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJywgY29udGVudDogJ09wZW4tc291cmNlIHNlY3VyaXR5IGFyY2hpdGVjdHVyZSByZWZlcmVuY2UgY292ZXJpbmcgemVybyB0cnVzdCwgbmV0d29yayBzZWN1cml0eSwgdGhyZWF0IG1vZGVsbGluZywgaWRlbnRpdHksIGFuZCBtb3JlLicgfV0sXG4gIF0sXG5cbiAgdGhlbWVDb25maWc6IHtcbiAgICBsb2dvOiB7IHNyYzogJy9mYXZpY29uLnN2ZycsIGFsdDogJ0N5YmVyQXNzdXJlJyB9LFxuICAgIHNpdGVUaXRsZTogJ0N5YmVyQXNzdXJlJyxcblxuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnSG9tZScsIGxpbms6ICcvJyB9LFxuICAgICAgeyB0ZXh0OiAnRm91bmRhdGlvbnMnLCBsaW5rOiAnL2ZvdW5kYXRpb25zLycgfSxcbiAgICAgIHsgdGV4dDogJ05ldHdvcmsgU2VjdXJpdHknLCBsaW5rOiAnL25ldHdvcmstc2VjdXJpdHkvJyB9LFxuICAgICAgeyB0ZXh0OiAnQXBwbGljYXRpb24gU2VjdXJpdHknLCBsaW5rOiAnL25ldHdvcmstYXBwLXNlY3VyaXR5LycgfSxcbiAgICAgIHsgdGV4dDogJ0lkZW50aXR5ICYgRGF0YScsIGxpbms6ICcvaWRlbnRpdHktYWNjZXNzLycgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ01vcmUnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ0luZnJhc3RydWN0dXJlJywgbGluazogJy9pbmZyYXN0cnVjdHVyZS8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnRGF0YSBTZWN1cml0eScsIGxpbms6ICcvZGF0YS1zZWN1cml0eS8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnRW5kcG9pbnQgJiBEZXZpY2UnLCBsaW5rOiAnL2VuZHBvaW50LWRldmljZS8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQW5hbHl0aWNzICYgU0lFTScsIGxpbms6ICcvYW5hbHl0aWNzLycgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogJ0dpdEh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vam9udGV2ZXIvY3liZXJhc3N1cmUtd2lraScsIHRhcmdldDogJ19ibGFuaycgfSxcbiAgICBdLFxuXG4gICAgc2lkZWJhcjoge1xuICAgICAgJy9mb3VuZGF0aW9ucy8nOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRm91bmRhdGlvbnMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9mb3VuZGF0aW9ucy8nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZWN1cmUgU3lzdGVtIERlc2lnbicsIGxpbms6ICcvZm91bmRhdGlvbnMvc2VjdXJlLXN5c3RlbS1kZXNpZ24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdEQVJJT00gTGlmZWN5Y2xlJywgbGluazogJy9mb3VuZGF0aW9ucy9kYXJpb20tbGlmZWN5Y2xlJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnWmVybyBUcnVzdCBQcmluY2lwbGVzJywgbGluazogJy9mb3VuZGF0aW9ucy96ZXJvLXRydXN0LXByaW5jaXBsZXMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdUaW1lLUJhc2VkIFNlY3VyaXR5JywgbGluazogJy9mb3VuZGF0aW9ucy90aW1lLWJhc2VkLXNlY3VyaXR5JyB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgICcvdGhyZWF0LWludGVsbGlnZW5jZS8nOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnVGhyZWF0IEludGVsbGlnZW5jZScsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3RocmVhdC1pbnRlbGxpZ2VuY2UvJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVGhyZWF0IE1vZGVsbGluZyB3aXRoIE1JVFJFIEFUVCZDSycsIGxpbms6ICcvdGhyZWF0LWludGVsbGlnZW5jZS90aHJlYXQtbW9kZWxpbmctbWl0cmUnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdUaHJlYXQsIFZ1bG5lcmFiaWxpdHkgJiBEYXRhIEZsb3cgQW5hbHlzaXMnLCBsaW5rOiAnL3RocmVhdC1pbnRlbGxpZ2VuY2UvdGhyZWF0LXZ1bG5lcmFiaWxpdHktYW5hbHlzaXMnIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgJy9uZXR3b3JrLXNlY3VyaXR5Lyc6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdOZXR3b3JrIFNlY3VyaXR5IEFyY2hpdGVjdHVyZScsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL25ldHdvcmstc2VjdXJpdHkvJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUGh5c2ljYWwgJiBMYXllciAyIFNlY3VyaXR5JywgbGluazogJy9uZXR3b3JrLXNlY3VyaXR5L3BoeXNpY2FsLWxheWVyMi1zZWN1cml0eScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1ZMQU5zICYgUFZMQU5zJywgbGluazogJy9uZXR3b3JrLXNlY3VyaXR5L3ZsYW5zLXB2bGFucycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0xheWVyIDMgQXR0YWNrcyAmIE1pdGlnYXRpb24nLCBsaW5rOiAnL25ldHdvcmstc2VjdXJpdHkvbGF5ZXIzLWF0dGFja3MnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdSb3V0ZXJzICYgRmlyZXdhbGxzJywgbGluazogJy9uZXR3b3JrLXNlY3VyaXR5L3JvdXRlcnMtZmlyZXdhbGxzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnTWFjcm8sIE1pY3JvICYgSWRlbnRpdHkgU2VnbWVudGF0aW9uJywgbGluazogJy9uZXR3b3JrLXNlY3VyaXR5L21hY3JvLW1pY3JvLXNlZ21lbnRhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ05ldHdvcmsgdnMgQWNjZXNzIFNlZ21lbnRhdGlvbicsIGxpbms6ICcvbmV0d29yay1zZWN1cml0eS9uZXR3b3JrLWFjY2Vzcy1zZWdtZW50YXRpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdXZWIgJiBTTVRQIFByb3h5IFNlY3VyaXR5JywgbGluazogJy9uZXR3b3JrLXNlY3VyaXR5L3dlYi1zbXRwLXByb3h5JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnTGF5ZXIgMiAmIDMgQmVuY2htYXJrcyAmIEF1ZGl0aW5nJywgbGluazogJy9uZXR3b3JrLXNlY3VyaXR5L2JlbmNobWFya3MtYXVkaXRpbmcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZWN1cmluZyBTTk1QICYgTlRQJywgbGluazogJy9uZXR3b3JrLXNlY3VyaXR5L3NubXAtbnRwLXNlY3VyaXR5JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQm9nb24gRmlsdGVyaW5nLCBCbGFja2hvbGVzICYgRGFya25ldHMnLCBsaW5rOiAnL25ldHdvcmstc2VjdXJpdHkvYm9nb24tYmxhY2tob2xlcy1kYXJrbmV0cycgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAnL2luZnJhc3RydWN0dXJlLyc6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdJbmZyYXN0cnVjdHVyZSBTZWN1cml0eScsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2luZnJhc3RydWN0dXJlLycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0hhcmRlbmluZyBIeWJyaWQgSW5mcmFzdHJ1Y3R1cmUnLCBsaW5rOiAnL2luZnJhc3RydWN0dXJlL2hhcmRlbmluZy1oeWJyaWQnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdOR0ZXIE9uLVByZW0gJiBDbG91ZCcsIGxpbms6ICcvaW5mcmFzdHJ1Y3R1cmUvbmdmdycgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAnL25ldHdvcmstYXBwLXNlY3VyaXR5Lyc6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdOZXR3b3JrLUNlbnRyaWMgQXBwbGljYXRpb24gU2VjdXJpdHknLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9uZXR3b3JrLWFwcC1zZWN1cml0eS8nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdOU00gd2l0aCBOSURTICYgTklQUycsIGxpbms6ICcvbmV0d29yay1hcHAtc2VjdXJpdHkvbnNtLW5pZHMtbmlwcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0FwcGxpY2F0aW9uIFByb3hpZXMgJiBHYXRld2F5cycsIGxpbms6ICcvbmV0d29yay1hcHAtc2VjdXJpdHkvYXBwbGljYXRpb24tcHJveGllcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NlY3VyZSBSZW1vdGUgQWNjZXNzJywgbGluazogJy9uZXR3b3JrLWFwcC1zZWN1cml0eS9zZWN1cmUtcmVtb3RlLWFjY2VzcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1ZQTnMsIFpUTkEgJiBTQVNFJywgbGluazogJy9uZXR3b3JrLWFwcC1zZWN1cml0eS92cG4tenRuYS1zYXNlJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnTmV0d29yayBFbmNyeXB0aW9uJywgbGluazogJy9uZXR3b3JrLWFwcC1zZWN1cml0eS9uZXR3b3JrLWVuY3J5cHRpb24nIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgJy9kYXRhLXNlY3VyaXR5Lyc6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdEYXRhLUNlbnRyaWMgQXBwbGljYXRpb24gU2VjdXJpdHknLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9kYXRhLXNlY3VyaXR5LycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0RhdGEtQ2VudHJpYyBTZWN1cml0eScsIGxpbms6ICcvZGF0YS1zZWN1cml0eS9kYXRhLWNlbnRyaWMtc2VjdXJpdHknIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdXZWIgQXBwbGljYXRpb24gRmlyZXdhbGxzJywgbGluazogJy9kYXRhLXNlY3VyaXR5L3dlYi1hcHBsaWNhdGlvbi1maXJld2FsbHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdEYXRhYmFzZSBGaXJld2FsbHMgJiBBY3Rpdml0eSBNb25pdG9yaW5nJywgbGluazogJy9kYXRhLXNlY3VyaXR5L2RhdGFiYXNlLWZpcmV3YWxscycgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAnL2lkZW50aXR5LWFjY2Vzcy8nOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSWRlbnRpdHkgJiBBY2Nlc3MnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9pZGVudGl0eS1hY2Nlc3MvJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUHJpdmlsZWdlZCBBY2Nlc3MgJiBJZGVudGl0eSBEZWZlbmNlJywgbGluazogJy9pZGVudGl0eS1hY2Nlc3MvcHJpdmlsZWdlZC1hY2Nlc3MnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdJZGVudGl0eSBNYW5hZ2VtZW50ICYgRmVkZXJhdGlvbicsIGxpbms6ICcvaWRlbnRpdHktYWNjZXNzL2lkZW50aXR5LW1hbmFnZW1lbnQtZmVkZXJhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1plcm8gVHJ1c3QgQXJjaGl0ZWN0dXJlJywgbGluazogJy9pZGVudGl0eS1hY2Nlc3MvemVyby10cnVzdC1hcmNoaXRlY3R1cmUnIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgJy9lbmRwb2ludC1kZXZpY2UvJzogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0VuZHBvaW50ICYgRGV2aWNlJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvZW5kcG9pbnQtZGV2aWNlLycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ01ETSAmIFByaXZhdGUgQ2xvdWQnLCBsaW5rOiAnL2VuZHBvaW50LWRldmljZS9tZG0tcHJpdmF0ZS1jbG91ZCcgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAnL2FuYWx5dGljcy8nOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQW5hbHl0aWNzICYgRGV0ZWN0aW9uJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYW5hbHl0aWNzLycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0FJLCBBbmFseXRpY3MgJiBTSUVNJywgbGluazogJy9hbmFseXRpY3MvYWktYW5hbHl0aWNzLXNpZW0nIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgIH0sXG5cbiAgICBlZGl0TGluazoge1xuICAgICAgcGF0dGVybjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qb250ZXZlci9jeWJlcmFzc3VyZS13aWtpL2VkaXQvbWFpbi86cGF0aCcsXG4gICAgICB0ZXh0OiAnRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViJ1xuICAgIH0sXG5cbiAgICBzZWFyY2g6IHtcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnXG4gICAgfSxcblxuICAgIGZvb3Rlcjoge1xuICAgICAgbWVzc2FnZTogJ1JlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5jZS4nLFxuICAgICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0IFx1MDBBOSAyMDI0XHUyMDEzcHJlc2VudCBDeWJlckFzc3VyZSBDb250cmlidXRvcnMnXG4gICAgfSxcblxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2pvbnRldmVyL2N5YmVyYXNzdXJlLXdpa2knIH1cbiAgICBdLFxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtWCxTQUFTLG9CQUFvQjtBQUVoWixJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFFTixNQUFNO0FBQUEsSUFDSixDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxnQkFBZ0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUFBLElBQ3JFLENBQUMsUUFBUSxFQUFFLE1BQU0sZUFBZSxTQUFTLFVBQVUsQ0FBQztBQUFBLElBQ3BELENBQUMsUUFBUSxFQUFFLFVBQVUsWUFBWSxTQUFTLGdEQUEyQyxDQUFDO0FBQUEsSUFDdEYsQ0FBQyxRQUFRLEVBQUUsVUFBVSxrQkFBa0IsU0FBUywySEFBMkgsQ0FBQztBQUFBLEVBQzlLO0FBQUEsRUFFQSxhQUFhO0FBQUEsSUFDWCxNQUFNLEVBQUUsS0FBSyxnQkFBZ0IsS0FBSyxjQUFjO0FBQUEsSUFDaEQsV0FBVztBQUFBLElBRVgsS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLFFBQVEsTUFBTSxJQUFJO0FBQUEsTUFDMUIsRUFBRSxNQUFNLGVBQWUsTUFBTSxnQkFBZ0I7QUFBQSxNQUM3QyxFQUFFLE1BQU0sb0JBQW9CLE1BQU0scUJBQXFCO0FBQUEsTUFDdkQsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHlCQUF5QjtBQUFBLE1BQy9ELEVBQUUsTUFBTSxtQkFBbUIsTUFBTSxvQkFBb0I7QUFBQSxNQUNyRDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLGtCQUFrQixNQUFNLG1CQUFtQjtBQUFBLFVBQ25ELEVBQUUsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0I7QUFBQSxVQUNqRCxFQUFFLE1BQU0scUJBQXFCLE1BQU0sb0JBQW9CO0FBQUEsVUFDdkQsRUFBRSxNQUFNLG9CQUFvQixNQUFNLGNBQWM7QUFBQSxRQUNsRDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEVBQUUsTUFBTSxVQUFVLE1BQU0sZ0RBQWdELFFBQVEsU0FBUztBQUFBLElBQzNGO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUCxpQkFBaUI7QUFBQSxRQUNmO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTCxFQUFFLE1BQU0sWUFBWSxNQUFNLGdCQUFnQjtBQUFBLFlBQzFDLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxvQ0FBb0M7QUFBQSxZQUMxRSxFQUFFLE1BQU0sb0JBQW9CLE1BQU0sZ0NBQWdDO0FBQUEsWUFDbEUsRUFBRSxNQUFNLHlCQUF5QixNQUFNLHFDQUFxQztBQUFBLFlBQzVFLEVBQUUsTUFBTSx1QkFBdUIsTUFBTSxtQ0FBbUM7QUFBQSxVQUMxRTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSx5QkFBeUI7QUFBQSxRQUN2QjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSx3QkFBd0I7QUFBQSxZQUNsRCxFQUFFLE1BQU0sc0NBQXNDLE1BQU0sNkNBQTZDO0FBQUEsWUFDakcsRUFBRSxNQUFNLDhDQUE4QyxNQUFNLHFEQUFxRDtBQUFBLFVBQ25IO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLHNCQUFzQjtBQUFBLFFBQ3BCO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTCxFQUFFLE1BQU0sWUFBWSxNQUFNLHFCQUFxQjtBQUFBLFlBQy9DLEVBQUUsTUFBTSwrQkFBK0IsTUFBTSw2Q0FBNkM7QUFBQSxZQUMxRixFQUFFLE1BQU0sa0JBQWtCLE1BQU0saUNBQWlDO0FBQUEsWUFDakUsRUFBRSxNQUFNLGdDQUFnQyxNQUFNLG1DQUFtQztBQUFBLFlBQ2pGLEVBQUUsTUFBTSx1QkFBdUIsTUFBTSxzQ0FBc0M7QUFBQSxZQUMzRSxFQUFFLE1BQU0sd0NBQXdDLE1BQU0sNkNBQTZDO0FBQUEsWUFDbkcsRUFBRSxNQUFNLGtDQUFrQyxNQUFNLGdEQUFnRDtBQUFBLFlBQ2hHLEVBQUUsTUFBTSw2QkFBNkIsTUFBTSxtQ0FBbUM7QUFBQSxZQUM5RSxFQUFFLE1BQU0scUNBQXFDLE1BQU0sd0NBQXdDO0FBQUEsWUFDM0YsRUFBRSxNQUFNLHVCQUF1QixNQUFNLHNDQUFzQztBQUFBLFlBQzNFLEVBQUUsTUFBTSwwQ0FBMEMsTUFBTSw4Q0FBOEM7QUFBQSxVQUN4RztBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxvQkFBb0I7QUFBQSxRQUNsQjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSxtQkFBbUI7QUFBQSxZQUM3QyxFQUFFLE1BQU0sbUNBQW1DLE1BQU0sbUNBQW1DO0FBQUEsWUFDcEYsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHVCQUF1QjtBQUFBLFVBQy9EO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLDBCQUEwQjtBQUFBLFFBQ3hCO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTCxFQUFFLE1BQU0sWUFBWSxNQUFNLHlCQUF5QjtBQUFBLFlBQ25ELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxzQ0FBc0M7QUFBQSxZQUM1RSxFQUFFLE1BQU0sa0NBQWtDLE1BQU0sNENBQTRDO0FBQUEsWUFDNUYsRUFBRSxNQUFNLHdCQUF3QixNQUFNLDZDQUE2QztBQUFBLFlBQ25GLEVBQUUsTUFBTSxxQkFBcUIsTUFBTSxzQ0FBc0M7QUFBQSxZQUN6RSxFQUFFLE1BQU0sc0JBQXNCLE1BQU0sMkNBQTJDO0FBQUEsVUFDakY7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsbUJBQW1CO0FBQUEsUUFDakI7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxZQUNMLEVBQUUsTUFBTSxZQUFZLE1BQU0sa0JBQWtCO0FBQUEsWUFDNUMsRUFBRSxNQUFNLHlCQUF5QixNQUFNLHVDQUF1QztBQUFBLFlBQzlFLEVBQUUsTUFBTSw2QkFBNkIsTUFBTSwyQ0FBMkM7QUFBQSxZQUN0RixFQUFFLE1BQU0sNENBQTRDLE1BQU0sb0NBQW9DO0FBQUEsVUFDaEc7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EscUJBQXFCO0FBQUEsUUFDbkI7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxZQUNMLEVBQUUsTUFBTSxZQUFZLE1BQU0sb0JBQW9CO0FBQUEsWUFDOUMsRUFBRSxNQUFNLHdDQUF3QyxNQUFNLHFDQUFxQztBQUFBLFlBQzNGLEVBQUUsTUFBTSxvQ0FBb0MsTUFBTSxrREFBa0Q7QUFBQSxZQUNwRyxFQUFFLE1BQU0sMkJBQTJCLE1BQU0sMkNBQTJDO0FBQUEsVUFDdEY7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EscUJBQXFCO0FBQUEsUUFDbkI7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxZQUNMLEVBQUUsTUFBTSxZQUFZLE1BQU0sb0JBQW9CO0FBQUEsWUFDOUMsRUFBRSxNQUFNLHVCQUF1QixNQUFNLHFDQUFxQztBQUFBLFVBQzVFO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTCxFQUFFLE1BQU0sWUFBWSxNQUFNLGNBQWM7QUFBQSxZQUN4QyxFQUFFLE1BQU0sd0JBQXdCLE1BQU0sK0JBQStCO0FBQUEsVUFDdkU7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVBLFVBQVU7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxJQUNSO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBRUEsUUFBUTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBLElBQ2I7QUFBQSxJQUVBLGFBQWE7QUFBQSxNQUNYLEVBQUUsTUFBTSxVQUFVLE1BQU0sK0NBQStDO0FBQUEsSUFDekU7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
