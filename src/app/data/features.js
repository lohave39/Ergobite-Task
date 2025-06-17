
export const features = [
  {
    label: "Basic Support",
    availability: {
      Free: { monthly: true, yearly: true },
      Pro: { monthly: true, yearly: true },
      Enterprise: { monthly: true, yearly: true },
    },
  },
  {
    label: "Priority Support",
    availability: {
      Free: { monthly: false, yearly: false },
      Pro: { monthly: true, yearly: true },
      Enterprise: { monthly: true, yearly: true },
    },
  },
  {
    label: "Dedicated Manager",
    availability: {
      Free: { monthly: false, yearly: false },
      Pro: { monthly: false, yearly: true },
      Enterprise: { monthly: false, yearly: true },
    },
  },
  {
    label: "Security Audit",
    availability: {
      Free: { monthly: false, yearly: false },
      Pro: { monthly: false, yearly: false },
      Enterprise: { monthly: true, yearly: true },
    },
  },
  {
    label: "Custom Integrations",
    availability: {
      Free: { monthly: false, yearly: false },
      Pro: { monthly: false, yearly: true },
      Enterprise: { monthly: true, yearly: true },
    },
  },
  {
    label: "Team Collaboration Tools",
    availability: {
      Free: { monthly: false, yearly: false },
      Pro: { monthly: true, yearly: true },
      Enterprise: { monthly: true, yearly: true },
    },
  },
  {
    label: "Usage Analytics Dashboard",
    availability: {
      Free: { monthly: false, yearly: false },
      Pro: { monthly: true, yearly: true },
      Enterprise: { monthly: true, yearly: true },
    },
  },
]
