import React from 'react';

import PageCard from '../../components/page-card/page-card.component';

import './about-page.styles.css';
import aboutpictureone from '../../assets/About1.png';
import aboutpicturetwo from '../../assets/About2.png';

const AboutPage = () => (
    <div className='about-page-container'>
        <PageCard>
            <h1> About Page </h1>
            <p className="text-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor sodales velit, 
                sit amet consectetur lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed at nibh blandit, auctor est nec, volutpat nisl. Suspendisse lobortis, ante id 
                pharetra luctus, quam ex blandit magna, eget gravida lorem ipsum a quam. Suspendisse 
                quis hendrerit massa, posuere iaculis purus. Praesent volutpat ante justo, eget vehicula 
                tellus tincidunt a. Donec rutrum, lorem id posuere fringilla, tellus neque egestas elit,
                ut hendrerit turpis nisl ut diam. Nam congue mauris neque, eu posuere magna malesuada 
                feugiat. Morbi at enim at lacus tincidunt tempor at sed massa. 
                Nullam accumsan diam eu urna luctus, in iaculis enim pharetra. Integer pulvinar 
                pellentesque libero in facilisis. Proin urna ex, commodo ac urna ac, accumsan maximus 
                lorem. In enim lorem, suscipit a lectus sed, tincidunt faucibus tortor.
            </p>
            <div className='image-container'>
                <img src={aboutpictureone} className='about-page-images' alt='about-page-images' />
            </div>
            <p className="text-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor sodales velit, 
                sit amet consectetur lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed at nibh blandit, auctor est nec, volutpat nisl. Suspendisse lobortis, ante id 
                pharetra luctus, quam ex blandit magna, eget gravida lorem ipsum a quam. Suspendisse 
                quis hendrerit massa, posuere iaculis purus. Praesent volutpat ante justo, eget vehicula 
                tellus tincidunt a. Donec rutrum, lorem id posuere fringilla, tellus neque egestas elit,
                ut hendrerit turpis nisl ut diam. Nam congue mauris neque, eu posuere magna malesuada 
                feugiat. Morbi at enim at lacus tincidunt tempor at sed massa. 
                Nullam accumsan diam eu urna luctus, in iaculis enim pharetra. Integer pulvinar 
                pellentesque libero in facilisis. Proin urna ex, commodo ac urna ac, accumsan maximus 
                lorem. In enim lorem, suscipit a lectus sed, tincidunt faucibus tortor.
            </p>
            <div className='image-container'>
                <img src={aboutpicturetwo} className='about-page-images' alt='about-page-images' />
            </div>
            <p className="text-container"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor sodales velit, 
                sit amet consectetur lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed at nibh blandit, auctor est nec, volutpat nisl. Suspendisse lobortis, ante id 
                pharetra luctus, quam ex blandit magna, eget gravida lorem ipsum a quam. Suspendisse 
                quis hendrerit massa, posuere iaculis purus. Praesent volutpat ante justo, eget vehicula 
                tellus tincidunt a. Donec rutrum, lorem id posuere fringilla, tellus neque egestas elit,
                ut hendrerit turpis nisl ut diam. Nam congue mauris neque, eu posuere magna malesuada 
                feugiat. Morbi at enim at lacus tincidunt tempor at sed massa. 
                Nullam accumsan diam eu urna luctus, in iaculis enim pharetra. Integer pulvinar 
                pellentesque libero in facilisis. Proin urna ex, commodo ac urna ac, accumsan maximus 
                lorem. In enim lorem, suscipit a lectus sed, tincidunt faucibus tortor.
            </p>

        </PageCard>
    </div>
);

export default AboutPage;