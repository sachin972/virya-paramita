import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const teamMembers = [
    {
        name: "Sai Arun Kiran Karthik S",
        role: "Chief Executive Officer",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Bhaskara Rao S",
        role: "Finance & Operations Head",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Harish Reddy S",
        role: "Marketing Head",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Jigyasu Kumar Verman",
        role: "HR Head",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
];

const mentors = [
    {
        name: "Dr. Abdus Samad",
        role: "IIT MADRAS Mentor",
        expertise: "Wave Energy",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Dr. Abhijit Chaudhuri",
        role: "IIT MADRAS Mentor",
        expertise: "Desalination",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Dr. A R Paul",
        role: "MNNIT ALLAHABAD Mentor",
        expertise: "Fluid Mechanics",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
];

const researchers = [
    {
        name: "Dr. Abdus Samad",
        role: "IIT MADRAS Mentor",
        expertise: "Wave Energy",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Dr. Abhijit Chaudhuri",
        role: "IIT MADRAS Mentor",
        expertise: "Desalination",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Dr. A R Paul",
        role: "MNNIT ALLAHABAD Mentor",
        expertise: "Fluid Mechanics",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Dr. Abdus Samad",
        role: "IIT MADRAS Mentor",
        expertise: "Wave Energy",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Dr. Abhijit Chaudhuri",
        role: "IIT MADRAS Mentor",
        expertise: "Desalination",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Dr. A R Paul",
        role: "MNNIT ALLAHABAD Mentor",
        expertise: "Fluid Mechanics",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
];

const webManagers = [
    {
        name: "Dr. Abdus Samad",
        role: "IIT MADRAS Mentor",
        expertise: "Wave Energy",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Dr. Abhijit Chaudhuri",
        role: "IIT MADRAS Mentor",
        expertise: "Desalination",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
    {
        name: "Dr. A R Paul",
        role: "MNNIT ALLAHABAD Mentor",
        expertise: "Fluid Mechanics",
        // social: ["twitter", "facebook", "instagram", "linkedin"],
    },
];

const socialIcons = {
    twitter: <FaTwitter className="text-blue-500 hover:text-blue-700" />,
    facebook: <FaFacebook className="text-blue-500 hover:text-blue-700" />,
    instagram: <FaInstagram className="text-blue-500 hover:text-blue-700" />,
    linkedin: <FaLinkedin className="text-blue-500 hover:text-blue-700" />,
};

const Card = ({ name, role, expertise, social }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200 transition-all flex justify-between"
    >
        <div className="overflow-hidden w-1/3 rounded-full">
            <img
                src="https://viryaparamita.onrender.com/img/team/Deveshsingh.jpeg"
                className="w-full h-auto"
                alt=""
            />
        </div>
        <div className="flex flex-col justify-evenly w-2/3 px-5">
            <h3 className="text-lg font-bold text-blue-700">{name}</h3>
            <div>
                <p className="text-gray-600">{role}</p>
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
