import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'

//sarbottam 

import anesthlogy from './anesthlogy.webp'
import cardio from './cardio.webp'
import atindar from './atindar.png'
import chitranjan from './chitranjan.webp'
import derma from './dermatology.webp'
import dinesh from './dinesh.png'
import dipak from './dipak.webp'
import eco from './eco.webp'
import emer from './emer.jpg'
import endoscopy from './endoscopy.webp'
import ent from './ent.webp'
import generalSurgon from './generalSurgon.webp'
import gyno from './gyno.webp'
import icu from './icu.webp'
import infertility from './infertility.webp'
import internalMedice from './internalMedicine.webp'
import kaushal from './kaushal.png'
import lab from './lab.webp'
import laproscopy from './laproscopy.webp'
import logoSmall from './logoSmall.png'
import mita from './mita.png'
import neuro from './neuro.webp'
import nicu from './nicu.webp'
import ot from './operationThreater.webp'
import oral from './oral.webp'
import ortho from './ortho.webp'
import paedic from './paedic.webp'
import pharmacy from './pharmacy.webp'
import physio from './physio.webp'
import prabhat from './prabhat.png'
import psychi from './psychi.webp'
import rampukar from './rampukar.png'
import rupa from './rupa.jpg'
import sarbottamLogo from './sarbottamLogo.png'
import sarbottamLogo1 from './sarbottamLogo1.png'
import saroj from './saroj.png'
import umesh from './umesh.png'
import uro from './uro.png'
import urology from './urology.webp'
import vide from './vide.webp'
import videoXray from './videoXray.webp'
import ward from './ward.webp'



export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,

    // sarbottam

    anesthlogy,
    atindar,
    cardio,
    chitranjan,
    derma,
    dinesh,
    dipak,
    eco,
    emer,
    endoscopy,
    ent,
    generalSurgon,
    gyno,
    icu,
    infertility,
    internalMedice,
    kaushal,
    lab,
    laproscopy,
    logoSmall,
    mita,
    neuro,
    nicu,
    ot,
    oral,
    ortho,
    paedic,
    pharmacy,
    physio,
    prabhat,
    psychi,
    rampukar,
    rupa,
    sarbottamLogo,
    saroj,
    umesh,
    uro,
    urology,
    videoXray,
    vide,
    ward,
    sarbottamLogo1,

}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Ast.Prof Dr. Chitranjan Shah',
        image: chitranjan,
        speciality: 'Consultant Uro Surgeon',
        degree: 'MBBS, MS, Mch Uro Surgon',
        experience: '10 Years',
        about: 'Dr. Chitranjan, MD is a board-certified urologist with 10 years of experience specializing in prostate cancer, kidney stone management, and minimally invasive surgeries. Dedicated to patient-centered care, Dr. Chitranjan offers personalized treatment plans for a wide range of urological conditions.',
        fees: 750,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Dipak Kushwaha',
        image: dipak,
        speciality: 'General physician',
        degree: 'MBBS, MD (TU)',
        experience: '10+ Years',
        about: " Dr. Dipak Kr. Kushwaha is a Consultant Physician with expertise in diagnosing and managing complex medical conditions. Committed to delivering patient-centered care, Dr. Dipak provides tailored treatment plans to improve overall health and well-being.",
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Kaushal Kishor Singh',
        image: kaushal,
        speciality: 'Ortho & trauma Surgeon',
        degree: 'MBBS, MS',
        experience: '10+ Years',
        about: "Dr. Kaushal Kishor Singh is an Orthopedic and Trauma Surgeon specializing in advanced surgical treatments for fractures, joint injuries, and musculoskeletal conditions. Dedicated to precision care, Dr. Kaushal offers comprehensive solutions for trauma and orthopedic recovery.",
        fees: 750,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Prof. Dr. Umesh Kr. Yadav ',
        image: umesh,
        speciality: 'Consultant General & Laparoscopic Surgeon',
        degree: 'MBBS, MS, (NAMS Bir Hospital)',
        experience: '10+ Years',
        about: "Prof. Dr. Umesh Kr. Yadav is a Consultant General and Laparoscopic Surgeon with expertise in minimally invasive surgeries and the management of various abdominal and general surgical conditions. Committed to precision and patient care, Dr. Umesh provides tailored treatment plans for optimal recovery.",
        fees: 750,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Rampukar Sah',
        image: rampukar,
        speciality: 'Anesthesiologist, Critical Care, ICU & Pain Management',
        degree: 'MBBS, MD (TUTH)',
        experience: '8+ Years',
        about: "Dr. Rampukar Sah is an Anesthesiologist specializing in Critical Care, ICU management, and Pain Management. With a focus on patient safety and comfort, Dr. Rampukar delivers expert care in anesthesia, critical conditions, and pain relief techniques.",
        fees: 750,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Ram Prakash Thakur',
        image: doc6,
        speciality: 'Consultant Radiologist',
        degree: 'MBBS, MD (BPKIHS, Dharan)',
        experience: '8+ Years',
        about: "Dr. Ram Prakash Thakur is a Consultant Radiologist with expertise in advanced imaging techniques, including MRI, CT, and ultrasound. Dedicated to accurate diagnostics, Dr. Ram Prakash provides critical insights for effective treatment planning across various medical conditions.",
        fees: 750,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Atindar Mishra',
        image: atindar,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD, (PGIMER, CHANDIGARH)',
        experience: '8+ Years',
        about: "Dr. Atindar Mishra is a Pediatrician specializing in the care and treatment of infants, children, and adolescents. Committed to promoting healthy growth and development, Dr. Atindar Mishra provides compassionate, family-centered care for a wide range of pediatric conditions.",
        fees: 750,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Ram Prakash Sah',
        image: doc8,
        speciality: 'Neurologist',
        degree: 'MBBS, MD',
        experience: '8+ Years',
        about: "Dr. Ram Prakash Sah is a Neuro Psychiatric specialist focusing on the diagnosis and treatment of complex neurological and psychiatric disorders. Dedicated to holistic care, Dr. Ram Prakash Sah combines expertise in both fields to provide comprehensive treatment for mental and neurological health issues.",
        fees: 750,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Rupa Thakur',
        image: rupa,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD ',
        experience: '8+ Years',
        about: "Dr. Rupa Thakur is a Dermatologist specializing in the diagnosis and treatment of skin, hair, and nail conditions. With a commitment to enhancing skin health and appearance, Dr. Rupa Thakur offers expert care for a wide range of dermatological issues.",
        fees: 750,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Mita Maharjan Jha',
        image: mita,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD, (Gold Medalist)',
        experience: '8+ Years',
        about: "Dr. Mita Maharjan Jha is a Gynecologist specializing in women's reproductive health and wellness. Committed to providing compassionate care, Dr. Mita Maharjan Jha offers expert diagnosis and treatment for a range of gynecological conditions and preventive care.",
        fees: 750,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Prof. Dr. Saroj Dev',
        image: doc11,
        speciality: 'Maxillofacial Surgeon',
        degree: 'MBBS, M.D.S',
        experience: '10+ Years',
        about: 
        "Dr. Saroj Dev is a Maxillofacial Surgeon specializing in the diagnosis and surgical treatment of conditions affecting the face, jaw, and mouth. With a focus on precision and patient care, Dr. Saroj Dev provides expert solutions for complex maxillofacial issues.",
        fees: 750,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Dinesh Shah',
        image: dinesh,
        speciality: 'ENT',
        degree: 'MBBS, MS(ENT)',
        experience: '10+ Years',
        about: "Dr. Dinesh Shah is an ENT specialist (Otolaryngologist) with expertise in diagnosing and treating conditions of the ear, nose, and throat. Dedicated to providing comprehensive care, Dr. Dinesh Shah offers solutions for a wide range of ENT disorders and health issues.",
        fees: 750,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Prabhat Jha',
        image: prabhat,
        speciality: 'Brain & Spine Surgeon',
        degree: 'MBBS',
        experience: '10+ Years',
        about: "Dr. Prabhat Jha is a Brain and Spine Surgeon specializing in complex neurological and spinal conditions. Committed to advanced surgical techniques and patient-centered care, Dr. Prabhat Jha provides expert treatment for both brain and spinal disorders.",
        fees: 750,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]