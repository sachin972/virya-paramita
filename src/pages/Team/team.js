import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const teamMembers = [
    {
        name: "Sai Arun Kiran Karthik S",
        role: ["Founder and CEO"],
        // social: ["twitter", "facebook", "instagram", "linkedin"],
        image: "./images/sai_arun.jpeg",
    },
    {
        name: "Bhaskara Rao S",
        role: ["Finance & Operations Head"],
        // social: ["twitter", "facebook", "instagram", "linkedin"],
        image: "./images/bhaskar_rao.jpeg",
    },
    {
        name: "Ankit Kumar",
        role: ["Co-Founder"],
        // social: ["twitter", "facebook", "instagram", "linkedin"],
        image: "./images/harish_reddy.jpeg",
    },
    {
        name: "Jigyasu Kumar Verman",
        role: ["HR Head"],
        // social: ["twitter", "facebook", "instagram", "linkedin"],
        image: "./images/jigyasu_kumar.jpeg",
    },
];

const mentors = [
    {
        name: "Prof. Abdus Samad",
        role: ["IIT MADRAS Mentor"],
        expertise: "Wave Energy",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
        image: "./images/dr_abdus_samad.jpeg",
    },
    {
        name: "Prof. Abhijit Chaudhuri",
        role: ["IIT MADRAS Mentor"],
        expertise: "Desalination",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
        image: "./images/dr_abhijeet.jpeg",
    },
    {
        name: "Prof. Akshay Ranjan Paul",
        role: ["MNNIT ALLAHABAD Mentor"],
        expertise: "Fluid Mechanics",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
        image: "./images/dr_a_r_paul.jpeg",
    },
    {
        name: "Dr. Ajay Kumar Maurya",
        role: ["Presidency University, Bangalore"],
        expertise: "Linear Generators",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
        image: "./images/dr_a_r_paul.jpeg",
    },
];

const researchers = [
    {
        name: "Dr. Suchitra",
        role: ["Senior Scientist, Desalination and Hydrodynamics"],
        // expertise: "Wave Energy",
        image: "https://viryaparamita.onrender.com/img/team/abdu.jpg",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Prashant Kumar",
        role: ["Ph.D. MArine Energy"],
        // expertise: "Wave Energy",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
        image: "https://viryaparamita.onrender.com/img/team/prashant.jpg",
    },
    {
        name: "Satabda Chaudhari",
        role: ["Research Scholar Power Electronics"],
        // expertise: "Wave Energy",
        image: "https://viryaparamita.onrender.com/img/team/abdu.jpg",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Devesh Singh",
        role: ["PhD Marine Energy"],
        // expertise: "Desalination",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
        image: "https://viryaparamita.onrender.com/img/team/Deveshsingh.jpeg",
    },
    {
        name: "Prateek Agrawal",
        role: ["Business Strategy and Project Management"],
        // expertise: "Wave Energy",
        image: "https://viryaparamita.onrender.com/img/team/abdu.jpg",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Kathyayani Nandakumar",
        role: ["Ocean Engineering"],
        // expertise: "Fluid Mechanics",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
        image: "https://viryaparamita.onrender.com/img/team/Kathyayani.jpg",
    },
    {
        name: "Sumar Kumar",
        role: [
            "Ocean Engineering",
            "Wave Energy Converter MS by Research - IIT Madras",
        ],
        // expertise: "Fluid Mechanics",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
        image: "./images/suman_kumar.jpeg",
    },
    {
        name: "Mohd Abdul Rehman Alam",
        role: ["Ocean Engineering"],
        // expertise: "Wave Energy",
        image: "https://viryaparamita.onrender.com/img/team/abdu.jpg",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Anulekha Majumdar",
        role: ["Ocean Energy (Wave Energy Converter)"],
        // expertise: "Desalination",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
        image: "./images/anulekha_majumdara.jpeg",
    },
];

const webManagers = [
    {
        name: "Anil Chaudhari",
        role: ["IT Analyst"],
        image: "https://media.licdn.com/dms/image/v2/D4D03AQHzV2BKOJrzpA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687064928651?e=1744848000&v=beta&t=ugsz3X1mLMNtuFelOGreMXdZmoyAifqbL27kqjTybwI",
    },
    {
        name: "Sachin Tripathi",
        role: ["IT Analyst"],
        image: "https://media.licdn.com/dms/image/v2/D4D03AQHzV2BKOJrzpA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687064928651?e=1744848000&v=beta&t=ugsz3X1mLMNtuFelOGreMXdZmoyAifqbL27kqjTybwI",
    },
    {
        name: "Ayush Tiwari",
        role: ["IT Analyst"],
        image: "https://media.licdn.com/dms/image/v2/D4D03AQHzV2BKOJrzpA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687064928651?e=1744848000&v=beta&t=ugsz3X1mLMNtuFelOGreMXdZmoyAifqbL27kqjTybwI",
    },
    // {
    //     name: "Sameer Verma",
    //     role: ["Student at IIT Madras"],
    //     // expertise: "Wave Energy",
    //     // social: ["twitter", "facebook", "instagram", "linkedin"],
    //     image: "./images/sameer_verma.jpeg",
    // },
    // {
    //     name: "Shiva Kumar",
    //     role: ["Student at IIT Madras"],
    //     // expertise: "Desalination",
    //     // social: ["twitter", "facebook", "instagram", "linkedin"],
    //     image: "./images/shiva_kumar.jpeg",
    // },
    // {
    //     name: "Sheikh Abdul Nisar",
    //     role: ["Student at IIT Madras"],
    //     // expertise: "Fluid Mechanics",
    //     // social: ["twitter", "facebook", "instagram", "linkedin"],
    //     image: "https://viryaparamita.onrender.com/img/team/abdul's%20pic.jpg",
    // },
];

const socialIcons = {
    twitter: <FaTwitter className="text-blue-500 hover:text-blue-700" />,
    facebook: <FaFacebook className="text-blue-500 hover:text-blue-700" />,
    instagram: <FaInstagram className="text-blue-500 hover:text-blue-700" />,
    linkedin: <FaLinkedin className="text-blue-500 hover:text-blue-700" />,
};

const Card = ({ name, role, expertise, image }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200 transition-all flex justify-between"
    >
        {/* <div className="overflow-hidden w-1/3 rounded-full">
            <img src={image} className="w-full h-auto" alt="" />
        </div> */}
        <div className="flex flex-col justify-evenly px-5">
            <h3 className="text-lg font-bold text-blue-700">{name}</h3>
            <div>
                <p className="text-gray-600">
                    {role.map((rl) => (
                        <div>{rl}</div>
                    ))}
                </p>
                {expertise && (
                    <p className="text-sm text-gray-500">
                        Expertise: {expertise}
                    </p>
                )}
            </div>
        </div>
        {/* <div className="flex gap-3 mt-3">
            {social.map((platform) => (
                <a key={platform} href="#" className="text-lg">
                    {socialIcons[platform]}
                </a>
            ))}
        </div> */}
    </motion.div>
);

export default function Team() {
    return (
        <div className="min-h-screen bg-blue-50 py-10 px-5">
            <h1 className="text-center text-3xl font-bold text-blue-700 mb-10">
                Our TEAM
            </h1>
            <section>
                <h2 className="text-center text-2xl font-semibold text-gray-700 mb-5">
                    OUR FOUNDING TEAM
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {teamMembers.map((member) => (
                        <Card key={member.name} {...member} />
                    ))}
                </div>
            </section>
            <section className="mt-10">
                <h2 className="text-center text-2xl font-semibold text-gray-700 mb-5">
                    TECHNICAL MENTORS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {mentors.map((mentor) => (
                        <Card key={mentor.name} {...mentor} />
                    ))}
                </div>
            </section>

            <section className="mt-10">
                <h2 className="text-center text-2xl font-semibold text-gray-700 mb-5">
                    Our Research Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {researchers.map((researcher) => (
                        <Card key={researcher.name} {...researcher} />
                    ))}
                </div>
            </section>

            <section className="mt-10">
                <h2 className="text-center text-2xl font-semibold text-gray-700 mb-5">
                    Website Managing Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {webManagers.map((webManager) => (
                        <Card key={webManager.name} {...webManager} />
                    ))}
                </div>
            </section>
        </div>
    );
}
