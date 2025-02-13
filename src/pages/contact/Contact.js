// // // import Image from "next/image";

// // // export default function ContactUs() {
// // //     return (
// // //         <section>
// // //             <div className="mx-auto max-w-6xl px-4 sm:px-6">
// // //                 {/* Section header */}
// // //                 <div className="pb-12 text-center md:pb-20">
// // //                     <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-black-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-black-200/50">
// // //                         <span className="inline-flex bg-gradient-to-r from-black-500 to-black-200 bg-clip-text text-transparent">
// // //                             Get in Touch
// // //                         </span>
// // //                     </div>
// // //                     <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.black.200),theme(colors.gray.50),theme(colors.black.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
// // //                         We'd Love to Hear From You
// // //                     </h2>
// // //                     <p className="text-lg text-black-200/65">
// // //                         Whether you have questions, feedback, or need
// // //                         assistance, feel free to reach out. We're here to help!
// // //                     </p>
// // //                 </div>

// // //                 {/* Contact Form */}
// // //                 <div className="grid gap-12 md:grid-cols-2">
// // //                     {/* Form */}
// // //                     <div>
// // //                         <form>
// // //                             <div className="mb-6">
// // //                                 <label
// // //                                     className="block text-sm font-medium text-black-200/80"
// // //                                     htmlFor="name"
// // //                                 >
// // //                                     Your Name
// // //                                 </label>
// // //                                 <input
// // //                                     id="name"
// // //                                     type="text"
// // //                                     className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-500"
// // //                                     placeholder="Enter your name"
// // //                                 />
// // //                             </div>
// // //                             <div className="mb-6">
// // //                                 <label
// // //                                     className="block text-sm font-medium text-black-200/80"
// // //                                     htmlFor="email"
// // //                                 >
// // //                                     Your Email
// // //                                 </label>
// // //                                 <input
// // //                                     id="email"
// // //                                     type="email"
// // //                                     className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-500"
// // //                                     placeholder="Enter your email"
// // //                                 />
// // //                             </div>
// // //                             <div className="mb-6">
// // //                                 <label
// // //                                     className="block text-sm font-medium text-black-200/80"
// // //                                     htmlFor="message"
// // //                                 >
// // //                                     Message
// // //                                 </label>
// // //                                 <textarea
// // //                                     id="message"
// // //                                     rows={4}
// // //                                     className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-500"
// // //                                     placeholder="Write your message"
// // //                                 ></textarea>
// // //                             </div>
// // //                             <div>
// // //                                 <button
// // //                                     type="submit"
// // //                                     className="btn w-full bg-gradient-to-t from-black-600/40 to-black-500 text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
// // //                                 >
// // //                                     Send Message
// // //                                 </button>
// // //                             </div>
// // //                         </form>
// // //                     </div>

// // //                     {/* Contact Info */}
// // //                     <div className="space-y-8">
// // //                         <div>
// // //                             <h3 className="text-lg font-semibold text-black-200">
// // //                                 Our Office
// // //                             </h3>
// // //                             <p className="text-black-200/70">
// // //                                 NCR – 108, Tower 3 , Park View Residency 122003
// // //                                 <br />
// // //                                 Banglore - Falcon Towers , Ejipura , Kormangala
// // //                                 , Bangalore 560047
// // //                             </p>
// // //                         </div>
// // //                         <div>
// // //                             <h3 className="text-lg font-semibold text-black-200">
// // //                                 Email Us
// // //                             </h3>
// // //                             <p className="text-black-200/70">
// // //                                 contact@theajai.com
// // //                             </p>
// // //                         </div>
// // //                         <div>
// // //                             <h3 className="text-lg font-semibold text-black-200">
// // //                                 Call Us
// // //                             </h3>
// // //                             <p className="text-black-200/70">
// // //                                 +91 (777)608-2238
// // //                             </p>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Map Section */}
// // //                 <div className="mt-16">
// // //                     <iframe
// // //                         className="w-full h-64 rounded-lg border border-gray-700"
// // //                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509217!2d-122.40141168468377!3d37.7936145797571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f74fce1e7%3A0x4c1babc7c15e7743!2sAI%20Tech%20Hub!5e0!3m2!1sen!2sus!4v1673634884512!5m2!1sen!2sus"
// // //                         allowFullScreen={true}
// // //                         loading="lazy"
// // //                     ></iframe>
// // //                 </div>
// // //             </div>
// // //         </section>
// // //     );
// // // }

// // import Image from "next/image";

// // export default function Contact() {
// //     return (
// //         <section>
// //             <div className="mx-auto max-w-6xl px-4 sm:px-6">
// //                 {/* Section header */}
// //                 <div className="pb-12 text-center md:pb-20">
// //                     <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-black-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-black-200/50">
// //                         <span className="inline-flex bg-gradient-to-r from-black-500 to-black-200 bg-clip-text text-transparent">
// //                             Get in Touch
// //                         </span>
// //                     </div>
// //                     <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.black.200),theme(colors.gray.50),theme(colors.black.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
// //                         We'd Love to Hear From You
// //                     </h2>
// //                     <p className="text-lg text-black-200/65">
// //                         Whether you have questions, feedback, or need
// //                         assistance, feel free to reach out. We're here to help!
// //                     </p>
// //                 </div>

// // {/* Contact Form */}
// // <div className="grid gap-12 md:grid-cols-2">
// //     {/* Form */}
// //     <div>
// //         <form>
// //             <div className="mb-6">
// //                 <label
// //                     className="block text-sm font-medium text-black-200/80"
// //                     htmlFor="name"
// //                 >
// //                     Your Name
// //                 </label>
// //                 <input
// //                     id="name"
// //                     type="text"
// //                     className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-500"
// //                     placeholder="Enter your name"
// //                 />
// //             </div>
// //             <div className="mb-6">
// //                 <label
// //                     className="block text-sm font-medium text-black-200/80"
// //                     htmlFor="email"
// //                 >
// //                     Your Email
// //                 </label>
// //                 <input
// //                     id="email"
// //                     type="email"
// //                     className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-500"
// //                     placeholder="Enter your email"
// //                 />
// //             </div>
// //             <div className="mb-6">
// //                 <label
// //                     className="block text-sm font-medium text-black-200/80"
// //                     htmlFor="contact-number"
// //                 >
// //                     Contact Number
// //                 </label>
// //                 <input
// //                     id="contact-number"
// //                     type="tel"
// //                     className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-500"
// //                     placeholder="Enter your contact number"
// //                 />
// //             </div>
// //             <div className="mb-6">
// //                 <label
// //                     className="block text-sm font-medium text-black-200/80"
// //                     htmlFor="message"
// //                 >
// //                     Message
// //                 </label>
// //                 <textarea
// //                     id="message"
// //                     rows={4}
// //                     className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-500"
// //                     placeholder="Write your message"
// //                 ></textarea>
// //             </div>
// //             <div>
// //                 <button
// //                     type="submit"
// //                     className="btn w-full bg-gradient-to-t from-black-600/40 to-black-500 text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
// //                 >
// //                     Send Message
// //                 </button>
// //             </div>
// //         </form>
// //     </div>

// //     {/* Contact Info */}
// //     <div className="space-y-8">
// //         <div>
// //             <h3 className="text-lg font-semibold text-black-200">
// //                 Our Office
// //             </h3>
// //             <p className="text-black-200/70">
// //                 NCR – 108, Tower 3 , Park View Residency 122003
// //                 <br />
// //                 Bangalore - Falcon Towers , Ejipura ,
// //                 Koramangala , Bangalore 560047
// //             </p>
// //         </div>
// //         <div>
// //             <h3 className="text-lg font-semibold text-black-200">
// //                 Email Us
// //             </h3>
// //             <p className="text-black-200/70">
// //                 contact@theajai.com
// //             </p>
// //         </div>
// //         <div>
// //             <h3 className="text-lg font-semibold text-black-200">
// //                 Call Us
// //             </h3>
// //             <p className="text-black-200/70">
// //                 +91 (777) 608-2238
// //             </p>
// //         </div>
// //     </div>
// //                 </div>

// // {/* Map Section */}
// // <div className="mt-16">
// //     <iframe
// //         className="w-full h-64 rounded-lg border border-gray-700"
// //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509217!2d-122.40141168468377!3d37.7936145797571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f74fce1e7%3A0x4c1babc7c15e7743!2sAI%20Tech%20Hub!5e0!3m2!1sen!2sus!4v1673634884512!5m2!1sen!2sus"
// //         allowFullScreen={true}
// //         loading="lazy"
// //     ></iframe>
// // </div>
// //             </div>
// //         </section>
// //     );
// // }

// // import Image from "next/image";

// // export default function Contact() {
// //     return (
// //         <section>
// //             <div className="mx-auto max-w-6xl px-4 sm:px-6">
// //                 {/* Section header */}
// //                 <div className="pb-12 text-center md:pb-20">
// //                     <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-black-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-black-200/50">
// //                         <span className="inline-flex bg-gradient-to-r from-black-500 to-black-200 bg-clip-text text-transparent">
// //                             Get in Touch
// //                         </span>
// //                     </div>
// //                     <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.black.200),theme(colors.gray.50),theme(colors.black.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
// //                         We'd Love to Hear From You
// //                     </h2>
// //                     <p className="text-lg text-black-200/65">
// //                         Whether you have questions, feedback, or need
// //                         assistance, feel free to reach out. We're here to help!
// //                     </p>
// //                 </div>

// //                 {/* Office Locations */}
// //                 <div className="grid gap-12 md:grid-cols-2">
// //                     {/* Pune Office */}
// //                     <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
// //                         <div className="relative h-64">
// //                             <Image
// //                                 src="/path-to-pune-image.jpg" // Replace with actual image path
// //                                 alt="Pune Office"
// //                                 layout="fill"
// //                                 objectFit="cover"
// //                             />
// //                             <div className="absolute inset-0 flex items-center justify-center bg-black/50">
// //                                 <h3 className="text-2xl font-semibold text-white">
// //                                     1 PUNE
// //                                 </h3>
// //                             </div>
// //                         </div>
// //                         <div className="p-6">
// //                             <p className="text-black-200/80">
// //                                 3rd Floor, Sr. No. 9, H.No:1/2,
// //                                 <br />
// //                                 Near Ramada Plaza,
// //                                 <br />
// //                                 Above Maruti Suzuki Suman Kirti Cars Pvt. Ltd.,
// //                                 <br />
// //                                 Mahalunge, Pune,
// //                                 <br />
// //                                 Maharashtra 411045
// //                             </p>
// //                             <a
// //                                 href="https://goo.gl/maps/example" // Replace with actual Google Maps link
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                                 className="mt-4 inline-block text-black-500 hover:underline"
// //                             >
// //                                 Check in Google Maps
// //                             </a>
// //                         </div>
// //                     </div>

// //                     {/* Mumbai Office */}
// //                     <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
// //                         <div className="relative h-64">
// //                             <Image
// //                                 src="/path-to-mumbai-image.jpg" // Replace with actual image path
// //                                 alt="Mumbai Office"
// //                                 layout="fill"
// //                                 objectFit="cover"
// //                             />
// //                             <div className="absolute inset-0 flex items-center justify-center bg-black/50">
// //                                 <h3 className="text-2xl font-semibold text-white">
// //                                     2 MUMBAI
// //                                 </h3>
// //                             </div>
// //                         </div>
// //                         <div className="p-6">
// //                             <p className="text-black-200/80">
// //                                 91springboard Lotus,
// //                                 <br />
// //                                 Plot No. D-5, Road No. 20, Marol MIDC,
// //                                 <br />
// //                                 Shree Krishna Nagar, Marol MIDC,
// //                                 <br />
// //                                 Industry Estate, Andheri East, Mumbai,
// //                                 <br />
// //                                 Maharashtra 400069, India
// //                             </p>
// //                             <a
// //                                 href="https://goo.gl/maps/example" // Replace with actual Google Maps link
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                                 className="mt-4 inline-block text-black-500 hover:underline"
// //                             >
// //                                 Check in Google Maps
// //                             </a>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }

// // import Image from "next/image";
// // import Link from "next/link";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import emailjs from "@emailjs/browser";

// export default function Contact() {
//     // const [formData, setFormData] = useState({
//     //     name: "",
//     //     email: "",
//     //     contact: "",
//     //     message: "",
//     // });
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [contact, setContact] = useState("");
//     const [message, setMessage] = useState("");

//     const handleNameChange = (e) => {
//         const { id, value } = e.target;
//         setName(e.target.value);
//     };
//     const handleEmailChange = (e) => {
//         const { id, value } = e.target;
//         setEmail(e.target.value);
//         setErrors({
//             ...errors,
//             email: validateEmail(value) ? "" : "Invalid email address.",
//         });
//     };
//     const handleContactChange = (e) => {
//         const { id, value } = e.target;
//         setContact(e.target.value);
//         setErrors({
//             ...errors,
//             contactNumber: validateContactNumber(value)
//                 ? ""
//                 : "Invalid contact number.",
//         });
//     };
//     const handleMessageChange = (e) => {
//         const { id, value } = e.target;
//         setMessage(e.target.value);
//     };

//     const [errors, setErrors] = useState({
//         email: "",
//         contactNumber: "",
//     });

//     const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     const validateContactNumber = (number) => /^\+?[0-9]{9,15}$/.test(number);

//     // const handleChange = (e) => {
//     //     const { name, value } = e.target;
//     //     setFormData({ ...formData, [name]: value });

//     //     // Validate fields on change
//     //     if (name === "email") {
//     //     } else if (name === "contactNumber") {
//     //     }
//     // };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // const { name, email, contact, message } = formData;

//         if (!name || !email || !contact || !message) {
//             toast.error("Please fill in all fields before submitting.");
//             return;
//         }
//         if (errors.contactNumber || errors.email) {
//             toast.error("Please fix the issues.");
//             return;
//         }

//         emailjs
//             .send(
//                 "service_ktdvgr8", // Replace with your EmailJS service ID
//                 "template_pe7j3zq", // Replace with your EmailJS template ID
//                 {
//                     name: name,
//                     email: email,
//                     contact: contact,
//                     message: message,
//                 },
//                 "bI4RIzSRyg4184cPm" // Replace with your EmailJS public key
//             )
//             .then(
//                 (response) => {
//                     console.log("Email sent successfully!", response);
//                     toast.success("Your message has been sent successfully!");
//                 },
//                 (error) => {
//                     console.error("Error sending email:", error);
//                     toast.success("Failed to send the mail!");
//                 }
//             );

//         // setFormData({ name: "", email: "", contactNumber: "", message: "" });
//         setName("");
//         setEmail("");
//         setContact("");
//         setMessage("");
//     };
//     return (
//         <section>
//             <div className="mx-auto max-w-6xl px-4 sm:px-6">
//                 {/* Section header */}
//                 <div className="pb-12 text-center md:pb-20">
//                     <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-black-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-black-200/50">
//                         <span className="inline-flex bg-gradient-to-r from-black-500 to-black-200 bg-clip-text text-transparent">
//                             Get in Touch
//                         </span>
//                     </div>
//                     <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.black.200),theme(colors.gray.50),theme(colors.black.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
//                         We'd Love to Hear From You
//                     </h2>
//                     <p className="text-lg text-black-200/65">
//                         Whether you have questions, feedback, or need
//                         assistance, feel free to reach out. We're here to help!
//                     </p>
//                 </div>

//                 {/* Contact Form */}
//                 <div className="grid gap-40 md:grid-cols-1 mx-auto max-w-4xl">
//                     {/* Form */}
//                     <div>
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-6">
//                                 <label
//                                     className="block text-sm font-medium text-black-200/80"
//                                     htmlFor="name"
//                                 >
//                                     Your Name
//                                 </label>
//                                 <input
//                                     id="name"
//                                     type="text"
//                                     value={name}
//                                     onChange={handleNameChange}
//                                     className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-500"
//                                     placeholder="Enter your name"
//                                 />
//                             </div>
//                             <div className="mb-6">
//                                 <label
//                                     className="block text-sm font-medium text-black-200/80"
//                                     htmlFor="email"
//                                 >
//                                     Your Email
//                                 </label>
//                                 <input
//                                     id="email"
//                                     type="email"
//                                     value={email}
//                                     onChange={handleEmailChange}
//                                     className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-500"
//                                     placeholder="Enter your email"
//                                 />
//                                 {errors.email && (
//                                     <p style={{ color: "red" }}>
//                                         {errors.email}
//                                     </p>
//                                 )}
//                             </div>
//                             <div className="mb-6">
//                                 <label
//                                     className="block text-sm font-medium text-black-200/80"
//                                     htmlFor="contactNumber"
//                                 >
//                                     Contact Number
//                                 </label>
//                                 <input
//                                     id="contactNumber"
//                                     type="tel"
//                                     value={contact}
//                                     onChange={handleContactChange}
//                                     className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-500"
//                                     placeholder="Enter your contact number"
//                                 />
//                                 {errors.contactNumber && (
//                                     <p style={{ color: "red" }}>
//                                         {errors.contactNumber}
//                                     </p>
//                                 )}
//                             </div>
//                             <div className="mb-6">
//                                 <label
//                                     className="block text-sm font-medium text-black-200/80"
//                                     htmlFor="message"
//                                 >
//                                     Message
//                                 </label>
//                                 <textarea
//                                     id="message"
//                                     rows={4}
//                                     value={message}
//                                     onChange={handleMessageChange}
//                                     className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-500"
//                                     placeholder="Write your message"
//                                 ></textarea>
//                             </div>
//                             <div>
//                                 <button
//                                     type="submit"
//                                     className="btn w-full bg-gradient-to-t from-black-600/40 to-black-500 text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
//                                 >
//                                     Send Message
//                                 </button>
//                             </div>
//                         </form>
//                     </div>

//                     {/* Contact Info */}
//                     {/* <div className="space-y-8">
//                         <div>
//                             <h3 className="text-lg font-semibold text-black-200">
//                                 Our Office
//                             </h3>
//                             <p className="text-black-200/70">
//                                 NCR – 108, Tower 3 , Park View Residency 122003
//                                 <br />
//                                 Bangalore - Falcon Towers , Ejipura ,
//                                 Koramangala , Bangalore 560047
//                             </p>
//                         </div>
//                         <div className="my-auto right-0">
//                             <h3 className="text-lg font-semibold text-black-200">
//                                 Email Us
//                             </h3>
//                             <p className="text-black-200/70">
//                                 contact@theajai.com
//                             </p>
//                         </div>
//                         <div>
//                             <h3 className="text-lg font-semibold text-black-200">
//                                 Call Us
//                             </h3>
//                             <p className="text-black-200/70">
//                                 +91 (777) 608-2238
//                             </p>
//                         </div>
//                     </div> */}
//                 </div>

//                 {/* Map Section */}
//                 <div className="mt-16 mb-16">
//                     <iframe
//                         className="w-full h-64 rounded-lg border border-gray-700"
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3769970639237!2d77.01785269277391!3d28.498303127614914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19ef78b1ff4f%3A0x932f762f22ed260!2sPark%20View%20Residency%2C%20Bestech%20Park%20View%20Residency%2C%20Block%20C%201%2C%20Sector%203%2C%20Gurugram%2C%20Haryana%20122017!5e0!3m2!1sen!2sin!4v1735842331484!5m2!1sen!2sin"
//                         width="600"
//                         height="450"
//                         style={{ border: 0 }}
//                         loading="lazy"
//                         referrerPolicy="no-referrer-when-downgrade"
//                     ></iframe>
//                 </div>

//                 {/* Office Locations */}
//                 <div className="grid gap-12 md:grid-cols-2">
//                     {/* Pune Office */}
//                     <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//                         <div className="relative h-64">
//                             {/* <Image
//                                 src="/path-to-pune-image.jpg" // Replace with actual image path
//                                 alt="Pune Office"
//                                 layout="fill"
//                                 objectFit="cover"
//                             /> */}
//                             <div className="absolute inset-0 flex items-center justify-center bg-black/50">
//                                 <h3 className="text-2xl font-semibold text-white">
//                                     1 NCR
//                                 </h3>
//                             </div>
//                         </div>
//                         <div className="p-6">
//                             <p className="text-black-200/80 text-center">
//                                 108, Tower 3,
//                                 <br />
//                                 Park View Residency,
//                                 <br />
//                                 Palam Vihar Sector 3,
//                                 <br />
//                                 Gurugram,
//                                 <br />
//                                 Haryana 411045
//                             </p>
//                             <p className="text-black-200/80 mt-2 text-center">
//                                 <strong>Contact:</strong> +91 7776082238
//                             </p>
//                             <p className="text-black-200/70 text-center">
//                                 <strong>Email:</strong> contact@theajai.com
//                             </p>
//                             <p className="text-center">
//                                 <a
//                                     href="https://maps.app.goo.gl/qkoWMReYPA2akWxJA" // Replace with actual Google Maps link
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="mt-4 inline-block text-black-500 hover:underline"
//                                 >
//                                     Check in Google Maps
//                                 </a>
//                             </p>
//                         </div>
//                     </div>

//                     {/* Mumbai Office */}
//                     <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//                         <div className="relative h-64">
//                             {/* <Image
//                                 src="/path-to-mumbai-image.jpg" // Replace with actual image path
//                                 alt="Mumbai Office"
//                                 layout="fill"
//                                 objectFit="cover"
//                             /> */}
//                             <div className="absolute inset-0 flex items-center justify-center bg-black/50">
//                                 <h3 className="text-2xl font-semibold text-white">
//                                     2 Bengaluru
//                                 </h3>
//                             </div>
//                         </div>
//                         <div className="p-6">
//                             <p className="text-black-200/80 text-center">
//                                 14 , 9th Main GG Road,
//                                 <br />
//                                 Falcon Towers,
//                                 <br />
//                                 Ejipura,
//                                 <br />
//                                 Kormangala,
//                                 <br />
//                                 Bangalore 560047
//                             </p>
//                             <p className="text-black-200/80 mt-2 text-center">
//                                 <strong>Contact:</strong> +91 7776082238
//                             </p>
//                             <p className="text-black-200/80 text-center">
//                                 <strong>Email:</strong> contact@theajai.com
//                             </p>
//                             <p className="text-center">
//                                 <a
//                                     href="https://maps.app.goo.gl/2cyNeT78B71xnfak8" // Replace with actual Google Maps link
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="mt-4 inline-block text-black-500 hover:underline"
//                                 >
//                                     Check in Google Maps
//                                 </a>
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Contact Form
//                 <div className="mt-12">
//                     <form className="grid gap-6 bg-gray-800 p-6 rounded-lg shadow-lg">
//                         <div className="grid gap-4 md:grid-cols-2">
//                             <div>
//                                 <label
//                                     htmlFor="name"
//                                     className="block text-black-200/80"
//                                 >
//                                     Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     className="w-full rounded border border-gray-700 bg-gray-900 px-4 py-2 text-black-200 focus:outline-none focus:ring-2 focus:ring-black-500"
//                                     placeholder="Enter your name"
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label
//                                     htmlFor="email"
//                                     className="block text-black-200/80"
//                                 >
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     className="w-full rounded border border-gray-700 bg-gray-900 px-4 py-2 text-black-200 focus:outline-none focus:ring-2 focus:ring-black-500"
//                                     placeholder="Enter your email"
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div>
//                             <label
//                                 htmlFor="phone"
//                                 className="block text-black-200/80"
//                             >
//                                 Contact Number
//                             </label>
//                             <input
//                                 type="tel"
//                                 id="phone"
//                                 name="phone"
//                                 className="w-full rounded border border-gray-700 bg-gray-900 px-4 py-2 text-black-200 focus:outline-none focus:ring-2 focus:ring-black-500"
//                                 placeholder="Enter your contact number"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label
//                                 htmlFor="message"
//                                 className="block text-black-200/80"
//                             >
//                                 Message
//                             </label>
//                             <textarea
//                                 id="message"
//                                 name="message"
//                                 rows={4}
//                                 className="w-full rounded border border-gray-700 bg-gray-900 px-4 py-2 text-black-200 focus:outline-none focus:ring-2 focus:ring-black-500"
//                                 placeholder="Write your message here"
//                                 required
//                             ></textarea>
//                         </div>
//                         <div>
//                             <button
//                                 type="submit"
//                                 className="w-full rounded bg-black-500 px-6 py-2 text-gray-900 hover:bg-black-600"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div> */}
//             </div>
//         </section>
//     );
// }

import React from "react";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textArea";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            {/* Header Section */}
            <div className="text-center pt-8">
                <h1 className="text-4xl font-bold text-blue-900">CONTACT</h1>
                <p className="text-blue-900/80 mt-2">
                    We will reply within 24 working hours
                </p>
            </div>

            {/* Contact Form & Info Section */}
            <div className="flex flex-wrap justify-center gap-8 mt-8 px-4">
                {/* Information Card */}
                <Card className="w-full max-w-md p-6 border-gray-200 bg-gray-50 rounded-xl">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div>
                                <MapPin className="text-blue-500" />
                            </div>
                            <div>
                                <div className="text-blue-900">Location:</div>
                                <span className="text-gray-700">
                                    Visakhapatnam, Andhra Pradesh, India 530016
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div>
                                <Mail className="text-blue-500" />
                            </div>
                            <div>
                                <div className=" text-blue-900">Email:</div>
                                <span className="text-gray-700">
                                    Vpeenergy@gmail.com
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div>
                                <Phone className="text-blue-500" />
                            </div>
                            <div>
                                <div className=" text-blue-900">Phone:</div>
                                <span className="text-gray-700">
                                    +91 8977017707
                                </span>
                            </div>
                        </div>
                        {/* Embedded Map */}
                        <iframe
                            className="w-full rounded-xl border-gray-300 h-64 mt-4"
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1717888306227!2d83.3012840743546!3d17.686815087835597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d788ae8f%3A0xa7d63ef7d1e16065!2sVirya%20Paramita%20Energy!5e0!3m2!1sen!2sin!4v1680877777053!5m2!1sen!2sin"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </Card>

                {/* Contact Form */}
                <Card className="w-full max-w-lg p-6 bg-gray-50 rounded-xl">
                    <form className="space-y-4">
                        <Input
                            placeholder="Your Name"
                            required
                            className="w-full"
                        />
                        <Input
                            placeholder="Your Email"
                            type="email"
                            required
                            className="w-full"
                        />
                        <Input
                            placeholder="Subject"
                            required
                            className="w-full"
                        />
                        <Textarea
                            placeholder="Message"
                            rows={4}
                            required
                            className="w-full"
                        />
                        <button className="w-full bg-blue-300 hover:bg-blue-900/90 text-blue-900 rounded-lg p-3">
                            Send Message
                        </button>
                    </form>
                </Card>
            </div>

            {/* Newsletter Section */}
            <div className="mt-12 bg-gray-50 py-6 px-4 text-center">
                <h2 className="text-xl font-semibold text-blue-900">
                    Join Our Newsletter
                </h2>
                <p className="text-gray-600">
                    Stay in the Loop: Subscribe to Our Newsletter
                </p>
                <div className="mt-4 max-w-lg mx-auto flex gap-2">
                    <Input
                        placeholder="Your Email"
                        type="email"
                        required
                        className="flex-grow"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}
