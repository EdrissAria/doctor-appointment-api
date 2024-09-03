const server = require("server");
const { get } = server.router;
const { json } = server.reply;

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiology",
    description:
      "Dr. John Doe is a highly skilled cardiologist with over 20 years of experience...",
    imageUrl:
      "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg",
    email: "john.doe@example.com",
    phone: "+123456789",
    experience: 20,
    qualifications: ["MBBS", "MD", "FACC"],
    awards: ["Best Doctor 2020", "Top Cardiologist 2019"],
    availability: [
      {
        day: "Monday",
        slots: [
          "09:00 AM - 10:00 AM",
          "10:00 AM - 11:00 AM",
          "11:00 AM - 12:00 PM",
        ],
      },
      {
        day: "Wednesday",
        slots: ["01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM"],
      },
      { day: "Friday", slots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"] },
    ],
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialty: "Neurology",
    description:
      "Dr. Jane Smith is a renowned neurologist with expertise in neurodegenerative diseases...",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/04/25/70/360_F_504257032_jBtwqNdvdMN9Xm6aDT0hcvtxDXPZErrn.jpg",
    email: "jane.smith@example.com",
    phone: "+987654321",
    experience: 15,
    qualifications: ["MBBS", "MD", "PhD"],
    awards: ["Top Neurologist 2021", "Excellence in Medicine 2018"],
    availability: [
      {
        day: "Tuesday",
        slots: [
          "10:00 AM - 11:00 AM",
          "11:00 AM - 12:00 PM",
          "12:00 PM - 01:00 PM",
        ],
      },
      {
        day: "Thursday",
        slots: ["02:00 PM - 03:00 PM", "03:00 PM - 04:00 PM"],
      },
      {
        day: "Saturday",
        slots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"],
      },
    ],
  },
  {
    id: 3,
    name: "Dr. Emily White",
    specialty: "Pediatrics",
    description:
      "Dr. Emily White is a caring pediatrician with a focus on child development...",
    imageUrl:
      "https://t4.ftcdn.net/jpg/02/20/30/45/360_F_220304581_3BRbk3UhoYrcVlt72fdBcVRHBtHAKuvD.jpg",
    email: "emily.white@example.com",
    phone: "+192837465",
    experience: 10,
    qualifications: ["MBBS", "MD"],
    awards: ["Best Pediatrician 2020", "Top Child Specialist 2017"],
    availability: [
      { day: "Monday", slots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"] },
      {
        day: "Wednesday",
        slots: ["01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM"],
      },
      { day: "Friday", slots: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"] },
    ],
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    specialty: "Orthopedics",
    description:
      "Dr. Michael Brown specializes in orthopedic surgery, focusing on joint replacement...",
    imageUrl:
      "https://www.shutterstock.com/image-photo/man-portrait-doctor-white-coat-600nw-2280796707.jpg",
    email: "michael.brown@example.com",
    phone: "+123498765",
    experience: 18,
    qualifications: ["MBBS", "MS", "FACS"],
    awards: ["Top Orthopedic Surgeon 2019", "Excellence in Surgery 2020"],
    availability: [
      { day: "Tuesday", slots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"] },
      {
        day: "Thursday",
        slots: ["01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM"],
      },
      { day: "Friday", slots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"] },
    ],
  },
  {
    id: 5,
    name: "Dr. Linda Green",
    specialty: "Dermatology",
    description:
      "Dr. Linda Green is an expert dermatologist, known for her work on skin conditions...",
    imageUrl:
      "https://t4.ftcdn.net/jpg/03/17/85/49/360_F_317854905_2idSdvi2ds3yejmk8mhvxYr1OpdVTrSM.jpg",
    email: "linda.green@example.com",
    phone: "+567891234",
    experience: 12,
    qualifications: ["MBBS", "MD", "DDVL"],
    awards: ["Best Dermatologist 2021", "Skin Care Specialist 2018"],
    availability: [
      { day: "Monday", slots: ["01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM"] },
      {
        day: "Wednesday",
        slots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"],
      },
      { day: "Friday", slots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"] },
    ],
  },
  {
    id: 6,
    name: "Dr. Robert Blue",
    specialty: "Gastroenterology",
    description:
      "Dr. Robert Blue is a leading gastroenterologist with a focus on digestive health...",
    imageUrl:
      "https://t3.ftcdn.net/jpg/01/67/15/98/360_F_167159846_MCrwVzB7ysdZKr2vIiJkiCacEoNWagdn.jpg",
    email: "robert.blue@example.com",
    phone: "+234567890",
    experience: 22,
    qualifications: ["MBBS", "MD", "DM"],
    awards: [
      "Top Gastroenterologist 2020",
      "Excellence in Digestive Health 2019",
    ],
    availability: [
      { day: "Tuesday", slots: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"] },
      {
        day: "Thursday",
        slots: ["01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM"],
      },
      {
        day: "Saturday",
        slots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"],
      },
    ],
  },
  {
    id: 7,
    name: "Dr. Susan Black",
    specialty: "Ophthalmology",
    description:
      "Dr. Susan Black is an ophthalmologist, specializing in eye surgeries and vision correction...",
    imageUrl:
      "https://img.freepik.com/free-photo/attractive-medical-professional-uniform-standing-with-arms-crossed-against-isolated-background_662251-416.jpg",
    email: "susan.black@example.com",
    phone: "+345678901",
    experience: 14,
    qualifications: ["MBBS", "MD", "FRCS"],
    awards: ["Top Eye Surgeon 2021", "Excellence in Ophthalmology 2017"],
    availability: [
      { day: "Monday", slots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"] },
      {
        day: "Wednesday",
        slots: ["01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM"],
      },
      { day: "Friday", slots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"] },
    ],
  },
  {
    id: 8,
    name: "Dr. William Gray",
    specialty: "Oncology",
    description:
      "Dr. William Gray is an oncologist with a strong focus on cancer treatment and research...",
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg",
    email: "william.gray@example.com",
    phone: "+456789012",
    experience: 25,
    qualifications: ["MBBS", "MD", "DM", "PhD"],
    awards: ["Best Oncologist 2020", "Top Cancer Researcher 2019"],
    availability: [
      { day: "Tuesday", slots: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"] },
      {
        day: "Thursday",
        slots: ["01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM"],
      },
      { day: "Friday", slots: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"] },
    ],
  },
  {
    id: 9,
    name: "Dr. Sarah Yellow",
    specialty: "Psychiatry",
    description:
      "Dr. Sarah Yellow is a compassionate psychiatrist helping patients with mental health issues...",
    imageUrl:
      "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg",
    email: "sarah.yellow@example.com",
    phone: "+567890123",
    experience: 17,
    qualifications: ["MBBS", "MD", "MRCPS"],
    awards: ["Top Psychiatrist 2021", "Excellence in Mental Health 2020"],
    availability: [
      { day: "Monday", slots: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"] },
      {
        day: "Wednesday",
        slots: ["01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM"],
      },
      { day: "Friday", slots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"] },
    ],
  },
  {
    id: 10,
    name: "Dr. James Orange",
    specialty: "Urology",
    description:
      "Dr. James Orange is an experienced urologist focusing on male reproductive health...",
    imageUrl:
      "https://img.freepik.com/free-photo/handsome-smiling-medical-professional-examining-with-stethoscope-colored-background_662251-366.jpg",
    email: "james.orange@example.com",
    phone: "+678901234",
    experience: 20,
    qualifications: ["MBBS", "MD", "MCh"],
    awards: ["Top Urologist 2020", "Excellence in Urology 2018"],
    availability: [
      { day: "Tuesday", slots: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"] },
      {
        day: "Thursday",
        slots: ["01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM"],
      },
      {
        day: "Saturday",
        slots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"],
      },
    ],
  },
];

const corsHeaders = (ctx) => {
  ctx.res.setHeader("Access-Control-Allow-Origin", "*");
  ctx.res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  ctx.res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
};

const getDoctors = get("/api/doctors", (ctx) => {
  corsHeaders(ctx);
  return json(doctors);
});

const getDoctorDetails = get("/api/doctors/:id", (ctx) => {
  corsHeaders(ctx);
  const doctor = doctors.find((d) => d.id === parseInt(ctx.params.id));
  return doctor ? json(doctor) : json({ error: "Doctor not found" }, 404);
});

const home = get("/", (ctx) => {
  corsHeaders(ctx);
  return json({ hello: "world" });
});


server({ port: 3333 }, getDoctors, getDoctorDetails, home);
