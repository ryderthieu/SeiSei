import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Register.scss';
import Step1 from '../../components/StepOfRegister/Step1';
import Step2 from '../../components/StepOfRegister/Step2';
import Step3 from '../../components/StepOfRegister/Step3';

const Register = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        date: '',
        phone: '',
        address: '',
        gender: '',
        courses: '',
        cccd: null,
        avatar: null,
        acceptTerms: false,
        confirmationCode: ''
    });

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        // Xử lý logic gửi form ở đây
        console.log('Form submitted:', formData);
    };

    switch (step) {
        case 1:
            return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
        case 2:
            return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <Step3 formData={formData} setFormData={setFormData} prevStep={prevStep} handleSubmit={handleSubmit} />;
        default:
            return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    }
};

export default Register;