import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import stress from './stress.jpg';
import anxiety from './anxiety.png';
import depression from './depression.jpg';

const Content = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      <section>
        <div className="text-box">
          <h1>Mental Health Importance</h1>
          <p> Mental health relates to a person’s emotional, psychological, and social well-being. It is more important because it affects every aspect of our lives, and mental health conditions influence everything we do, think, or say. Mental and physical well-being are equally crucial components of general wellness. For example, depression raises the threat of multiple physical health problems, especially heart disease, diabetes, and stroke. Likewise, chronic illnesses can increase the risk of mental sickness. Keeping positive mental fitness can boost productivity, enhance our self-image, and improve relationships with our loved ones.</p>
          <a href=".text-box" className="visit-btn">Visit Us to know More</a>
        </div>

      </section>
      <section className="course">
        <h1>Diagnosis & Treatment</h1>
        <div className="row">
          <div className="course-col">
            <h3>Diagnosis</h3>
            <p>To determine a diagnosis and check for related complications, you may have:
              A physical exam. Your doctor will try to rule out physical problems that could cause your symptoms.
              Lab tests. These may include, for example, a check of your thyroid function or a screening for alcohol and drugs.
              A psychological evaluation. A doctor or mental health professional talks to you about your symptoms, thoughts, feelings and behavior patterns. You may be asked to fill out a questionnaire to help answer these questions.
            </p>
          </div>
          <div className="course-col">
            <h3>Treatment</h3>
            <p>
              Your treatment depends on the type of mental illness you have, its severity and what works best for you. In many cases, a combination of treatments works best.If you have a mild mental illness with well-controlled symptoms, treatment from your primary care provider may be sufficient. However, often a team approach is appropriate to make sure all your psychiatric, medical and social needs are met. This is especially important for severe mental illnesses, such as schizophrenia.</p>
          </div>
          <div className="course-col">
            <h3>Advanced</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia impedit ipsam tempore
              porro commodi fugiat, eligendi sequi quis sapiente, modi explicabo quaerat qui eveniet neque
              consectetur harum temporibus atque assumenda distinctio voluptate ab quclassNameem maxime magnam. Enim,
              dolor obcaecati?</p>
          </div>
        </div>
      </section>
      <section className="services-container">
        <h1 className="h-primary center">MENTAL HEALTH MATTERS</h1>
        <div className="services">
          <div className="box">
            <img src={stress} alt="" srcset="" />
            <h2 className="h-secondary center">Stress</h2>
            <p className="center">Stress is a normal human reaction that happens to everyone. In fact, the human body is designed to experience stress and react to it. When you experience changes or challenges (stressors), your body produces physical and mental responses. That’s stress.Stress responses help your body adjust to new situations. Stress can be positive, keeping us alert, motivated and ready to avoid danger. </p>
          </div>
          <div className="box">
            <img src={anxiety} alt="" srcset="" />
            <h2 className="h-secondary center">Anxiety</h2>
            <p className="center">Anxiety is a feeling of fear, dread, and uneasiness. It might cause you to sweat, feel restless and tense, and have a rapid heartbeat. It can be a normal reaction to stress. For example, you might feel anxious when faced with a difficult problem at work, before taking a test, or before making an important decision. It can help you to cope. The anxiety may give you a boost of energy or help you focus. But for people with anxiety disorders, the fear is not temporary and can be overwhelming.</p>
          </div>
          <div className="box">
            <img src={depression} alt="" srcset="" />
            <h2 className="h-secondary center">Depression</h2>
            <p className="center">Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. Also called major depressive disorder or clinical depression, it affects how you feel, think and behave and can lead to a variety of emotional and physical problems. You may have trouble doing normal day-to-day activities, and sometimes you may feel as if life isn't worth living.</p>
          </div>
        </div>
      </section>
      <footer>
        <div className="wrapper">
          <ul>
            <li data-aos="fade-in" data-aos-delay="0"><a className="semibold title" href="">Mental Health Matters</a></li>
            <li data-aos="fade-in" data-aos-delay="0"><a href=".text-box">Stress</a></li>
            <li data-aos="fade-in" data-aos-delay="0"><a href=".text-box">Anxiety</a></li>
            <li data-aos="fade-in" data-aos-delay="0"><a href=".text-box">Depression</a></li>
            <li data-aos="fade-in" data-aos-delay="0"><a className="semibold title" href=".text-box">Find Help</a></li>
            <li data-aos="fade-in" data-aos-delay="0"><a href=".text-box">Helplines</a></li>
            <li data-aos="fade-in" data-aos-delay="0"><a href=".text-box">Find a Therapist</a></li>
            <li data-aos="fade-in" data-aos-delay="0"><a href=".text-box">Stories of Hope</a></li>
          </ul>
          <ul>
            <li data-aos="fade-in" data-aos-delay="100"><a className="semibold title" href="">Initiatives</a></li>
            <li data-aos="fade-in" data-aos-delay="100"><a href=".text-box">Counselling Assist</a></li>
            <li data-aos="fade-in" data-aos-delay="100"><a href=".text-box">School Program</a></li>
            <li data-aos="fade-in" data-aos-delay="100"><a href=".text-box">Doctors Program</a></li>
            <li data-aos="fade-in" data-aos-delay="100"><a href=".text-box">Rural Program</a></li>
            <li data-aos="fade-in" data-aos-delay="100"><a href=".text-box">Research</a></li>
            <li data-aos="fade-in" data-aos-delay="100"><a href=".text-box">Lecture Series</a></li>
            <li data-aos="fade-in" data-aos-delay="100"><a href=".text-box">Campaigns</a></li>
          </ul>
          <ul>
            <li data-aos="fade-in" data-aos-delay="150"><a className="semibold title" href=".text-box">News & Resources</a></li>
            <li data-aos="fade-in" data-aos-delay="150"><a href=".text-box">Press Releases</a></li>
            <li data-aos="fade-in" data-aos-delay="150"><a href=".text-box">Media Coverage</a></li>
            <li data-aos="fade-in" data-aos-delay="150"><a href=".text-box">Image Gallery</a></li>
            <li data-aos="fade-in" data-aos-delay="150"><a href=".text-box">VclassNameeo Gallery</a></li>
            <li data-aos="fade-in" data-aos-delay="150"><a href=".text-box">Annual Reports</a></li>
            <li data-aos="fade-in" data-aos-delay="150"><a href=".text-box">Research Reports</a></li>
            <li data-aos="fade-in" data-aos-delay="150"><a className="semibold" href=".text-box">Blog</a></li>
          </ul>
          <ul>
            <li data-aos="fade-in" data-aos-delay="200"><a className="semibold title" href=".text-box">Get Involved</a></li>
            <li data-aos="fade-in" data-aos-delay="200"><a href=".text-box">Donate</a></li>
            <li data-aos="fade-in" data-aos-delay="200"><a href=".text-box">Gift A Donation</a></li>
            <li data-aos="fade-in" data-aos-delay="200"><a href=".text-box">Volunteer</a></li>
            <li data-aos="fade-in" data-aos-delay="200"><a href=".text-box">Forms</a></li>
            <li data-aos="fade-in" data-aos-delay="200"><a className="semibold" href=".text-box">About Us</a></li>
            <li data-aos="fade-in" data-aos-delay="200"><a className="semibold" href=".text-box">FAQs</a></li>
          </ul>
          <ul>
            <li data-aos="fade-in" data-aos-delay="250"><a className="semibold" href=".text-box">Contact Us</a></li>
            <li data-aos="fade-in" data-aos-delay="250"><a href=".text-box">anand@gmail.com</a></li>
            <li data-aos="fade-in" data-aos-delay="250"><a className="semibold title" href=".text-box">Legal</a></li>
            <li data-aos="fade-in" data-aos-delay="250"><a href=".text-box">Transparency</a></li>
            <li data-aos="fade-in" data-aos-delay="250"><a href=".text-box">Cookies Policy</a></li>
            <li data-aos="fade-in" data-aos-delay="250"><a href=".text-box">Privacy Policy</a></li>
            <li data-aos="fade-in" data-aos-delay="250"><a href=".text-box">Terms of Use</a></li>
            <li data-aos="fade-in" data-aos-delay="300"><a href=".text-box">Disclaimers</a></li>
          </ul>
          <ul>
          </ul>
        </div>
        <div data-aos="fade-in" data-aos-delay="130" className="copyright">
          <div className="wrapper pt-0 pb-0 sclassNameePadding" style={{ display: "flex !important" }}>
            <p>© 2022 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div >
  );
};

export default Content;
