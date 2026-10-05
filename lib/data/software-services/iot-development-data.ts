import {
  Factory,
  Gauge,
  Cloud,
  Smartphone,
  PlugZap,
  Activity,
  Bot,
  BrainCircuit,
  TrendingDown,
  Settings2,
  Database,
  Cable,
  Leaf,
  ChartNoAxesCombined,
  RobotArm,
  Settings,
  Box,
  ChartColumnIncreasing,
  ShieldLock,
  Network,
  ShieldCheck,
} from "lucide-react";


export const iotFaqs = [
  {
    question: "What are IoT and automation solutions?",
    answer:
      "IoT and automation solutions connect machines, sensors, devices, and business systems to collect data, monitor operations, and automate processes. They help businesses improve visibility, efficiency, productivity, and decision-making.",
  },
  {
    question: "What are the benefits of IoT solutions for businesses?",
    answer:
      "IoT can help businesses monitor operations in real time, reduce equipment downtime, improve asset utilization, optimize energy consumption, automate routine tasks, and make better decisions using operational data.",
  },
  {
    question: "What IoT solutions does TEKNOVIA provide?",
    answer:
      "TEKNOVIA provides customized solutions including Industrial IoT (IIoT), smart factory solutions, machine monitoring, predictive maintenance, asset tracking, energy monitoring, industrial automation, IoT dashboards, edge and cloud IoT, and system integration.",
  },
  {
    question: "What is Industrial IoT (IIoT) and how does it work?",
    answer:
      "Industrial IoT connects machines, sensors, controllers, and industrial systems to collect and exchange operational data. This data can then be monitored, analyzed, and used for automation, predictive maintenance, and process optimization.",
  },
  {
    question: "How can IoT improve manufacturing and industrial operations?",
    answer:
      "IoT provides real-time visibility into machines, production processes, equipment performance, and other operational parameters. This information can help teams identify inefficiencies, respond to issues faster, improve production visibility, and optimize processes.",
  },
  {
    question: "Can IoT solutions be customized for different industries?",
    answer:
      "Yes. IoT solutions can be designed around the specific equipment, processes, connectivity requirements, and business objectives of an organization. TEKNOVIA can develop solutions for manufacturing, logistics, infrastructure, facilities, utilities, and other operational environments.",
  },
  {
    question: "Can IoT integrate with ERP, MES, and other business systems?",
    answer:
      "Yes. IoT platforms can integrate with ERP, MES, CMMS, CRM, SCADA, PLM, databases, and custom applications through APIs, middleware, and event-driven integrations. This helps connect operational data with existing business workflows.",
  },
  {
    question: "How does IoT help with predictive maintenance?",
    answer:
      "IoT sensors can continuously collect equipment data such as temperature, vibration, pressure, and operating conditions. Analytics and machine learning can identify unusual patterns that may indicate potential equipment problems, allowing maintenance teams to investigate them proactively.",
  },
  {
    question: "Can IoT solutions help reduce machine downtime?",
    answer:
      "Yes. Continuous equipment monitoring can provide early visibility into abnormal operating conditions and potential maintenance requirements. This allows organizations to respond proactively and reduce dependence on reactive maintenance.",
  },
  {
    question: "What devices and machines can be connected to an IoT platform?",
    answer:
      "Depending on the use case, an IoT platform can connect sensors, PLCs, RTUs, machines, controllers, meters, RFID readers, barcode systems, industrial cameras, vehicles, gateways, and smart devices.",
  },
  {
    question:
      "Which IoT protocols and connectivity technologies are supported?",
    answer:
      "The appropriate technology depends on the application and operating environment. Common options include MQTT, OPC-UA, Modbus, HTTP, AMQP, Wi-Fi, Ethernet, 4G/5G, and LoRaWAN.",
  },
  {
    question: "Can IoT data be monitored through real-time dashboards?",
    answer:
      "Yes. IoT dashboards can display equipment status, production information, energy consumption, asset data, alerts, KPIs, and other operational metrics in real time. Dashboards can also be customized for different teams and management levels.",
  },
  {
    question: "How are AI and machine learning used in IoT solutions?",
    answer:
      "AI and machine learning can analyze large volumes of IoT data to identify patterns and anomalies. Depending on the application, they can support predictive maintenance, forecasting, anomaly detection, equipment performance analysis, and process optimization.",
  },
  {
    question:
      "Are IoT solutions secure for industrial and business environments?",
    answer:
      "IoT security should cover devices, networks, applications, users, and data. Depending on the project requirements, TEKNOVIA can incorporate authentication, access control, encryption, device security, audit logging, monitoring, and other security controls.",
  },
  {
    question:
      "How much does an IoT solution cost and how long does implementation take?",
    answer:
      "The cost and implementation time depend on factors such as the number of devices, sensors and machines, connectivity requirements, software integrations, dashboards, automation requirements, and analytics capabilities. TEKNOVIA can assess your requirements and provide a solution approach and project estimate.",
  },
];

export const IotBenefits = [
  {
    icon: PlugZap,
    text: "Connect machines, devices, and operational systems",
  },
  {
    icon: Activity,
    text: "Monitor processes and assets in real time",
  },
  {
    icon: Bot,
    text: "Automate repetitive and operational tasks",
  },
  {
    icon: BrainCircuit,
    text: "Detect abnormalities before they become major issues",
  },
  {
    icon: Gauge,
    text: "Improve equipment utilization and productivity",
  },
  {
    icon: TrendingDown,
    text: "Reduce downtime and operational inefficiencies",
  },
  {
    icon: BrainCircuit,
    text: "Generate actionable insights through analytics and AI",
  },
  {
    icon: Settings2,
    text: "Integrate IoT data with existing enterprise applications",
  },
];

export const IotStages = [
  {
    number: "01",
    title: "Connect",
    description:
      "Connect machines, sensors, equipment, vehicles, and other assets.",
    icon: Cable,
  },
  {
    number: "02",
    title: "Collect",
    description:
      "Capture reliable real-time operational data from connected devices.",
    icon: Activity,
  },
  {
    number: "03",
    title: "Process",
    description: "Process, normalize, and manage high-volume device data.",
    icon: Database,
  },
  {
    number: "04",
    title: "Analyze",
    description:
      "Use analytics, AI, and machine learning to identify patterns and anomalies.",
    icon: BrainCircuit,
  },
  {
    number: "05",
    title: "Automate",
    description:
      "Trigger alerts, workflows, and automated actions based on defined conditions.",
    icon: Bot,
  },
  {
    number: "06",
    title: "Optimize",
    description:
      "Use insights to continuously improve operations, productivity, quality, and resource utilization.",
    icon: Gauge,
  },
];

export const IotSolutions = [
  {
    title: "Smart Factory & Industrial IoT",
    description:
      "Connect machines, sensors, people, and operational systems to create a more visible and responsive manufacturing environment.",
    icon: Factory,
    image: "/images/iot/smart-factory.webp",
  },
  {
    title: "Industrial Automation",
    description:
      "Automate production and operational processes using connected devices, controllers, robotics, workflows, and intelligent systems.",
    icon: ChartNoAxesCombined,
    image: "/images/iot/industrial-automation.jpg",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Monitor equipment conditions and identify potential failures before they result in unexpected downtime.",
    icon: Settings,
    image: "/images/iot/predictive-maintenance1.jpg",
  },
  {
    title: "Manufacturing Operations Management",
    description:
      "Digitize production processes, monitor shop-floor performance, and provide real-time operational visibility.",
    icon: RobotArm,
    image: "/images/iot/manufacturing-operation1.jpg",
  },
  {
    title: "Digital Twin & Simulation",
    description:
      "Create virtual representations of processes, assets, or systems to support simulation, what-if analysis, and optimization.",
    icon: Box,
    image: "/images/iot/digital-twin.jpg",
  },
  {
    title: "Advanced Analytics & AI",
    description:
      "Transform operational data into actionable insights through real-time analytics, machine learning, forecasting, anomaly detection, and optimization.",
    icon: ChartColumnIncreasing,
    image: "/images/iot/smart-analytics.jpg",
  },
  {
    title: "Edge & Cloud IoT",
    description:
      "Combine edge computing and cloud platforms to support responsive, scalable, and resilient IoT environments.",
    icon: Cloud,
    image: "/images/iot/cloud-solution.jpg",
  },
  {
    title: "Mobility & Workforce Enablement",
    description:
      "Give teams access to operational information, alerts, workflows, and collaboration tools through mobile and web applications.",
    icon: Smartphone,
    image: "/images/iot/mobility-workforce.jpg",
  },
  {
    title: "Industrial Cybersecurity",
    description:
      "Protect connected devices, industrial networks, operational data, and critical systems through security controls and monitoring.",
    icon: ShieldLock,
    image: "/images/iot/industrial-cybersecurity1.jpg",
  },
  {
    title: "Energy & Sustainability Monitoring",
    description:
      "Monitor energy consumption, resource utilization, emissions-related parameters, and operational efficiency to support sustainability initiatives.",
    icon: Leaf,
    image: "/images/iot/sustainabilty-management.jpg",
  },
];


export const iotHeroFeatures = [
  {
    icon: Network,
    label: "Connected Systems",
  },
  {
    icon: Activity,
    label: "Real-Time Intelligence",
  },
  {
    icon: ShieldCheck,
    label: "Secure by Design",
  },
];