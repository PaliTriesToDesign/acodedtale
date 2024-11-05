import { useEffect, useState } from "react";
import Email from "./Email";

function EmailList({ count, username, onEmailClick, activeColor, getUserLevel }) {
    const emailTemplates = [
        {
            companyName: "Disillusioned Applicants Ltd.",
            emailSubject: "Application Acknowledgment",
            emailTitle: `We’re Sorry, ${username}`,
            emailBody: "Thank you for applying. Your application is now on the pile of dreams that may never come true."
        },
        {
            companyName: "Dreadful Interviews Inc.",
            emailSubject: "Thanks for Your Application!",
            emailTitle: `Another One Bites the Dust`,
            emailBody: `Hey ${username}, we appreciate your effort, but we’re still looking for someone who can do backflips while coding.`
        },
        {
            companyName: "Painful Hiring Process Corp.",
            emailSubject: "Your Application is Under Review",
            emailTitle: `Still Waiting...`,
            emailBody: `Hi ${username}, your application is in a lengthy review process, currently waiting in the queue behind a mountain of paperwork.`
        },
        {
            companyName: "Job Desperation LLC",
            emailSubject: "We’ve Received Your Application!",
            emailTitle: `Hold On, ${username}!`,
            emailBody: `Thanks for your application! We’ll get back to you... as soon as we finish our coffee and the next season of our favorite show.`
        },
        {
            companyName: "Employment Hopelessness Inc.",
            emailSubject: "Thanks for Applying!",
            emailTitle: `It’s Not You, It’s Us...`,
            emailBody: `Dear ${username}, we enjoyed your application, but we’re currently looking for someone with the ability to walk on water.`
        },
        {
            companyName: "Job Hunt Fiasco Ltd.",
            emailSubject: "Application Status Update",
            emailTitle: `Still in Limbo!`,
            emailBody: `Hi ${username}, your application is still floating in the abyss of our inbox. Don’t worry; it’s a nice place to visit!`
        },
        {
            companyName: "Rejection Factory LLC",
            emailSubject: "We’ve Reviewed Your Application",
            emailTitle: `You’ve Been Selected... for Rejection!`,
            emailBody: `Hey ${username}, congratulations! You’re officially part of our extensive collection of rejected applications.`
        },
        {
            companyName: "Career Catastrophe Inc.",
            emailSubject: "Application Received!",
            emailTitle: `Thanks, ${username}!`,
            emailBody: `Your application is now in our 'What Were They Thinking?' folder. We appreciate your creativity!`
        },
        {
            "companyName": "Dream Jobs Inc.",
            "emailSubject": "Your Application Has Been Received!",
            "emailTitle": "Congratulations!",
            "emailBody": `We’ve received your application, ${username}, and have decided to keep it in our ‘maybe’ folder. We’ll let you know in six months, or when the stars align.`
        },
        {
            "companyName": "Perpetual Interns LLC",
            "emailSubject": "Thanks for Applying!",
            "emailTitle": "Not Quite What We're Looking For...",
            "emailBody": `While your qualifications are impressive, ${username}, we’re looking for someone who can juggle flaming swords and speak fluent whale. Keep trying!`
        },
        {
            "companyName": "Overqualified, Inc.",
            "emailSubject": "We're Sorry!",
            "emailTitle": "You’re Overqualified!",
            "emailBody": `We appreciate your interest, ${username}, but we fear your vast experience might scare our entry-level staff. We recommend looking for jobs where your talents can shine!`
        },
        {
            "companyName": "Ghosting Corp.",
            "emailSubject": "We’re Just Not That Into You",
            "emailTitle": "Thanks for Your Application!",
            "emailBody": `After much consideration, we’ve decided to ghost you, ${username}. It’s not you, it’s us… mostly us. Good luck out there!`
        },
        {
            "companyName": "Jobless Wonders",
            "emailSubject": "Congratulations, You’ve Made It to Round One!",
            "emailTitle": "We’d Like to Invite You for an Interview!",
            "emailBody": `But first, could you solve this Rubik's cube blindfolded, ${username}? Just kidding—sort of. See you next week!`
        },
        {
            "companyName": "Feedback Loop Ltd.",
            "emailSubject": "We Appreciate Your Application!",
            "emailTitle": "Unfortunately, No Feedback Provided",
            "emailBody": `Thank you for your application, ${username}. Unfortunately, we can’t provide feedback because our policy is to avoid responsibility. Best of luck!`
        },
        {
            "companyName": "Infinite Hopes Corp.",
            "emailSubject": "Your Application Status",
            "emailTitle": "Still Waiting for HR to Decide",
            "emailBody": `Your application is currently in limbo, ${username}, where it will remain until our HR team finishes their game of solitaire. Patience is a virtue!`
        },
        {
            "companyName": "Illusionary Opportunities",
            "emailSubject": "Thank You for Your Interest!",
            "emailTitle": "We’re Looking for Unicorns",
            "emailBody": `While we loved your application, ${username}, we are specifically searching for candidates with magical powers. Keep dreaming!`
        },
        {
            "companyName": "Everlasting Rejections",
            "emailSubject": "Rejection Notification",
            "emailTitle": "You’ve Been Rejected—Again!",
            "emailBody": `Congratulations on reaching another milestone in your job search, ${username}! We’ve rejected your application with gusto. Onward!`
        },
        {
            "companyName": "Job Seekers Anonymous",
            "emailSubject": "Thanks for Your Application!",
            "emailTitle": "You’re Not Alone!",
            "emailBody": `Many of us have applied and faced rejection, ${username}. Remember, every 'no' brings you closer to a 'maybe!' Keep the faith!`
        },
        {
            companyName: "OptiTech",
            emailSubject: "Thank You for Applying",
            emailTitle: "We'll Review Your Application Soon",
            emailBody: `We know you spent hours on that cover letter, but we really just skimmed it. Do not reply to this email, ${username}.`
        },
        {
            companyName: "NextGen Tech",
            emailSubject: "Thank You for Applying!",
            emailTitle: "We’ll Review Your Submission",
            emailBody: `Your cover letter has been successfully ignored, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Nimbus Inc.",
            emailSubject: "We Have Your Application",
            emailTitle: "Application Under Review",
            emailBody: `We’re carefully reviewing your resume, but that cover letter? Not so much, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Apex Corp",
            emailSubject: "Your Application is Being Reviewed",
            emailTitle: "Thank You for Applying",
            emailBody: `Your time spent crafting the perfect cover letter will not go unnoticed—just unread, ${username}. Do not reply to this email.`
        },
        {
            companyName: "GlobalData",
            emailSubject: "Thank You for Applying",
            emailTitle: "What’s Next?",
            emailBody: `Your cover letter has been sent to a folder labeled 'probably not reading this', ${username}. Do not reply to this email.`
        },
        {
            companyName: "EcoTech Solutions",
            emailSubject: "We’ve Received Your Application",
            emailTitle: "Next Steps",
            emailBody: `We received your resume and your beautifully written cover letter. Too bad we won’t read it, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Greenfield Corp",
            emailSubject: "Thank You for Applying!",
            emailTitle: "Application in Review",
            emailBody: `Your resume and cover letter are in our system. Only the resume will be reviewed, ${username}. Do not reply to this email.`
        },
        {
            companyName: "NeoSystems",
            emailSubject: "We’ve Received Your Application",
            emailTitle: "Your Application is Being Processed",
            emailBody: `Cover letter? We know it’s there, but honestly, we just focus on resumes, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Vista Global",
            emailSubject: "Thanks for Submitting Your Application",
            emailTitle: "Application in Progress",
            emailBody: `Thank you for applying! Your cover letter will remain unread, ${username}. Do not reply to this email.`
        },
        {
            companyName: "BrightPath Inc.",
            emailSubject: "Your Application is Under Review",
            emailTitle: "What Happens Next?",
            emailBody: `We appreciate the thought you put into your cover letter. Our system filters it out, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Cloudify Tech",
            emailSubject: "Thank You for Applying",
            emailTitle: "Next Steps for Your Application",
            emailBody: `We received your cover letter, but we won't be reading it, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Agile Innovations",
            emailSubject: "Your Application Has Been Submitted",
            emailTitle: "Thank You for Applying",
            emailBody: `Your cover letter was received with enthusiasm and ignored with indifference, ${username}. Do not reply to this email.`
        },
        {
            companyName: "TechFront",
            emailSubject: "Your Application is Being Processed",
            emailTitle: "Thank You for Your Interest",
            emailBody: `We received your application and cover letter. But let’s be honest, we probably won’t read it, ${username}. Do not reply to this email.`
        },
        {
            companyName: "InnoSolutions",
            emailSubject: "Thank You for Applying!",
            emailTitle: "Application Received",
            emailBody: `Your application is in our hands, and your cover letter? Not so much, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Swift Innovations",
            emailSubject: "Application Confirmation",
            emailTitle: "Thank You for Your Application",
            emailBody: `Your application is important to us, but your cover letter will likely remain unread, ${username}. Do not reply to this email.`
        },
        {
            companyName: "DataVista",
            emailSubject: "Your Application Has Been Received",
            emailTitle: "Application Status Update",
            emailBody: `Thank you for your application! Rest assured, your cover letter will not be considered, ${username}. Do not reply to this email.`
        },
        {
            companyName: "FusionTech",
            emailSubject: "Thank You for Your Application",
            emailTitle: "Application Processing",
            emailBody: `Your cover letter was received, but we’ll probably ignore it, ${username}. Do not reply to this email.`
        },
        {
            companyName: "NextGen Innovations",
            emailSubject: "Application Received",
            emailTitle: "We’re Reviewing Your Submission",
            emailBody: `Your cover letter is in our system, but it might as well not be, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Synergy Corp",
            emailSubject: "Your Application is Being Reviewed",
            emailTitle: "Thank You for Your Submission",
            emailBody: `We received your resume and cover letter, but we likely won’t read the latter, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Zenith Tech",
            emailSubject: "Application Confirmation",
            emailTitle: "Thank You for Applying",
            emailBody: `Your application is in our hands, but your cover letter is probably going to be ignored, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Funky Widgets Inc.",
            emailSubject: "Your Application is Here!",
            emailTitle: "Thanks for Reaching Out!",
            emailBody: `We got your application, but your cover letter is about as interesting as watching paint dry, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Boring Co.",
            emailSubject: "We Acknowledged Your Application",
            emailTitle: "Your Submission is in the Queue",
            emailBody: `Thank you for applying! Unfortunately, your cover letter might put a sloth to sleep, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Mediocre Enterprises",
            emailSubject: "Your Application Has Been Processed",
            emailTitle: "We’ve Received Your Submission",
            emailBody: `Thanks for sending your application! Your cover letter? It’s like a flat soda—meh, ${username}. Do not reply to this email.`
        },
        {
            companyName: "The Yawn Factory",
            emailSubject: "Thanks for Applying!",
            emailTitle: "We’ve Got Your Application",
            emailBody: `Your cover letter is in the system, but we may skip reading it like a boring novel, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Snooze Corp.",
            emailSubject: "Application Acknowledgment",
            emailTitle: "We’ve Received Your Application",
            emailBody: `Thank you for your submission! Your cover letter? It might just make us snore, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Lackluster LLC",
            emailSubject: "We Got Your Application",
            emailTitle: "Your Submission is Being Reviewed",
            emailBody: `Thanks for applying! Your cover letter might be as exciting as a bowl of plain oatmeal, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Meh Industries",
            emailSubject: "Application Received",
            emailTitle: "Your Application Status",
            emailBody: `We appreciate your effort, but your cover letter is a real snooze-fest, ${username}. Do not reply to this email.`
        },
        {
            companyName: "Dullsville Ltd.",
            emailSubject: "Thanks for Your Application",
            emailTitle: "Application Acknowledgment",
            emailBody: `Your application is here! Your cover letter, though? It’s about as thrilling as watching grass grow, ${username}. Do not reply to this email.`
        }        
    ];
    
    const [emails, setEmails] = useState([]);
    
    // Generate new emails only when count increases
    useEffect(() => {
        const randomNumber = () => Math.floor(Math.random() * emailTemplates.length);

        // Append new emails to the existing list when the count increases
        if (emails.length < count) {
            const newEmails = Array.from({ length: count - emails.length }, (_, i) => {
                const randomIndex = randomNumber();
                const template = emailTemplates[randomIndex];

                return (
                    <Email 
                        key={emails.length + i}
                        count={count}
                        companyName={template.companyName}
                        emailSubject={template.emailSubject}
                        emailTitle={template.emailTitle}
                        emailBody={template.emailBody}
                        activeColor={activeColor}
                        getUserLevel={getUserLevel}
                        onClick={() => {onEmailClick(template)}}
                    />
                );
            });

            setEmails(prevEmails => [...newEmails, ...prevEmails]); // Prepend new emails to the beginning
        }
    }, [count]); // Effect runs when count changes

    return (
        <div className="email-list">
            {emails}
        </div>
    );
}

export default EmailList;
