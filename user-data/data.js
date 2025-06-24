export const bio = [
  "Hello, I'm M S Manohar!",
  "<strong>Software Engineer</strong> with 2.7 years of of hands-on involvement in IT industry, prioritizing Automation, CI/CD, SCM, Cloud Resource Utilization, Deployment and Monitoring, I aim to leverage my expertise in delivering innovative solutions that drive measurable business outcomes.",
  "Passionate about mentoring, teamwork, and continuous improvement in DevOps processes.",
];

export const skills = [
  "Linux, Git, Selenium, Docker, Jenkins, Kubernetes, Terraform, AWS, Prometheus",
  "Grafana, Bash Scripting, Nginx, Apache, Ansible, JIRA, Python, Github Actions",
];

export const projects = [
  {
    title: "CI/CD Pipeline for Dockerized React App",
    description:
      "Built a CI/CD pipeline that pushes Docker images to dev and prod repos based on branch. Integrated Prometheus and Grafana for health monitoring.",
    github: "https://github.com/ManoharSankar/ReactappCapstoneProject.git",
    techStack: [ "React.js, Docker, Jenkins, GitHub Actions, AWS, Prometheus, Grafana" ],

    icon: "truck",
  },
    {
    title: "AWS Infrastructure with Terraform",
    description:
      "Provisioned AWS infra with Terraform and automated deployments using GitHub Actions.",
    github: "https://github.com/ManoharSankar/TerraformEC2Webserver.git",
    demo: "https://github.com/ManoharSankar/Terraforms3bucket.git",
    techStack: [ "Terraform", "AWS","EC2", "S3", "IAM", "GitHub Actions" ],
    icon: "truck",
  },
];

export const experience = [
  {
    title: "Algonomy Software",
    duration: "January 2019 - June 2019",
    subtitle: "DevOps Engineer",
    details: [
      "Escalent is a top research, data analytics and advisory firm that helps clients understand human and market behaviors to navigate disruption.As a DevOps Engineer, I was responsible for automating the end-to-end software delivery pipeline, enabling faster and reliable application deployment in a cloud-native environment. I collaborated closely with development and operations teams to ensure CI/CD best practices, infrastructure automation, monitoring, and system scalability.",
    ],
    tags: ["Docker","Jenkins","SonarQube", "Jfrog","Bashscripts","Linux", "AWS","Git", "Jira"],
    icon: "truck ",
  },
    {
      title: "dataGridz",
      duration: "December 2016 - December 2018",
      subtitle: "Software Engineer",
      details: [
        "NGKF Retail project will be to build a new Retail Listings web application for the NGKF Retail Group to initially be used in the 125 Park Ave office then implemented for national use.  Newmark Grubb Knight Frank is one of the world's leading commercial real estate advisory firms."      ],
      tags: [  "Aws", "Docker", "Jenkins", "Shell Scripting", "SonarQube","Java", "Selenium", "Git", "Jira"],
      icon: "truck ",
  },

];

export const education = [
  {
    title: "B.Tech. in Electronics and Communication Engineering",
    duration: "2011 - 2015",
    subtitle: "JNTU, Anantapur",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
];

export const footer = [
  //   {
  //     label: "Dev Profiles",
  //     data: [
  //       {
  //         text: "Stackoverflow",
  //         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
  //       },
  //       {
  //         text: "GitHub",
  //         link: "https://github.com/vinaysomawat",
  //       },
  //       {
  //         text: "LeetCode",
  //         link: "https://leetcode.com/somawatvinay/",
  //       },
  //     ],
  //   },
  //   {
  //     label: "Resources",
  //     data: [
  //       {
  //         text: "Enable Dark/Light Mode",
  //         func: "enableDarkMode()",
  //       },
  //       {
  //         text: "Print this page",
  //         func: "window.print()",
  //       },
  //       {
  //         text: "Clone this page",
  //         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
  //       },
  //     ],
  //   },
  {
    label: "Links",
    data: [
        {
          text: "Linkedin",
          link: "https://www.linkedin.com/in/msmanohar/",
        },
      //   {
      //     text: "Twitter",
      //     link: "https://twitter.com/thesigmakid",
      //   },
      {
        text: "Github",
        link: "https://github.com/ManoharSankar",
      },
    ],
  },
  {
    label: "copyright-text",
    data: ["Made with &hearts; by M S Manohar"],
  },
];
