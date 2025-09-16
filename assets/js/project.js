// Project details data
const projectData = {
    project1: {
        title: "Text-CRS: Enhancing Certified Robustness for Adversarial Text Classification",
        timeline: "Jan 2025 - Apr 2025",
        details: [
            "Developed and extended the Text-CRS framework, achieving 84.5% accuracy (BERT) and 74.1% accuracy (LSTM) on the AGNews dataset after conducting word-level attacks (synonym substitution) to evaluate model robustness.",
            "Constructed smoothed classifiers and improved adversarial robustness by 5% through noise injection and hyperparameter tuning.",
            "Conducted evaluations using PyTorch, TextAttack, and NLP datasets (AG News, IMDB)."
        ]
    },
    project2: {
        title: "Wildfire Detection with ResNet-50",
        timeline: "Nov 2024 - Dec 2024",
        details: [
            "Implemented a fire/no-fire classification system by training ResNet-50 models from scratch on 11 unique wildfire datasets, ensuring independent training for each dataset with consistent training hyperparameters.",
            "Evaluated cross-dataset generalization by testing models trained on one dataset across the remaining 10, identifying the FLAME dataset as the most optimal for generalization with 73% average accuracy and an F1 score of 0.82."
        ]
    },
    project3: {
        title: "Facial Recognition App",
        timeline: "May 2024 - Jun 2024",
        details: [
            "Refined a 9-layer Siamese Neural Network using TensorFlow to process and classify over 10000 diverse images (positive and negative), to verify user's images with 99% accuracy in model validation.",
            "Developed a facial recognition app with Kivy and OpenCV achieving 97% testing accuracy in distinguishing images."
        ]
    },
    project4: {
        title: "Statistical Analysis of Premier League Dataset using SAS",
        timeline: "Oct 2023 - Dec 2023",
        details: [
            "Analyzed Premier League dataset (1993-2023) using SAS, processing 12,000+ matches and generated 5 supplementary datasets with 6 new attributes, expanding the original dataset by 75% for deeper analytical insights.",
            "Utilized correlation and regression techniques, achieving 90.48% accuracy in predicting future results."
        ]
    },
    project5: {
        title: "Data Visualization for Olympics Dashboard",
        timeline: "Sep 2023 - Dec 2023",
        details: [
            "Developed a dashboard for the Olympics dataset using D3.js and HTML, enabling interconnected data visualizations.",
            "Structured a responsive design for accurate, user-specific data delivery while ensuring visual consistency.",
            "Improved usability and visual storytelling by integrating CSS for an enhanced user interface and aesthetic appeal."
        ]
    },
    project6: {
        title: "Smart Car Parking Security: Multi-Modal Authentication & Attack Analysis",
        timeline: "Sep 2024 - Dec 2024",
        details: [
            "Implemented a triple-verification smart parking security system using deep learning models (YOLOv8, Siamese Networks, EfficientNet) for license plate recognition, facial recognition, and vehicle detection.",
            "Conducted vulnerability analysis using advanced adversarial attacks (FGSM, RoLMA, patch-based), identifying critical security weaknesses.",
            "Developed a novel dynamic weighted confidence scoring system to enhance system resilience against adversarial attacks.",
            "Demonstrated the impact of fusion attacks on interconnected systems, providing valuable insights for improving smart parking infrastructure security."
        ]
    },
    project7: {
        title: "Comparative Analysis of Product Price and Commodity Price Trends",
        timeline: "Mar 2022 - Jan 2023",
        details: [
            "Developed a PowerBI dashboard to assess the correlation between raw material prices and the corresponding fluctuations in finished product prices.",
            "Executed ETL and data modeling processes to integrate commodity prices data sourced from 3+ online platforms and purchase costs of finished goods retrieved from the company's ERP system.",
            "Delivered actionable insights, improving data accuracy by 25% and reducing reporting time by 10 hours per month."
        ]
    }
};

// Modal elements
const modal = document.getElementById("project-modal");
const closeButton = document.getElementsByClassName("close-button")[0];
const modalTitle = document.getElementById("modal-title");
const modalTimeline = document.getElementById("modal-timeline");
const modalDetails = document.getElementById("modal-details");

// Function to open modal with project details
function openProjectModal(projectId) {
    const project = projectData[projectId];
    
    // Set modal content
    modalTitle.textContent = project.title;
    modalTimeline.textContent = project.timeline;
    
    // Clear previous details
    modalDetails.innerHTML = "";
    
    // Add details as list items
    project.details.forEach(detail => {
        const li = document.createElement("li");
        li.textContent = detail;
        modalDetails.appendChild(li);
    });
    
    // Show the modal with fade animation
    modal.style.display = "block";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

// Add click event listeners to all project cards
document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");
    
    projectCards.forEach(card => {
        card.addEventListener("click", function() {
            const projectId = this.getAttribute("data-project");
            openProjectModal(projectId);
        });
    });
    
    // Close modal when clicking the X button
    closeButton.addEventListener("click", function() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 200);
    });
    
    // Close modal when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
            }, 200);
        }
    });
});


// Publication data ---- added on 4/16/2025
const publicationData = {
    pub1: {
        title: "Fire and Smoke Datasets in 20 Years: An In-depth Review",
        // journal: "",
        date: "March 2025",
        // authors: "",
        abstract: "Fire and smoke phenomena pose a significant threat to the natural environment, ecosystems, and global economy, as well as human lives and wildlife. In this particular circumstance, there is a demand for more sophisticated and advanced technologies to implement an effective strategy for early detection, real-time monitoring, and minimizing the overall impacts of fires on ecological balance and public safety. Recently, the rapid advancement of Artificial Intelligence (AI) and Computer Vision (CV) frameworks has substantially revolutionized the momentum for developing efficient fire management systems. However, these systems extensively rely on the availability of adequate and high-quality fire and smoke data to create proficient Machine Learning (ML) methods for various tasks, such as detection and monitoring. Although fire and smoke datasets play a critical role in training, evaluating, and testing advanced Deep Learning (DL) models, a comprehensive review of the existing datasets is still unexplored. For this purpose, we provide an in-depth review to systematically analyze and evaluate fire and smoke datasets collected over the past 20 years. We investigate the characteristics of each dataset, including type, size, format, collection methods, and geographical diversities. We also review and highlight the unique features of each dataset, such as imaging modalities (RGB, thermal, infrared) and their applicability for different fire management tasks (classification, segmentation, detection). Furthermore, we summarize the strengths and weaknesses of each dataset and discuss their potential for advancing research and technology in fire management. Ultimately, we conduct extensive experimental analyses across different datasets using several state-of-the-art algorithms, such as ResNet-50, DeepLab-V3, and YoloV8.",
        paperLink: "https://arxiv.org/abs/2503.14552"
    }
    // Add more publications as needed
};

// Modal elements for publications
const abstractModal = document.getElementById("abstract-modal");
const abstractCloseButton = document.querySelector("#abstract-modal .close-button");
const modalPaperTitle = document.getElementById("modal-paper-title");
// const modalJournal = document.getElementById("modal-journal");
const modalDate = document.getElementById("modal-date");
// const modalAuthors = document.getElementById("modal-authors");
const modalAbstract = document.getElementById("modal-abstract");
const modalPaperLink = document.getElementById("modal-paper-link");

// Function to open abstract modal
function openAbstractModal(publicationId) {
    const publication = publicationData[publicationId];
    
    // Set modal content
    modalPaperTitle.textContent = publication.title;
    // modalJournal.textContent = publication.journal;
    modalDate.textContent = publication.date;
    // modalAuthors.textContent = "Authors: " + publication.authors;
    modalAbstract.textContent = publication.abstract;

    // Set paper link
    modalPaperLink.href = publication.paperLink;
    
    // Show the modal with fade animation
    abstractModal.style.display = "block";
    setTimeout(() => {
        abstractModal.classList.add("show");
    }, 10);
}

// Add event listeners when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listeners to all "See more" buttons
    const seeMoreButtons = document.querySelectorAll(".see-more-btn");
    
    seeMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const publicationId = this.getAttribute("data-publication");
            openAbstractModal(publicationId);
        });
    });
    
    // Close modal when clicking the X button
    if (abstractCloseButton) {
        abstractCloseButton.addEventListener("click", function() {
            abstractModal.classList.remove("show");
            setTimeout(() => {
                abstractModal.style.display = "none";
            }, 200);
        });
    }
    
    // Close modal when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target === abstractModal) {
            abstractModal.classList.remove("show");
            setTimeout(() => {
                abstractModal.style.display = "none";
            }, 200);
        }
    });
});


// For certifications -- - - - added on 4/16
// document.addEventListener('DOMContentLoaded', function() {
//     const viewMoreButton = document.getElementById('view-more-certs');
//     const additionalCerts = document.getElementById('additional-certs');
    
//     if (viewMoreButton && additionalCerts) {
//         viewMoreButton.addEventListener('click', function() {
//             if (additionalCerts.style.display === 'none') {
//                 additionalCerts.style.display = 'grid';
//                 viewMoreButton.textContent = 'Show Less';
//             } else {
//                 additionalCerts.style.display = 'none';
//                 viewMoreButton.textContent = 'View More Certifications';
//             }
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const viewMoreButton = document.getElementById('view-more-certs');
    const additionalCerts = document.getElementById('additional-certs');
    const viewMoreContainer = document.getElementById('view-more-container');
    
    if (viewMoreButton && additionalCerts && viewMoreContainer) {
        viewMoreButton.addEventListener('click', function() {
            if (!additionalCerts.classList.contains('show')) {
                // EXPANDING: Show additional certifications
                
                // Step 1: Button smoothly moves down as boxes start appearing
                viewMoreContainer.classList.add('moving-down');
                additionalCerts.classList.add('show');
                additionalCerts.classList.add('slide-in');
                
                // Step 2: After button finishes moving down, reposition DOM and move button up
                setTimeout(() => {
                    // Move button to position after certification boxes
                    additionalCerts.parentNode.insertBefore(viewMoreContainer, additionalCerts.nextSibling);
                    
                    // Button smoothly moves up to final position
                    viewMoreContainer.classList.remove('moving-down');
                    viewMoreContainer.classList.add('moving-up');
                    
                    // Clean up animation classes
                    setTimeout(() => {
                        additionalCerts.classList.remove('slide-in');
                        viewMoreContainer.classList.remove('moving-up');
                    }, 400);
                    
                }, 400); // Wait for button and boxes to finish their animations
                
                // Update button text and icon
                viewMoreButton.querySelector('span').textContent = 'Show Less';
                viewMoreButton.querySelector('i').className = 'icon solid fa-angle-up';
                
            } else {
                // COLLAPSING: Hide additional certifications
                
                // Step 1: Boxes start sliding out and button starts moving down simultaneously
                additionalCerts.classList.add('slide-out');
                viewMoreContainer.classList.add('moving-down');
                
                // Step 2: After animations, reposition DOM and move button up to original position
                setTimeout(() => {
                    // Move button back to original position
                    additionalCerts.parentNode.insertBefore(viewMoreContainer, additionalCerts);
                    
                    // Hide boxes completely
                    additionalCerts.classList.remove('show');
                    additionalCerts.classList.remove('slide-out');
                    
                    // Button smoothly moves up to original position
                    viewMoreContainer.classList.remove('moving-down');
                    viewMoreContainer.classList.add('moving-up');
                    
                    // Clean up
                    setTimeout(() => {
                        viewMoreContainer.classList.remove('moving-up');
                    }, 400);
                    
                }, 300); // Wait for slide-out animation to complete
                
                // Update button text and icon immediately
                viewMoreButton.querySelector('span').textContent = 'View More Certifications';
                viewMoreButton.querySelector('i').className = 'icon solid fa-angle-down';
            }
        });
    }
});